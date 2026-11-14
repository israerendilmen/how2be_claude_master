import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://claudelearnacademy.vercel.app";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/docs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/lesson/ilk-ders`, changeFrequency: "monthly", priority: 0.7 }
  ];
}
