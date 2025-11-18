import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 80% 100%, rgba(139,92,246,0.30), transparent 55%), #040915",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 42,
            fontWeight: 700,
            color: "white",
            marginBottom: 18,
          }}
        >
          <span>Click</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(59,130,246), rgb(99,102,241), rgb(168,85,247))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Boost
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#fff",
            maxWidth: 960,
          }}
        >
          Professional Web & App Development Agency
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 960,
          }}
        >
          Transform your ideas into powerful digital solutions.
        </div>
      </div>
    ),
    { ...size }
  );
}


