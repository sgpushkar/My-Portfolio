"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

  const applyTheme = (nextTheme: "dark" | "light") => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`site-nav fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        } px-[var(--section-px)] backdrop-blur-2xl`}
      >
        <a
          href="#hero"
          onClick={closeMenu}
          className="nav-logo-link font-display font-extrabold text-[1.4rem] nav-logo-text tracking-[2px] relative"
        >
          PM
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
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

          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            onClick={toggleTheme}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb">
                {theme === "dark" ? "☾" : "☀"}
              </span>
            </span>
            <span className="hidden sm:inline">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          <button
            className={`hamburger md:hidden ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-overlay md:hidden ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`mobile-nav-link ${activeId === href.slice(1) ? "active" : ""}`}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}

        <button
          type="button"
          className="theme-toggle mt-6"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
          onClick={toggleTheme}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-thumb">
              {theme === "dark" ? "☾" : "☀"}
            </span>
          </span>
          <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
        </button>
      </div>
    </>
  );
}
