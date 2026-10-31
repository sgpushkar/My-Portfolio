// src/app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
    short_name: 'Pushkar Mhatre',
    description:
      'Official portfolio of Pushkar Mhatre. Full-stack web and AI developer based in Mumbai.',
    start_url: '/',
    id: '/',
    scope: '/',
    lang: 'en',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#080808',
    orientation: 'portrait',
    categories: ['portfolio', 'technology', 'developer'],
    icons: [
      {
        src: '/pushkar-favicon-circle.png',
        sizes: '211x212',
        type: 'image/png',
      },
      {
        src: '/pushkar-monogram.png',
        sizes: '229x228',
        type: 'image/png',
      },
      {
        src: '/pushkar-favicon-dark.png',
        sizes: '260x251',
        type: 'image/png',
      },
      {
        src: '/logo_icon.png',
        sizes: '500x500',
        type: 'image/png',
      },
    ],
  };
}
