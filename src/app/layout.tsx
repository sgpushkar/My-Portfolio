// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getBaseUrl } from '@/lib/site';
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
  title: 'Pushkar Mhatre — The Long Walk',
  description:
    "I build things that feel as good as they look. Full-stack builder, AI tinkerer, collector of small details. This is what I've made so far.",
  keywords: [
    'Pushkar Mhatre',
    'The Long Walk',
    'Web Developer',
    'AI Engineer',
    'Next.js',
    'React',
    'Node.js',
    'Mumbai',
  ],
  authors: [{ name: 'Pushkar Mhatre' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pushkar Mhatre — The Long Walk',
    description: 'I build things that feel as good as they look.',
    url: '/',
    type: 'website',
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
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
