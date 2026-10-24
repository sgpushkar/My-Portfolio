// src/app/works/page.tsx
import type { Metadata } from 'next';
import WorksPageClient from './WorksPageClient';
import { PROJECTS } from '@/lib/data';
import { getBaseUrl } from '@/lib/site';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Works & Case Studies — Pushkar Mhatre | Shipped Projects',
  description:
    'Explore 8+ full-stack web applications, AI tools, and mobile products by Pushkar Mhatre. Detailed case studies covering architecture, problem statement, and results.',
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    title: 'Works & Case Studies — Pushkar Mhatre | Shipped Projects',
    description:
      'Explore 8+ full-stack web applications, AI tools, and mobile products by Pushkar Mhatre.',
    url: `${baseUrl}/works`,
    siteName: 'Pushkar Mhatre — The Long Walk',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Pushkar Mhatre Works Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works & Case Studies — Pushkar Mhatre',
    description:
      'Explore 8+ full-stack web applications, AI tools, and mobile products by Pushkar Mhatre.',
    images: ['/logo.png'],
  },
};

export default function WorksPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pushkar Mhatre — Works & Case Studies',
    description:
      'Showcase of shipped full-stack web apps, AI systems, and mobile software by Pushkar Mhatre.',
    url: `${baseUrl}/works`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: PROJECTS.map((project, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.name,
          headline: project.hook,
          description: project.desc || project.problem,
          keywords: project.tags.join(', '),
          url: project.liveUrl || project.githubUrl,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <WorksPageClient />
    </>
  );
}
