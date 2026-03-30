// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit() {
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  }

  return (
    <section id="contact" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Let's Talk</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          Ready to Build?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {/* Info */}
          <div className="glass-card p-5 sm:p-10">
            <h3 className="font-display text-[1.4rem] text-white mb-4 font-bold">
              Let's Build Something
            </h3>
            <p className="text-[#999] leading-[1.8] mb-8 text-[0.94rem]">
              Open to freelance, internship, job, or just a conversation about
              something interesting. If you want a developer who ships, let's talk.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-link"
                >
                  <span className="text-[1.1rem] w-[26px] text-center flex-shrink-0">
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[0.7rem] text-[#666] tracking-[1px] uppercase mb-0.5">
                      {link.label}
                    </div>
                    <div className="truncate">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-5 sm:p-10">
            <div className="mb-4">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="form-input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Message
              </label>
              <textarea
                placeholder="What's on your mind?"
                className="form-input min-h-[110px] resize-y"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status !== "idle"}
              className={`btn btn-primary w-full ${
                status === "sent"
                  ? "!bg-[linear-gradient(135deg,#2a2a2a,#111)]"
                  : ""
              }`}
            >
              {status === "idle" && "Start the conversation"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "✓ Sent!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}