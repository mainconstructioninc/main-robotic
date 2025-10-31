import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/terms", "/provacy", "cookies", "/disclaimer"],
    },
    sitemap: "https://mainco.io/sitemap.xml",
  };
}
