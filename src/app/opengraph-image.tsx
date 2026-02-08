import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClickBoost — We Build What Others Can't";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a12 0%, #12121f 50%, #1a1a2e 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orb top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,71,217,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Gradient orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #a78bfa, #818cf8, #c084fc)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          ClickBoost
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
            marginTop: "16px",
            fontWeight: 500,
          }}
        >
          We Build What Others Can&apos;t
        </div>

        {/* Services bar */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["Web Development", "SEO", "AI Implementation", "App Development"].map(
            (service) => (
              <div
                key={service}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(167,139,250,0.3)",
                  background: "rgba(167,139,250,0.1)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {service}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 400,
          }}
        >
          clickboost.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
