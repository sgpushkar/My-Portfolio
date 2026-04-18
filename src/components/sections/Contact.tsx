// src/components/sections/Contact.tsx
'use client';

import { useRef, useState } from 'react';
import { CONTACT_LINKS } from '@/lib/data';
import { getIcon } from '@/lib/iconMap';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

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
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black py-16 sm:py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/4 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHeading subtitle="Let's create something remarkable together">
          Get In Touch
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="rounded-lg border border-accent-muted/15 bg-bg-secondary/40 p-6 sm:p-8 backdrop-blur-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-mono uppercase tracking-wider text-accent-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-accent-primary/30 bg-bg-secondary/50 px-4 py-3 text-white transition-colors placeholder-slate-500 focus:border-accent-primary focus:outline-none"
                    placeholder="Alex Dev"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-mono uppercase tracking-wider text-accent-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-accent-primary/30 bg-bg-secondary/50 px-4 py-3 text-white transition-colors placeholder-slate-500 focus:border-accent-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-mono uppercase tracking-wider text-accent-primary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-accent-primary/30 bg-bg-secondary/50 px-4 py-3 text-white transition-colors placeholder-slate-500 focus:border-accent-primary focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value={typeof window !== 'undefined' ? window.location.href : ''}
                />

                {status === 'sent' && (
                  <div className="rounded-lg border border-accent-primary/50 bg-accent-primary/10 p-4 text-sm text-accent-primary">
                    Message sent. I will get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-lg border border-accent-warm/50 bg-accent-warm/10 p-4 text-sm text-accent-warm">
                    Failed to send. Try emailing me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-lg bg-accent-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-accent-warm/90 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-8 text-2xl font-black text-white">
                Or reach me <span className="text-accent-warm">here</span>
              </h3>
            </div>

            {CONTACT_LINKS.map((link, index) => {
              const Icon = getIcon(link.icon);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="group block"
                >
                  <div className="rounded-lg border border-accent-muted/15 bg-bg-secondary/40 p-6 transition-all group-hover:border-accent-warm/30 group-hover:shadow-depth-md">
                    <div className="flex items-center gap-4">
                      {Icon && <Icon className="w-8 h-8 text-accent-warm flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-mono uppercase tracking-wider text-accent-primary">
                          {link.label}
                        </p>
                        <p className="break-all font-medium text-white">{link.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
