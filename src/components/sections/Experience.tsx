// src/components/sections/Experience.tsx
import { EXPERIENCE_ITEMS } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative z-[2]">
      <div className="max-w-[1120px] mx-auto px-12 py-[110px]">
        <span className="section-label">Experience</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,4vw,3rem)] leading-[1.08] mb-[60px]">
          What I&apos;ve Done
        </h2>

        <div className="glass-card px-12 py-11">
          <div className="exp-timeline reveal">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`exp-item relative pl-9 transition-transform duration-300 hover:translate-x-1 ${
                  idx === EXPERIENCE_ITEMS.length - 1 ? "pb-0" : "pb-12"
                }`}
              >
                <div className="exp-dot" />
                <div className="font-display text-[1.08rem] font-bold text-white">
                  {item.role}
                </div>
                <div className="text-[0.84rem] text-[#777] my-[5px] mb-3 font-display">
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
