'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';
import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-[1000] px-4 pt-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? 'border border-accent-muted/10 bg-bg-secondary/50 shadow-soft-lg backdrop-blur-md'
            : 'border border-transparent bg-transparent'
        } rounded-xl overflow-hidden`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-accent-default hover:text-accent-warm transition-colors font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-warm/10 flex items-center justify-center font-black text-sm text-accent-warm">
              PM
            </div>
            <span className="font-semibold text-sm hidden sm:block text-accent-default">Pushkar</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const active = activeId === href.slice(1);

              return (
                <li key={href} className="h-10 flex items-center">
                  <a
                    href={href}
                    className={`px-4 h-full flex items-center text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 ${
                      active
                        ? 'text-accent-warm border-b-2 border-accent-warm -mb-0.5'
                        : 'text-accent-muted hover:text-accent-default'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/sgpushkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-accent-muted hover:text-accent-warm transition-colors"
            >
              GitHub
            </a>
            <GlowButton variant="primary" href="#contact" className="text-xs px-4">
              Contact
            </GlowButton>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-bg-secondary transition-colors"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`w-5 h-0.5 bg-accent-default rounded-full transition-transform duration-300 ${
                  menuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-accent-default rounded-full transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-accent-default rounded-full transition-transform duration-300 ${
                  menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: menuOpen ? 'auto' : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="overflow-hidden md:hidden"
        >
          <div className="border-t border-accent-muted/10 px-4 py-4 space-y-2">
            {NAV_LINKS.map(({ href, label }) => {
              const active = activeId === href.slice(1);

              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                    active
                      ? 'text-accent-warm bg-accent-warm/10'
                      : 'text-accent-muted hover:text-accent-default hover:bg-bg-secondary'
                  }`}
                >
                  {label}
                </a>
              );
            })}

            <div className="flex items-center gap-2 pt-4 border-t border-accent-muted/10">
              <a
                href="https://github.com/sgpushkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-xs font-semibold uppercase tracking-wider text-accent-muted hover:text-accent-warm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
