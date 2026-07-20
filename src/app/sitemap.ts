import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/tentang",
    "/pilot",
    "/kontak",
    "/kebijakan-privasi",
    "/ketentuan-penggunaan",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}

