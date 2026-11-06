import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  devIndicators: false,
  // lets a test build use its own folder so it never clashes with `npm run dev`
  distDir: process.env.NEXT_DIST_DIR || ".next",
};
export default nextConfig;
