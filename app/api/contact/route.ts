import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Simple in-memory rate limiter per IP
type RateState = { tokens: number; lastRefill: number };
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_TOKENS = 5; // 5 requests per minute per IP
const ipToRateState = new Map<string, RateState>();

function getClientIp(req: Request): string {
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) return xfwd.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "127.0.0.1";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const state = ipToRateState.get(ip) ?? { tokens: RATE_LIMIT_TOKENS, lastRefill: now };

  // Refill tokens based on elapsed time
  const elapsed = now - state.lastRefill;
  if (elapsed > 0) {
    const refill = Math.floor(elapsed / RATE_LIMIT_WINDOW_MS) * RATE_LIMIT_TOKENS;
    if (refill > 0) {
      state.tokens = Math.min(RATE_LIMIT_TOKENS, state.tokens + refill);
      state.lastRefill = now;
    }
  }

  if (state.tokens <= 0) {
    ipToRateState.set(ip, state);
    return true;
  }

  state.tokens -= 1;
  ipToRateState.set(ip, state);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM || !process.env.CONTACT_TO) {
      return NextResponse.json(
        { success: false, message: "Email service not configured." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const {
      name,
      email,
      company,
      projectType,
      budget,
      message,
      timeline,
      honeypot,
    } = body ?? {};

    // Honeypot: if filled, pretend success without sending
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Thanks!" });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const subjectParts = ["New inquiry"];
    if (projectType) subjectParts.push(String(projectType));
    if (budget) subjectParts.push(`(${budget})`);
    const subject = subjectParts.join(" ");

    const textLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : undefined,
      projectType ? `Project Type: ${projectType}` : undefined,
      budget ? `Budget: ${budget}` : undefined,
      timeline ? `Timeline: ${timeline}` : undefined,
      "",
      message,
    ].filter(Boolean) as string[];

    await sgMail.send({
      to: process.env.CONTACT_TO,
      from: process.env.SENDGRID_FROM,
      subject,
      replyTo: email,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ success: true, message: "Thanks! We'll reply within 1 business day." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


