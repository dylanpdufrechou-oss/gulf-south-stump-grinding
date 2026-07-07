import type { MetadataRoute } from "next";
import { business } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${business.url}/sitemap.xml`,
  };
}
