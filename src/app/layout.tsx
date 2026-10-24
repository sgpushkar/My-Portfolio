// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  getBaseUrl,
  siteConfig,
  getPersonJsonLd,
  getWebSiteJsonLd,
  getProfilePageJsonLd,
  getBuildynOrganizationJsonLd,
} from '@/lib/site';
import './globals.css';

const texGyreCursor = localFont({
  src: [
    {
      path: './fonts/texgyrecursor-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/texgyrecursor-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/texgyrecursor-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/texgyrecursor-bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-cursor',
});

const mechanical = localFont({
  src: './fonts/Mechanical.otf',
  variable: '--font-mechanical',
});

const beautifulPoliceOfficer = localFont({
  src: './fonts/BeautifulPoliceOfficer.otf',
  variable: '--font-police',
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Pushkar Mhatre — Founder of Buildyn | Full-Stack Web & AI Developer',
    template: '%s | Pushkar Mhatre (Buildyn)',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Pushkar Mhatre', url: siteConfig.links.linkedin }],
  creator: 'Pushkar Mhatre',
  publisher: 'Pushkar Mhatre',
  applicationName: 'Pushkar Mhatre Portfolio',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'Pushkar Mhatre — The Long Walk',
    title: 'Pushkar Mhatre — Full-Stack Web & AI Developer | The Long Walk',
    description: siteConfig.description,
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
    description: siteConfig.description,
    images: ['/logo.png'],
    creator: '@pushkarmhatre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: [
      'ks3ODG4VWdgAWb8GOtxLq1OG1yeUYtWqP19iWzld-ls',
      'VHAHKgGNhcRgBGMuZDS4L6n5z9vN8vsKN9jRg-G5Ovo',
    ],
  },
  icons: {
    icon: [
      {
        url: '/pushkar-favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pushkar-favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pushkar-favicon-circle.png',
      },
    ],
    shortcut: '/pushkar-favicon-circle.png',
    apple: [
      {
        url: '/pushkar-monogram.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    getPersonJsonLd(),
    getProfilePageJsonLd(),
    getBuildynOrganizationJsonLd(),
    getWebSiteJsonLd(),
  ];

  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${texGyreCursor.variable} ${mechanical.variable} ${beautifulPoliceOfficer.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500&family=Rozha+One&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
