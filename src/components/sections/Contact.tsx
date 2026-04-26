// src/components/sections/Contact.tsx
'use client';

import { useRef, useState } from 'react';
import { CONTACT_LINKS } from '@/lib/data';
import { motion } from 'framer-motion';

const CONTACT_ICONS: Record<string, string> = {
  '📧': '✉',
  '🐙': '⌥',
  '💼': '◈',
};

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || !email) return;
    setStatus('sending');
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch('https://formsubmit.co/ajax/pushkarmhatre007@gmail.com', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus('sent');
        setEmail('');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#080808]">
      <div className="divider" />
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label mb-4">Contact</p>
            <h2 className="font-syne text-[2rem] sm:text-[2.4rem] font-extrabold leading-tight text-white mb-3">
              Let&apos;s talk about your project.
            </h2>
            <p className="text-[14px] text-white/40 mb-9">
              Fill in what you know. I&apos;ll handle the rest.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35 mb-2">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Alex Dev"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/20 focus:border-white/25 focus:bg-white/[0.05] outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/20 focus:border-white/25 focus:bg-white/[0.05] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-project" className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35 mb-2">
                  What do you need?
                </label>
                <input
                  id="contact-project"
                  type="text"
                  name="project_type"
                  placeholder="e.g. Landing page, Business website, Web app..."
                  className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/20 focus:border-white/25 focus:bg-white/[0.05] outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project or idea — even rough is fine."
                  className="w-full resize-none rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/20 focus:border-white/25 focus:bg-white/[0.05] outline-none transition-all"
                />
              </div>

              {/* Status messages */}
              {status === 'sent' && (
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-[13px] text-emerald-400">
                  ✓ Message sent — I&apos;ll be in touch within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[13px] text-white/50">
                  Something went wrong. Email me directly at{' '}
                  <a href="mailto:pushkarmhatre007@gmail.com" className="text-white underline">
                    pushkarmhatre007@gmail.com
                  </a>
                </div>
              )}

              <button
                type="submit"
                id="contact-submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full py-3.5 text-[15px] font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </motion.div>

          {/* Right — quick links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between gap-6 lg:pt-[84px]"
          >
            {/* Quick contact cards */}
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/25 mb-4">Or reach me directly</p>
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-4 p-4 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-white/30 group-hover:text-white/60 transition-colors text-lg">
                    {CONTACT_ICONS[link.icon] || link.icon}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/30 mb-0.5">{link.label}</p>
                    <p className="text-[13px] text-white/60 group-hover:text-white/80 transition-colors break-all">
                      {link.value}
                    </p>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-white/50 transition-all group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Response commitment */}
            <div className="card p-6 border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/30">Response time</p>
              </div>
              <p className="text-[15px] font-semibold text-white mb-1">Within 24 hours</p>
              <p className="text-[13px] text-white/35 leading-relaxed">
                I check messages daily. You&apos;ll get a real response, not an autoresponder.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
