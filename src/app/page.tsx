// src/app/page.tsx
import type { Metadata } from 'next';
import LongWalk from '@/components/long-walk/LongWalk';
import { getBaseUrl, siteConfig } from '@/lib/site';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
  description: siteConfig.description,
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
    description: siteConfig.description,
    url: `${baseUrl}/`,
    siteName: 'Pushkar Mhatre — Portfolio',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 379,
        type: 'image/png',
        alt: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Mhatre — Full-Stack Web & AI Developer',
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <main>
      <LongWalk />
      {/* Semantic crawler & accessibility DOM fallback: always visible to search engines (Googlebot) and screen readers */}
      <section className="sr-only" aria-label="Professional Profile and Shipped Projects">
        <h1>Pushkar Mhatre — Full-Stack Web &amp; AI Developer</h1>
        <p>
          Official portfolio of Pushkar Mhatre, Full-Stack Web and AI Developer based in Mumbai, Maharashtra, India. Founder of Buildyn.
        </p>
        <h2>Featured Shipped Projects</h2>
        <ul>
          <li>
            <a href="https://sienvera.vercel.app/">Sienvera</a> — Luxury handmade art storefront with custom CMS admin.
          </li>
          <li>
            AttenDex — AI biometric facial attendance system with 98% detection accuracy.
          </li>
          <li>
            CryptoNova — Real-time cryptocurrency tracker streaming Binance WebSockets with 24/7 background notification sweeps.
          </li>
          <li>
            Sweep — Android WhatsApp media cleaner utility with card-by-card swipe triage.
          </li>
          <li>
            <a href="https://repo-medic.vercel.app">RepoMedic</a> — AI repository hygiene, health, and dependency audit platform.
          </li>
          <li>
            Luna — Emotion-aware conversational music recommendation AI.
          </li>
          <li>
            PHOCCy — Campus assistant chatbot with deterministic JSON intent resolution.
          </li>
          <li>
            <a href="https://www.pushkarmhatre.in">My Portfolio</a> — Full-stack developer portfolio and client conversion funnel.
          </li>
        </ul>
        <h2>Contact Information &amp; Verified Profiles</h2>
        <p>
          Email: <a href="mailto:pushkarmhatre007@gmail.com">pushkarmhatre007@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/pushkar-buildyn/">linkedin.com/in/pushkar-buildyn/</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/sgpushkar">github.com/sgpushkar</a>
        </p>
        <p>
          Company: <a href="https://www.buildyn.in/">buildyn.in</a>
        </p>
        <p>
          <a href="/works">View all project case studies and shipped works</a>
        </p>
      </section>
    </main>
  );
}
