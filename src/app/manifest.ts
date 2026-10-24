// src/app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
    short_name: 'Pushkar Mhatre',
    description:
      'I build things that feel as good as they look. Full-stack web and AI developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#080808',
    orientation: 'portrait',
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
