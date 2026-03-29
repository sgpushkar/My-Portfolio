// src/components/sections/Hero.tsx
"use client";

import { useEffect } from "react";
import { STATS } from "@/lib/data";
import { useTyping } from "@/hooks/useTyping";
import { useStatCounters } from "@/hooks/useScrollReveal";

export default function Hero() {
  const typedText = useTyping();
  useStatCounters();

  // Geo parallax on mouse move
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const geos = document.querySelectorAll<HTMLElement>(".hero-geo");
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      geos.forEach((g, i) => {
        const depth = (i + 1) * 6;
        g.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
      });
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-12 pt-[120px] pb-20 relative text-center z-[2]"
    >
      {/* Floating geo shapes */}
      <div
        className="hero-geo w-20 h-20 top-[20%] left-[10%] rounded-sm"
        style={{ ["--dur" as string]: "14s" }}
      />
      <div
        className="hero-geo w-[50px] h-[50px] top-[30%] right-[12%] rounded-full"
        style={{ ["--dur" as string]: "10s", animationDelay: "-4s" }}
      />
      <div
        className="hero-geo bottom-[35%] left-[8%] h-px border-none"
        style={{
          width: "120px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          ["--dur" as string]: "16s",
          animationDelay: "-7s",
        }}
      />
      <div
        className="hero-geo w-[60px] h-[60px] bottom-[25%] right-[8%] rounded-sm"
        style={{ ["--dur" as string]: "18s", animationDelay: "-2s" }}
      />

      <div className="max-w-[820px] relative">
        {/* Badge */}
        <div className="hero-anim-1 inline-flex items-center gap-2 px-5 py-[7px] border border-white/[0.18] rounded-3xl bg-white/[0.03] text-[0.76rem] tracking-[2px] uppercase text-[#ccc] font-display mb-[30px] backdrop-blur-lg">
          <span className="badge-dot" />
          Available for Freelance · Internships · Projects
        </div>

        {/* Name */}
        <div className="hero-name-wrap hero-anim-2 block">
          <h1 className="font-display font-extrabold gradient-text leading-[1.02] mb-5 tracking-[-1px] text-[clamp(3rem,8vw,6.2rem)]">
            Pushkar Mhatre
          </h1>
          <span className="hero-name-glow font-display font-extrabold leading-[1.02] text-[clamp(3rem,8vw,6.2rem)] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            Pushkar Mhatre
          </span>
        </div>

        {/* Subtitle */}
        <p className="hero-anim-3 font-display text-[0.82rem] tracking-[1.5px] uppercase text-[#888] mb-[14px]">
          Full-Stack Developer &nbsp;·&nbsp;{" "}
          <span className="text-[#ddd] font-semibold">AI Enthusiast</span>{" "}
          &nbsp;·&nbsp; Backend Developer
        </p>

        {/* Desc */}
        <p className="hero-anim-4 text-[1.12rem] text-[#aaa] max-w-[540px] mx-auto mb-9 leading-[1.75]">
          I build real-world AI apps, backend systems, and full-stack tools —
          from face recognition systems to chatbots and automation scripts that
          actually solve problems.
        </p>

        {/* Typing */}
        <div className="hero-anim-5 font-display text-[1.05rem] text-[#ccc] mb-11 h-[30px] tracking-[0.5px]">
          {typedText}
          <span className="typing-cursor">|</span>
        </div>

        {/* Buttons */}
        <div className="hero-anim-6 flex gap-[14px] justify-center flex-wrap">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/sgpushkar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats hero-anim-7 flex gap-10 justify-center mt-14 pt-10 border-t border-white/[0.08]">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="stat-num"
                data-target={stat.target}
              >
                0
              </span>
              <div className="text-[0.72rem] text-[#666] uppercase tracking-[2px] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
