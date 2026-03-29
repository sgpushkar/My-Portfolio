// src/app/layout.tsx
import type { Metadata } from "next";
import { Oxanium, DM_Sans } from "next/font/google";
import "./globals.css";

import NeuralCanvas from "@/components/ui/NeuralCanvas";
import Cursor from "@/components/ui/Cursor";
import ProgressBar from "@/components/ui/ProgressBar";
import ClientEffects from "@/components/ui/ClientEffects";
import Navbar from "@/components/layout/Navbar";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pushkar Mhatre — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Pushkar Mhatre — Final year Diploma student building AI apps, backend systems, and full-stack tools from Mumbai, India.",
  keywords: [
    "Pushkar Mhatre",
    "Full Stack Developer",
    "AI Developer",
    "Backend Developer",
    "React",
    "Node.js",
    "Python",
    "Mumbai",
  ],
  authors: [{ name: "Pushkar Mhatre" }],
  openGraph: {
    title: "Pushkar Mhatre — Full-Stack Developer & AI Enthusiast",
    description:
      "Building AI-powered apps, backend systems, and full-stack tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-[#f0f0f0] antialiased">
        {/* Ambient background effects */}
        <NeuralCanvas />
        <div className="grid-overlay" />
        <div className="scanline" />
        <div className="noise" />

        {/* Cursor */}
        <Cursor />

        {/* Progress bar */}
        <ProgressBar />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Scroll reveal + glass glow (needs DOM ready) */}
        <ClientEffects />
      </body>
    </html>
  );
}
