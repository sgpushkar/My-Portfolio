// src/components/sections/ValueProp.tsx
'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '7+', label: 'Projects shipped' },
  { value: '3+', label: 'Years building' },
  { value: '2×', label: 'Avg. client enquiry lift' },
];

const POINTS = [
  {
    title: 'I build for outcomes, not portfolios.',
    desc: "Every decision I make — layout, copy, code — is aimed at one thing: making your business money. Not impressing other developers.",
  },
  {
    title: 'I ship fast and keep you informed.',
    desc: "No ghost modes. No \"it'll be done when it's done.\" You get regular updates and a working product on time.",
  },
  {
    title: 'Clean code you can actually own.',
    desc: "You get full access to your code and hosting. No lock-in, no monthly ransom fees. It's your site.",
  },
];

export default function ValueProp() {
  return (
    <section id="value-prop" className="relative w-full bg-transparent">
      <div className="divider" />
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="section-label mb-4">Values</p>
            <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white mb-6">
              I turn ideas into{' '}
              <span className="text-white/50">websites</span> that{' '}
              <span className="text-white">actually work</span> for your business.
            </h2>

            <div className="space-y-6 mt-8">
              {POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white mb-1">{point.title}</p>
                    <p className="text-[14px] text-white/45 leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#contact" className="btn btn-primary text-[14px] px-6 py-2.5 rounded-xl">
                Work With Me
              </a>
              <a href="#work" className="text-[13px] text-white/40 hover:text-white/70 transition-colors underline underline-offset-4">
                View projects →
              </a>
            </motion.div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card group p-7 hover:-translate-y-0.5 cursor-default"
              >
                <p
                  className="font-display text-[3.2rem] font-extrabold tracking-tight leading-none text-white group-hover:text-white transition-colors"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #fff 0%, #888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[14px] text-white/40 font-medium">{stat.label}</p>
              </motion.div>
            ))}

            {/* Experience note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 border-white/[0.06]"
            >
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/30 mb-3">Experience</p>
              <p className="text-[14px] text-white/60 leading-relaxed">
                <span className="text-white/80 font-medium">AI Intern @ Reva Technologies</span>
                {' '}— built chatbots with OpenAI & LLaMA, Flask APIs, and integrated production tools.
              </p>
              <p className="mt-3 text-[14px] text-white/60 leading-relaxed">
                <span className="text-white/80 font-medium">Freelance Developer</span>
                {' '}— end-to-end delivery: requirements → design → build → deploy.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
