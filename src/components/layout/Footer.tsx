// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative z-[2] text-center py-[52px] px-6 border-t border-[color:var(--border-soft)]">
      <div className="font-display text-[1.2rem] font-bold mb-[6px] nav-logo-text">
        Pushkar Mhatre
      </div>
      <div className="text-[0.8rem] text-[color:var(--text-subtle)]">
        © 2026 Pushkar Mhatre · All rights reserved
      </div>
      <div className="text-[0.72rem] text-[color:var(--text-muted)] mt-[6px] font-display">
        Built with Next.js, Tailwind, and too much coffee.
      </div>
    </footer>
  );
}
