// src/hooks/useScrollReveal.ts
"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-scale, .stagger-children"
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useGlassCardGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".glass-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> =
      [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
        const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
        card.style.setProperty("--mx", x + "%");
        card.style.setProperty("--my", y + "%");
      };
      card.addEventListener("mousemove", fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);
}

export function useStatCounters() {
  const observed = useRef(false);

  useEffect(() => {
    const heroStats = document.querySelector(".hero-stats");
    if (!heroStats) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true;
          document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
            const target = parseInt(el.dataset.target ?? "0", 10);
            animateCounter(el, target);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(heroStats);
    return () => obs.disconnect();
  }, []);
}

function animateCounter(el: HTMLElement, target: number, duration = 1500) {
  let start: number | null = null;
  function step(ts: number) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + "+";
  }
  requestAnimationFrame(step);
}
