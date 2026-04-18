// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/layout/Navbar';
import { AnimatedBackground, InteractiveCursor } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Pushkar Mhatre - Full-Stack Engineer & AI Builder',
  description:
    'Handcrafted, intentional software. Building full-stack applications, AI systems, and polished interfaces. Not another AI-generated portfolio.',
  keywords: [
    'Pushkar Mhatre',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js',
    'React',
    'Node.js',
    'Python',
  ],
  authors: [{ name: 'Pushkar Mhatre' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-black text-accent-default antialiased">
        <AnimatedBackground />
        <InteractiveCursor />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
