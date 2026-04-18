// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-transparent bg-[linear-gradient(180deg,rgba(2,6,23,0.9),rgba(2,6,23,1))] py-8 sm:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-muted/30 to-transparent" />
      <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-accent-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-orange-300/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: false }}
          className="relative rounded-lg border border-accent-muted/15 bg-white/4 px-5 py-6 backdrop-blur-xl md:px-6 md:py-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-warm/80">
                Pushkar Mhatre
              </p>
              <p className="mt-3 max-w-xl text-2xl font-black leading-tight text-white">
                Building thoughtful digital products with strong engineering underneath.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300/74">
                I care about useful interfaces, clean systems, and software that feels
                reliable from the first interaction to the last detail.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <GlowButton variant="primary" href="#contact">
                  Start a Project
                </GlowButton>
                <GlowButton variant="outline" href="#projects">
                  Browse Work
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Reach out
                </p>
                <div className="mt-2 space-y-1 text-sm text-slate-200">
                  <a
                    href="mailto:pushkarmhatre007@gmail.com"
                    className="block transition-colors hover:text-accent-warm"
                  >
                    pushkarmhatre007@gmail.com
                  </a>
                  <p className="text-slate-400">Mumbai, India</p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Find me
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300/82">
                  <a
                    href="https://github.com/sgpushkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-transparent px-4 py-2 transition-colors hover:border-accent-warm/20 hover:text-accent-warm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/pushkarmhatre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-transparent px-4 py-2 transition-colors hover:border-accent-warm/20 hover:text-accent-warm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-transparent pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright {currentYear} Pushkar Mhatre</p>
            <p>Designed and developed with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
