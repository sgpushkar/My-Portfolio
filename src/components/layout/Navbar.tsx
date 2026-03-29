// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-black/[0.92] py-3 px-12"
          : "bg-black/70 py-4 px-12"
      } backdrop-blur-2xl border-b border-white/[0.08]`}
    >
      <a
        href="#hero"
        className="nav-logo-link font-display font-extrabold text-[1.4rem] nav-logo-text tracking-[2px] relative"
      >
        PM
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`nav-link ${activeId === href.slice(1) ? "active" : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
