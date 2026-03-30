// src/components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">About</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          Who I Am
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Text card */}
          <div className="glass-card about-text reveal-left p-6 sm:p-10">
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I&apos;m a{" "}
              <strong className="text-[#f0f0f0] font-medium">
                final-year Diploma in Computer Engineering student
              </strong>{" "}
              at Pillai HOC College of Engineering who builds projects to learn
              and to solve real problems.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I enjoy working on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                AI apps, backend systems, and full-stack applications
              </strong>
              . Whether it&apos;s an AI-powered attendance system, an
              emotion-based chatbot, or a REST API backend, I focus on building
              things that actually work — not just demos.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I&apos;ve worked on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                internship, freelance, and personal projects
              </strong>
              , both solo and in teams. I like experimenting with new tools,
              integrating APIs, and figuring out how to automate repetitive
              tasks or build something useful from scratch.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] text-[0.97rem]">
              I&apos;m always looking to work on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                interesting problems
              </strong>{" "}
              and grow through real-world experience.
            </p>
          </div>

          {/* Info card */}
          <div className="glass-card reveal p-6 sm:p-9 sm:px-10">
            {[
              {
                icon: "🎓",
                label: "Education",
                value: "Pillai HOC College of Engineering",
              },
              {
                icon: "📅",
                label: "Year",
                value: "Final Year (2023 – 2026)",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Mumbai, Maharashtra, India",
              },
              {
                icon: "💻",
                label: "Focus Areas",
                value: "AI Apps · Backend · Full Stack",
              },
              {
                icon: "🚀",
                label: "Status",
                value: "Open to Internship / Freelance / Job",
              },
              {
                icon: "📧",
                label: "Email",
                value: "pushkarmhatre007@gmail.com",
              },
            ].map((row) => (
              <div key={row.label} className="info-row">
                <div className="text-[1.1rem] w-7 text-center flex-shrink-0">
                  {row.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[0.7rem] text-[#666] uppercase tracking-[1.5px] mb-1">
                    {row.label}
                  </div>
                  <div className="text-[0.92rem] text-[#eee] font-display break-words">
                    {row.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}