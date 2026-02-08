import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestTracker = new Map<string, { count: number; start: number }>();

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website: string;
}

function toTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(input: unknown): ContactPayload | null {
  if (!input || typeof input !== "object") return null;
  const data = input as Record<string, unknown>;

  return {
    name: toTrimmedString(data.name),
    email: toTrimmedString(data.email).toLowerCase(),
    phone: toTrimmedString(data.phone),
    company: toTrimmedString(data.company),
    service: toTrimmedString(data.service),
    budget: toTrimmedString(data.budget),
    message: toTrimmedString(data.message),
    website: toTrimmedString(data.website),
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = ipRequestTracker.get(ip);

  if (!existing || now - existing.start > RATE_LIMIT_WINDOW_MS) {
    ipRequestTracker.set(ip, { count: 1, start: now });
    return false;
  }

  existing.count += 1;
  ipRequestTracker.set(ip, existing);

  return existing.count > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";

  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { message: "Too many submissions. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const payload = parsePayload(await request.json());
    if (!payload) {
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 }
      );
    }

    // Honeypot: quietly accept bot submissions so bots don't adapt quickly.
    if (payload.website) {
      return NextResponse.json({ message: "Message sent successfully." });
    }

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
      return NextResponse.json(
        { message: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (payload.message.length < 10) {
      return NextResponse.json(
        { message: "Please provide a bit more detail in your message." },
        { status: 400 }
      );
    }

    const resendApiKey =
      process.env.RESEND_API_KEY ?? process.env.resend_api_key;
    if (!resendApiKey) {
      return NextResponse.json(
        { message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "ClickBoost <antoine@clickboost.ca>";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "antoine@clickboost.ca";

    const text = [
      "New contact form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Company: ${payload.company || "Not provided"}`,
      `Service Interest: ${payload.service}`,
      `Budget: ${payload.budget || "Not provided"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `New Contact Form Submission: ${payload.name}`,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend API error:", resendError);
      return NextResponse.json(
        { message: "Message could not be sent right now. Please try again soon." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Thanks, your message has been sent." });
  } catch (error) {
    console.error("Contact form submit error:", error);
    return NextResponse.json(
      { message: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
