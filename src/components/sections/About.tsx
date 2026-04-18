// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  const points = [
    {
      icon: 'PS',
      title: 'Problem Solver',
      desc: 'I identify real problems and build practical solutions, not features nobody needs.',
    },
    {
      icon: 'QL',
      title: 'Quick Learner',
      desc: 'From AI and ML to full-stack web development, I jump into new stacks and ship products fast.',
    },
    {
      icon: 'PB',
      title: 'Passionate Builder',
      desc: 'I love turning ideas into working products that people actually use and remember.',
    },
    {
      icon: 'AI',
      title: 'AI Enthusiast',
      desc: 'I explore LLMs, computer vision, and practical AI applications to solve real problems.',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-accent-primary/4 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading subtitle="Who I am beyond the code">Why I Code</SectionHeading>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          viewport={{ once: false }}
        >
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group rounded-lg border border-accent-muted/15 bg-bg-secondary/40 p-8 transition-all hover:border-accent-warm/30 hover:shadow-depth-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent-warm/30 bg-accent-warm/10 text-sm font-bold text-accent-warm">
                {point.icon}
              </div>
              <h3 className="mb-3 text-xl font-black text-accent-default">{point.title}</h3>
              <p className="leading-relaxed text-accent-muted">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="rounded-lg border border-accent-muted/15 bg-bg-secondary/40 p-10">
            <p className="mb-6 text-lg leading-relaxed text-accent-muted">
              I started coding to solve problems I faced in college. What began as
              "let me automate this" turned into a passion for building AI-powered
              tools and full-stack systems that actually impact people's lives.
            </p>
            <p className="text-lg leading-relaxed text-accent-muted">
              Today, I am a final-year student obsessed with shipping products. Whether
              it is AI chatbots, attendance systems, or backend APIs, I love the process
              of turning ideas into working software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
