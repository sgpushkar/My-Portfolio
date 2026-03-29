// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative z-[2] text-center py-[52px] px-6 border-t border-white/[0.07]">
      <div className="font-display text-[1.2rem] font-bold mb-[6px] nav-logo-text">
        Pushkar Mhatre
      </div>
      <div className="text-[0.8rem] text-[#555]">
        © 2026 Pushkar Mhatre · All rights reserved
      </div>
      <div className="text-[0.72rem] text-[#444] mt-[6px] font-display">
        Built with Next.js · Tailwind CSS · TypeScript — Monochrome Edition ·
        Neural Particle Field
      </div>
    </footer>
  );
}
