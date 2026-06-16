import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/prestations",
  "/realisations",
  "/avis",
  "/a-propos",
  "/zone-intervention",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const lastModified = new Date("2026-06-16");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/zone-intervention" ? 0.85 : 0.7,
  }));
}
