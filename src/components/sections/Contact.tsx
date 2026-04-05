// src/components/sections/Contact.tsx
"use client";

import { useState, useRef } from "react";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(formRef.current);

    try {
      // Replace the email address below with your own
      const response = await fetch("https://formsubmit.co/ajax/pushkarmhatre007@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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
            <h3 className="font-display text-[1.4rem] text-[color:var(--text-strong)] mb-4 font-bold">
              Let's Build Something
            </h3>
            <p className="text-[color:var(--text-muted)] leading-[1.8] mb-8 text-[0.94rem]">
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
                    <div className="text-[0.7rem] text-[color:var(--text-subtle)] tracking-[1px] uppercase mb-0.5">
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[0.72rem] text-[color:var(--text-subtle)] tracking-[2px] uppercase font-display mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] text-[color:var(--text-subtle)] tracking-[2px] uppercase font-display mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="form-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] text-[color:var(--text-subtle)] tracking-[2px] uppercase font-display mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  className="form-input min-h-[110px] resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn btn-primary w-full ${
                  status === "sent" ? "contact-submit-sent" : ""
                }`}
              >
                {status === "idle" && "Start the conversation"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "✓ Sent!"}
                {status === "error" && "✗ Failed — try again"}
              </button>
              {errorMsg && (
                <p className="text-red-400 text-sm mt-3 text-center">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
