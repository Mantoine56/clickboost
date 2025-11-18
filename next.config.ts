import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const cspProd = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "script-src 'self' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https:",
  "frame-src https://my.spline.design https://prod.spline.design",
  "connect-src 'self' https://prod.spline.design",
].join("; ");

// Relaxed CSP for development to allow Next.js dev inline scripts and HMR websockets
const cspDev = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https:",
  "frame-src https://my.spline.design https://prod.spline.design",
  "connect-src 'self' https: http: ws: wss:",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: isDev ? cspDev : cspProd },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
