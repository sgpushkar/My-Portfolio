// src/components/sections/Experience.tsx
import { EXPERIENCE_ITEMS } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Experience</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          What I&apos;ve Done
        </h2>

        <div className="glass-card p-5 sm:p-8 md:px-12 md:py-11">
          <div className="exp-timeline reveal">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`exp-item relative pl-8 transition-transform duration-300 hover:translate-x-1 ${
                  idx === EXPERIENCE_ITEMS.length - 1 ? "pb-0" : "pb-8 md:pb-12"
                }`}
              >
                <div className="exp-dot" />
                <div className="font-display text-[1.05rem] font-bold text-white">
                  {item.role}
                </div>
                <div className="text-[0.84rem] text-[#777] my-1 mb-2 font-display">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </div>
                <div className="text-[0.87rem] text-[#aaa] leading-[1.75]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}