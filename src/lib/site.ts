// src/lib/site.ts

export const DEFAULT_SITE_URL = 'https://pushkarmhatre.me';

/**
 * Returns the resolved base URL for the portfolio site.
 * Prioritizes user environment variables, Vercel production/preview domain,
 * and falls back to a clean default production URL.
 */
export function getBaseUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : DEFAULT_SITE_URL);

  const trimmed = envUrl.trim().replace(/\/$/, '');
  return trimmed.startsWith('http://') || trimmed.startsWith('https://')
    ? trimmed
    : `https://${trimmed}`;
}

export const siteConfig = {
  name: 'Pushkar Mhatre',
  title: 'Pushkar Mhatre — Full-Stack Web & AI Developer | The Long Walk',
  tagline: 'I build things that feel as good as they look.',
  description:
    'Full-stack developer, AI engineer, and founder of Buildyn based in Mumbai. Specialized in Next.js, React, Node.js, AI agent workflows, and high-performance interactive web products.',
  url: getBaseUrl(),
  author: 'Pushkar Mhatre',
  email: 'pushkarmhatre007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pushkar-buildyn/',
    github: 'https://github.com/sgpushkar',
    buildyn: 'https://buildyn.in',
  },
  keywords: [
    'Pushkar Mhatre',
    'Pushkar Buildyn',
    'Pushkar Mhatre LinkedIn',
    'Full-Stack Developer Mumbai',
    'AI Engineer India',
    'Next.js 15 Developer',
    'Next.js 16 Developer',
    'React Developer Mumbai',
    'Node.js Developer',
    'AI Agent Workflows',
    'Freelance Web Developer Mumbai',
    'Creative Developer Portfolio',
    'Buildyn Founder',
    'The Long Walk Portfolio',
    'Web Developer Panvel',
    'Full-Stack Engineer India',
    'Frontend Animation Framer Motion',
    'UI UX Engineer Mumbai',
  ],
};

export function getPersonJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pushkar Mhatre',
    alternateName: ['Pushkar Buildyn', 'sgpushkar'],
    url: baseUrl,
    image: `${baseUrl}/pushkar-monogram.png`,
    jobTitle: 'Full-Stack Web & AI Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Buildyn',
      url: 'https://buildyn.in',
    },
    sameAs: [
      'https://www.linkedin.com/in/pushkar-buildyn/',
      'https://github.com/sgpushkar',
      'https://buildyn.in',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Full-Stack Web Development',
      'Artificial Intelligence',
      'AI Agent Workflows',
      'LLM Integrations',
      'UI/UX Design',
      'Web Performance & SEO',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Pillai HOC College, Mumbai',
    },
  };
}

export function getWebSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pushkar Mhatre — Official Portfolio',
    alternateName: ['Pushkar Mhatre The Long Walk', 'Pushkar Buildyn Portfolio'],
    url: baseUrl,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: 'Pushkar Mhatre',
    },
    inLanguage: 'en-US',
  };
}

export function getProfilePageJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: 'Pushkar Mhatre',
      alternateName: ['Pushkar Buildyn', 'sgpushkar'],
      description: siteConfig.description,
      image: `${baseUrl}/pushkar-monogram.png`,
      jobTitle: 'Full-Stack Web & AI Developer',
      sameAs: [
        'https://www.linkedin.com/in/pushkar-buildyn/',
        'https://github.com/sgpushkar',
        'https://buildyn.in',
      ],
    },
  };
}

