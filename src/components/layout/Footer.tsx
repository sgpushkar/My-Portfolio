// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: 'https://github.com/sgpushkar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/pushkar-mhatre-9430103a5' },
    { label: 'Email', href: 'mailto:pushkarmhatre007@gmail.com' },
  ];

  return (
    <footer className="relative w-full border-t border-white/[0.06] bg-[#080808]">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          {/* Left — brand */}
          <div className="flex flex-col gap-4">
            <img 
              src="/logo_icon.png" 
              alt="Pushkar Mhatre" 
              className="h-10 w-10 object-contain opacity-80"
            />
            <div>
              <p className="text-sm font-semibold text-white font-cursor tracking-tight">
                Pushkar Mhatre
              </p>
              <p className="mt-1 text-[13px] text-white/40 font-cursor">
                Web Developer · Mumbai, India
              </p>
            </div>
          </div>

          {/* Center — availability */}
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            Currently taking new projects
          </div>

          {/* Right — socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-[13px] text-white/40 hover:text-white/80 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-white/25">
          <p>© {currentYear} Pushkar Mhatre. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
