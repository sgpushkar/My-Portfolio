'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 160) current = section.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-[#080808]/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 sm:px-8 h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 flex-shrink-0"
            aria-label="Pushkar Mhatre — Home"
          >
            <img 
              src="/logo_icon.png" 
              alt="Pushkar Mhatre" 
              className="h-8 w-8 object-contain"
            />
            <span className="hidden sm:block text-sm font-semibold text-white/80 group-hover:text-white transition-colors font-mono tracking-tight">
              Pushkar Mhatre
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = activeId === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 font-mono ${
                    active
                      ? 'text-white bg-white/8'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Availability badge — desktop only */}
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-white/40 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              Available for work
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 h-9 text-[12px] font-bold text-white bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 rounded-lg transition-all font-mono uppercase tracking-wider"
            >
              Get a Quote
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-4 h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-[4.5px] rotate-45' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[1001] w-72 bg-[#0f0f0f] border-l border-white/[0.07] flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
                <span className="text-sm font-semibold text-white/60 font-inter">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 hover:bg-white/12 text-white/50 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center px-4 py-3.5 text-[15px] font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-4 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full h-11 text-[13px] font-bold text-white bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] rounded-xl transition-all font-mono uppercase tracking-wider"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
