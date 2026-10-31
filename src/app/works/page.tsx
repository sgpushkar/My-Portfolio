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
    siteName: 'Pushkar Mhatre — Portfolio',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 379,
        type: 'image/png',
        alt: 'Works & Case Studies — Pushkar Mhatre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works & Case Studies — Pushkar Mhatre',
    description:
      'Explore 8+ full-stack web applications, AI tools, and mobile products by Pushkar Mhatre.',
    images: ['/og-image.png'],
  },
};

export default function WorksPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/works#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Works & Case Studies',
            item: `${baseUrl}/works`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/works#collection`,
        url: `${baseUrl}/works`,
        name: 'Works & Case Studies — Pushkar Mhatre',
        description:
          'Showcase of shipped full-stack web apps, AI systems, and mobile software by Pushkar Mhatre.',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        author: {
          '@id': `${baseUrl}/#person`,
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: PROJECTS.length,
          itemListElement: PROJECTS.map((project, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: project.name,
              headline: project.hook,
              description: project.desc || project.problem,
              applicationCategory: project.role || 'DeveloperApplication',
              operatingSystem: 'Web, Android, Cross-platform',
              keywords: project.tags.join(', '),
              url: project.liveUrl || project.githubUrl,
              author: {
                '@id': `${baseUrl}/#person`,
              },
            },
          })),
        },
      },
    ],
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
