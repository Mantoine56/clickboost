import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog-data";

export const runtime = "edge";
export const alt = "ClickBoost Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.title ?? "Blog Post";
  const category = post?.category ?? "Article";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0a0a12 0%, #12121f 50%, #1a1a2e 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,71,217,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(167,139,250,0.3)",
              background: "rgba(167,139,250,0.1)",
              color: "#a78bfa",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #a78bfa, #818cf8, #c084fc)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ClickBoost
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            clickboost.ca/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
