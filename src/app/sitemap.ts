import type { MetadataRoute } from "next";
import { business, allCities } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/stump-grinding",
  "/residential",
  "/commercial",
  "/about",
  "/faq",
  "/gallery",
  "/reviews",
  "/contact",
  "/service-areas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${business.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/stump-grinding" ? 0.9 : 0.7,
  }));

  const cityEntries: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${business.url}/service-areas/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries];
}
