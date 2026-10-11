// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export const metadata: Metadata = {
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
  openGraph: {
    title: 'Pushkar Mhatre — The Long Walk',
    description: 'I build things that feel as good as they look.',
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
