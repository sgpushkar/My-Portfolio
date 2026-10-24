// src/lib/site.ts

/**
 * Target production canonical URL.
 * Defaults strictly to the intended Vercel deployment URL as requested.
 */
export const DEFAULT_SITE_URL = 'https://pushkar-mhatre.vercel.app';

function normalizeUrl(url: string): string {
  const trimmed = url.trim().replace(/\/+$/, '');
  return trimmed.startsWith('http://') || trimmed.startsWith('https://')
    ? trimmed
    : `https://${trimmed}`;
}

/**
 * Returns the resolved canonical base URL for the portfolio.
 * - Prioritizes explicit NEXT_PUBLIC_SITE_URL or SITE_URL overrides.
 * - In Vercel environments, only allows production URLs to become canonical,
 *   preventing branch/preview deployments from being indexed as canonicals.
 * - Defaults strictly to https://pushkar-mhatre.vercel.app.
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL);
  }

  // Prevent preview deployments from hijacking canonical URLs
  if (process.env.VERCEL_ENV === 'production') {
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return normalizeUrl(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
    }
  }

  return DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: 'Pushkar Mhatre',
  title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
  tagline: 'I build things that feel as good as they look.',
  description:
    'Official portfolio of Pushkar Mhatre. Full-stack web and AI developer based in Mumbai, building fast, responsive web applications, interactive products, and AI workflows.',
  url: getBaseUrl(),
  author: 'Pushkar Mhatre',
  email: 'pushkarmhatre007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pushkar-buildyn/',
    github: 'https://github.com/sgpushkar',
    buildyn: 'https://www.buildyn.in/',
  },
  images: {
    og: '/og-image.png',
    logo: '/logo.png',
    monogram: '/pushkar-monogram.png',
    avatar: '/pushkar-favicon-circle.png',
  },
  keywords: [
    'Pushkar Mhatre',
    'Pushkar Mhatre developer portfolio',
    'Pushkar Mhatre Buildyn',
    'Pushkar Mhatre full-stack developer',
    'Pushkar Mhatre AI developer',
    'Founder of Buildyn',
    'Buildyn',
    'Full-Stack Developer Mumbai',
    'AI Engineer India',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Creative Web Developer',
  ],
};

/**
 * Person Schema (Schema.org)
 * Disambiguates Pushkar Mhatre's entity with verified profiles and company ownership.
 */
export function getPersonJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Pushkar Mhatre',
    alternateName: ['Pushkar Buildyn', 'sgpushkar'],
    url: baseUrl,
    image: `${baseUrl}/pushkar-monogram.png`,
    jobTitle: 'Full-Stack Web & AI Developer',
    description: siteConfig.description,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.buildyn.in/#organization',
      name: 'Buildyn',
      url: 'https://www.buildyn.in/',
    },
    founder: {
      '@type': 'Organization',
      '@id': 'https://www.buildyn.in/#organization',
      name: 'Buildyn',
      url: 'https://www.buildyn.in/',
    },
    sameAs: [
      'https://www.linkedin.com/in/pushkar-buildyn/',
      'https://github.com/sgpushkar',
      'https://www.buildyn.in/',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Full-Stack Web Development',
      'Artificial Intelligence',
      'AI Agent Workflows',
      'Python',
      'REST APIs',
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

/**
 * Organization Schema (Schema.org)
 * Connects Buildyn to Pushkar Mhatre with mutual founder verification.
 */
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
      'https://www.linkedin.com/in/pushkar-buildyn/',
      baseUrl,
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

/**
 * WebSite Schema (Schema.org)
 * Informs search engines about site identity, authorship, and publisher.
 */
export function getWebSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Pushkar Mhatre — Portfolio',
    alternateName: [
      'Pushkar Mhatre Portfolio',
      'Pushkar Mhatre Developer Portfolio',
    ],
    url: baseUrl,
    description: siteConfig.description,
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    author: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * ProfilePage Schema (Schema.org)
 * Official Google-supported schema for personal portfolios and developer profile hubs.
 */
export function getProfilePageJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profilepage`,
    url: baseUrl,
    name: 'Pushkar Mhatre — Developer Portfolio',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    dateCreated: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@id': `${baseUrl}/#person`,
    },
  };
}
