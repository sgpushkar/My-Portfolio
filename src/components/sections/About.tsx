// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import { IconRobot, IconBolt, IconCursor } from '@/components/icons';


const THINKING_POINTS = [
  {
    title: 'Code is a craft, not a chore.',
    desc: "I don't just 'write' code. I build tools that solve real human frictions. To me, a well-placed button or a snappy API response is a form of art.",
  },
  {
    title: 'The "Why" before the "How".',
    desc: "I spend more time understanding the problem than typing the solution. If we don't know why we're building it, we shouldn't be building it.",
  },
  {
    title: 'Ship fast, refine forever.',
    desc: "I believe in getting a working product into users' hands as quickly as possible. Momentum is better than perfection in a vacuum.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-transparent">
      <div className="divider" />
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="section-label mb-4">About Me</p>
            <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white mb-6">
              Beyond the code,{' '}
              <span className="text-white/50">I build</span> with{' '}
              <span className="text-white">purpose and precision.</span>
            </h2>

            <div className="space-y-8 mt-8">
              <p className="text-[15px] text-white/60 leading-relaxed max-w-lg">
                I see software as more than just logic. It's about creating experiences that feel native, 
                intuitive, and reliable. Whether it's an AI-powered tool or a simple landing page, 
                my approach remains the same: build it like I own it.
              </p>
              
              <div className="space-y-6">
                {THINKING_POINTS.map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white mb-1">{point.title}</p>
                      <p className="text-[14px] text-white/45 leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — What I enjoy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="card p-8 border-white/[0.06]">
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/30 mb-6 font-cursor">What I enjoy building</p>
              
              <ul className="space-y-5">
                {[
                  { icon: <IconRobot className="w-5 h-5 text-white/70" />, label: 'AI Integrations', sub: 'Chatbots, automation, and LLM workflows.' },
                  { icon: <IconBolt className="w-5 h-5 text-white/70" />, label: 'High-Performance Web', sub: 'Fast, SEO-optimized, and conversion-focused.' },
                  { icon: <IconCursor className="w-5 h-5 text-white/70" />, label: 'UI/UX Details', sub: 'Micro-interactions and fluid animations.' }
                ].map((item, i) => (
                  <motion.li 
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[14px] font-medium text-white">{item.label}</p>
                      <p className="text-[13px] text-white/40">{item.sub}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="card p-8 bg-white/[0.02]">
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/30 mb-4 font-cursor">Current Focus</p>
              <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                I'm currently deep-diving into <span className="text-white">Next.js 15 and AI Agent workflows</span>, 
                exploring how to make the web feel more "alive" and interactive.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

