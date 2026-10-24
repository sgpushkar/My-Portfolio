// src/app/works/page.tsx
import type { Metadata } from 'next';
import WorksPageClient from './WorksPageClient';

export const metadata: Metadata = {
  title: 'Works — Pushkar Mhatre | All Projects & Case Studies',
  description:
    'Explore all projects by Pushkar Mhatre — from full-stack web apps to AI-powered tools. Detailed case studies with problems, solutions, and real results.',
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    title: 'Works — Pushkar Mhatre',
    description: 'All projects and case studies by Pushkar Mhatre.',
    url: '/works',
    type: 'website',
  },
};

export default function WorksPage() {
  return <WorksPageClient />;
}
