// src/components/sections/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import { IconCheck } from '@/components/icons';


const ICONS: Record<string, string> = {
  '→': '↗',
  '◈': '◈',
  '⬡': '⬡',
};

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-transparent">
      <div className="divider" />
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label mb-4">Services</p>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white">
            What I build,{' '}
            <span className="text-white/40">and what you get out of it.</span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card group flex flex-col p-7 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/60 text-lg mb-6 group-hover:border-white/20 group-hover:text-white/80 transition-all">
                {ICONS[service.icon] || service.icon}
              </div>

              {/* Who it's for */}
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30 mb-3 font-medium">
                For {service.who}
              </p>

              {/* Title */}
              <h3 className="font-mono text-[1.35rem] font-bold text-white mb-3 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-white/45 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/50">
                    <IconCheck className="mt-[2px] flex-shrink-0 w-3.5 h-3.5 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div className="pt-5 border-t border-white/[0.07]">
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/25 mb-1.5">Outcome</p>
                <p className="text-[13px] text-white/60 leading-relaxed font-medium">
                  {service.outcome}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors group-hover:text-white/70"
              >
                Let&apos;s discuss
                <span className="text-white/30 group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-[13px] text-white/25"
        >
          Not sure which fits your needs?{' '}
          <a href="#contact" className="text-white/50 hover:text-white underline underline-offset-4 transition-colors">
            Send me a message
          </a>{' '}
          — I&apos;ll figure it out with you.
        </motion.p>
      </div>
    </section>
  );
}
