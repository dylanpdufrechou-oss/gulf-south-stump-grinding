import type { NextConfig } from "next";

// Cities dropped when Greater New Orleans coverage ended (2026-08). Redirect
// instead of deleting outright so no dead links/404s hit anyone with these
// URLs bookmarked, indexed, or linked from elsewhere.
const removedServiceAreaSlugs = [
  "new-orleans",
  "metairie",
  "kenner",
  "gretna",
  "chalmette",
  "laplace",
  "luling",
  "destrehan",
];

const nextConfig: NextConfig = {
  async redirects() {
    return removedServiceAreaSlugs.map((slug) => ({
      source: `/service-areas/${slug}`,
      destination: "/service-areas",
      permanent: true,
    }));
  },
};

export default nextConfig;
