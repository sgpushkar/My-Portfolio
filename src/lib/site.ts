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
  title: 'Pushkar Mhatre — Founder of Buildyn | Full-Stack Web & AI Developer',
  tagline: 'I build things that feel as good as they look.',
  description:
    'Official portfolio of Pushkar Mhatre, Founder of Buildyn (www.buildyn.in). Full-stack developer & AI engineer based in Mumbai creating high-converting websites, web apps, and AI systems.',
  url: getBaseUrl(),
  author: 'Pushkar Mhatre',
  email: 'pushkarmhatre007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pushkar-buildyn/',
    github: 'https://github.com/sgpushkar',
    buildyn: 'https://www.buildyn.in/',
  },
  keywords: [
    'Pushkar Mhatre',
    'Buildyn',
    'Buildyn Founder',
    'Founder of Buildyn',
    'Buildyn Pushkar',
    'Pushkar Buildyn',
    'buildyn.in',
    'www.buildyn.in',
    'Buildyn Studio',
    'Buildyn Agency',
    'Buildyn Mumbai',
    'Pushkar Mhatre Buildyn',
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
    'The Long Walk Portfolio',
    'Web Developer Panvel',
    'Full-Stack Engineer India',
  ],
};

export function getPersonJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Pushkar Mhatre',
    alternateName: ['Pushkar Buildyn', 'Pushkar Mhatre Buildyn', 'sgpushkar'],
    url: baseUrl,
    image: `${baseUrl}/pushkar-monogram.png`,
    jobTitle: 'Founder & Full-Stack Developer',
    description: 'Founder of Buildyn (www.buildyn.in). Full-Stack Web & AI Developer based in Mumbai.',
    founder: {
      '@type': 'Organization',
      name: 'Buildyn',
      url: 'https://www.buildyn.in/',
      sameAs: ['https://www.buildyn.in/', 'https://buildyn.in'],
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Buildyn',
      url: 'https://www.buildyn.in/',
    },
    sameAs: [
      'https://www.linkedin.com/in/pushkar-buildyn/',
      'https://github.com/sgpushkar',
      'https://www.buildyn.in/',
    ],
    knowsAbout: [
      'Buildyn Studio',
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

export function getBuildynOrganizationJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.buildyn.in/#organization',
    name: 'Buildyn',
    alternateName: ['Buildyn Studio', 'Buildyn Digital'],
    url: 'https://www.buildyn.in/',
    sameAs: [
      'https://www.buildyn.in/',
      'https://buildyn.in',
      'https://www.linkedin.com/in/pushkar-buildyn/',
      `${baseUrl}`,
    ],
    founder: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Pushkar Mhatre',
      url: baseUrl,
      jobTitle: 'Founder & Lead Developer',
      sameAs: [
        'https://www.linkedin.com/in/pushkar-buildyn/',
        'https://github.com/sgpushkar',
      ],
    },
  };
}

export function getWebSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pushkar Mhatre — Founder of Buildyn | Official Portfolio',
    alternateName: [
      'Pushkar Mhatre The Long Walk',
      'Pushkar Buildyn Portfolio',
      'Buildyn Pushkar Mhatre',
    ],
    url: baseUrl,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
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
      '@id': `${baseUrl}/#person`,
      name: 'Pushkar Mhatre',
      alternateName: ['Pushkar Buildyn', 'Pushkar Mhatre Buildyn', 'sgpushkar'],
      description: siteConfig.description,
      image: `${baseUrl}/pushkar-monogram.png`,
      jobTitle: 'Founder & Full-Stack Developer at Buildyn',
      sameAs: [
        'https://www.linkedin.com/in/pushkar-buildyn/',
        'https://github.com/sgpushkar',
        'https://www.buildyn.in/',
      ],
    },
  };
}
