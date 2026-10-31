// src/lib/site.ts

/**
 * Target production canonical URL.
 * Official custom domain for Pushkar Mhatre.
 */
export const DEFAULT_SITE_URL = 'https://www.pushkarmhatre.in';

function normalizeUrl(url: string): string {
  const trimmed = url.trim().replace(/\/+$/, '');
  return trimmed.startsWith('http://') || trimmed.startsWith('https://')
    ? trimmed
    : `https://${trimmed}`;
}

/**
 * Returns the resolved canonical base URL for the portfolio.
 * - Prioritizes explicit NEXT_PUBLIC_SITE_URL or SITE_URL overrides.
 * - Defaults to https://www.pushkarmhatre.in.
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL);
  }

  return DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: 'Pushkar Mhatre',
  title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
  tagline: 'I build things that feel as good as they look.',
  description:
    'Official portfolio of Pushkar Mhatre — Full-Stack Web & AI Developer and Founder of Buildyn based in Mumbai. Building responsive web applications & AI products.',
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
    'Pushkar Mhatre portfolio',
    'Pushkar Mhatre developer',
    'Pushkar Mhatre Buildyn',
    'Pushkar Buildyn',
    'sgpushkar',
    'Full-Stack Developer Mumbai',
    'Web Developer Mumbai',
    'AI Developer Mumbai',
    'AI Engineer India',
    'Next.js Developer Mumbai',
    'React Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Creative Developer Portfolio',
    'Freelance Web Developer Mumbai',
    'Buildyn',
    'Buildyn Studio',
    'AI Agent Workflows',
    'Front-End Developer',
    'Back-End Developer',
    'Software Engineer India',
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
    url: `${baseUrl}/`,
    image: `${baseUrl}/pushkar-monogram.png`,
    jobTitle: 'Full-Stack Web & AI Developer',
    description: siteConfig.description,
    email: 'mailto:pushkarmhatre007@gmail.com',
    gender: 'https://schema.org/Male',
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
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
      `${baseUrl}/`,
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
      `${baseUrl}/`,
    ],
    founder: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Pushkar Mhatre',
      url: `${baseUrl}/`,
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
    url: `${baseUrl}/`,
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
    url: `${baseUrl}/`,
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

/**
 * Unified JSON-LD Schema Graph (Schema.org)
 * Assembles Person, WebSite, ProfilePage, and Organization schemas into a single connected graph.
 */
export function getCompleteJsonLdGraph() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Pushkar Mhatre',
        alternateName: ['Pushkar Buildyn', 'sgpushkar'],
        url: `${baseUrl}/`,
        image: `${baseUrl}/pushkar-monogram.png`,
        jobTitle: 'Full-Stack Web & AI Developer',
        description: siteConfig.description,
        email: 'mailto:pushkarmhatre007@gmail.com',
        gender: 'https://schema.org/Male',
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
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
          `${baseUrl}/`,
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
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: 'Pushkar Mhatre — Portfolio',
        alternateName: [
          'Pushkar Mhatre Portfolio',
          'Pushkar Mhatre Developer Portfolio',
        ],
        description: siteConfig.description,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
        author: {
          '@id': `${baseUrl}/#person`,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#profilepage`,
        url: `${baseUrl}/`,
        name: 'Pushkar Mhatre — Developer Portfolio',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        dateCreated: '2024-01-01T00:00:00Z',
        dateModified: new Date().toISOString(),
        mainEntity: {
          '@id': `${baseUrl}/#person`,
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.buildyn.in/#organization',
        name: 'Buildyn',
        alternateName: ['Buildyn Studio', 'Buildyn Digital'],
        url: 'https://www.buildyn.in/',
        sameAs: [
          'https://www.buildyn.in/',
          'https://www.linkedin.com/in/pushkar-buildyn/',
          `${baseUrl}/`,
        ],
        founder: {
          '@type': 'Person',
          '@id': `${baseUrl}/#person`,
          name: 'Pushkar Mhatre',
          url: `${baseUrl}/`,
          jobTitle: 'Founder & Lead Developer',
          sameAs: [
            'https://www.linkedin.com/in/pushkar-buildyn/',
            'https://github.com/sgpushkar',
          ],
        },
      },
    ],
  };
}
