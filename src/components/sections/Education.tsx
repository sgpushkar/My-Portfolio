// src/components/sections/Education.tsx
import { EDUCATION_SUBJECTS } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative z-[2]">
      <div className="max-w-[1120px] mx-auto px-12 py-[110px]">
        <span className="section-label">Education</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,4vw,3rem)] leading-[1.08] mb-[60px]">
          Academic Background
        </h2>

        <div className="glass-card reveal-scale">
          <div className="p-[38px] flex flex-col md:flex-row gap-7 items-start">
            {/* Year sidebar */}
            <div className="font-display text-[0.78rem] text-[#888] tracking-[1px] min-w-[100px] pt-[5px] border-l-2 border-white/[0.15] pl-4">
              2023 – 2026
            </div>

            {/* Body */}
            <div className="flex-1">
              <div className="font-display text-[1.25rem] font-bold text-white mb-1">
                Diploma in Computer Engineering
              </div>
              <div className="text-[0.9rem] text-[#888] mb-[18px]">
                Pillai HOC College of Engineering &amp; Technology, Mumbai
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_SUBJECTS.map((sub) => (
                  <span key={sub} className="edu-sub">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
