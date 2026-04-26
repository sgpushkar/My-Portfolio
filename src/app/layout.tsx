// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

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

export const metadata: Metadata = {
  title: 'Pushkar Mhatre — Web Developer for Startups & Local Businesses',
  description:
    'I build things that feel as good as they look. Serving startups, local businesses, and personal brands. Fast, clean, and built to convert.',
  keywords: [
    'Pushkar Mhatre',
    'Web Developer',
    'Freelance Developer',
    'Website for startups',
    'Business website India',
    'Landing page developer',
    'Next.js',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Pushkar Mhatre' }],
  openGraph: {
    title: 'Pushkar Mhatre — Web Developer for Startups & Local Businesses',
    description:
      'I build things that feel as good as they look. Fast, clean, conversion-focused.',
    type: 'website',
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
      className={`${texGyreCursor.variable} ${mechanical.variable} ${beautifulPoliceOfficer.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="overflow-x-hidden bg-bg text-accent-DEFAULT antialiased">
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
