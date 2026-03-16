import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allToolSlugsQuery, allDownloadSlugsQuery } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kinderleicht.ai";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/apps`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/downloads`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/so-arbeiten-wir`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
{ url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];

  const [tools, downloads] = await Promise.all([
    client.fetch<{ slug: string }[]>(allToolSlugsQuery),
    client.fetch<{ slug: string }[]>(allDownloadSlugsQuery),
  ]);

  const toolRoutes: MetadataRoute.Sitemap = tools
    .filter((t) => t.slug)
    .map((t) => ({
      url: `${baseUrl}/tools/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const downloadRoutes: MetadataRoute.Sitemap = downloads
    .filter((d) => d.slug)
    .map((d) => ({
      url: `${baseUrl}/downloads/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...toolRoutes, ...downloadRoutes];
}
