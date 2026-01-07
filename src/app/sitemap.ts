import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://creativearc.ai",
      lastModified: new Date(),
    },
    {
      url: "https://creativearc.ai/about",
      lastModified: new Date(),
    },
    {
      url: "https://creativearc.ai/services",
      lastModified: new Date(),
    },
    {
      url: "https://creativearc.ai/products",
      lastModified: new Date(),
    },
    {
      url: "https://creativearc.ai/careers",
      lastModified: new Date(),
    },
    {
      url: "https://creativearc.ai/contact",
      lastModified: new Date(),
    },
  ];
}
