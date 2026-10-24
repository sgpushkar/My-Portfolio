// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/works`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
