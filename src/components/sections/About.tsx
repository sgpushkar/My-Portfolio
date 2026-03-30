// src/components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Why I Code</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          I Build Things That Actually Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Text card */}
          <div className="glass-card about-text reveal-left p-6 sm:p-10">
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I’m Pushkar. I started coding because I wanted to build something that didn’t exist. Now, I build AI‑powered attendance systems, emotion‑aware chatbots, and full‑stack tools that actually get used.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I don’t just write code — I obsess over how it feels to use. My work lives at the intersection of AI, backend logic, and user experience. Whether it’s face recognition that works in a noisy classroom or a REST API that doesn’t crumble under load, I make sure it’s solid.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-4 text-[0.97rem]">
              I’ve worked with startups, freelanced, and led teams in competitions. I’m looking for a place where I can ship code that matters — and keep learning from people who care about quality.
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