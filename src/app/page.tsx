// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ValueProp from '@/components/sections/ValueProp';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero — Strong headline + dual CTA */}
      <Hero />

      {/* 2. About — Personal narrative */}
      <About />

      {/* 3. Value Prop — Sharp business value */}
      <ValueProp />

      {/* 4. Services — What I offer + outcomes */}
      <Services />

      {/* 5. Work — Case studies (Problem / Solution / Result) */}
      <Projects />

      {/* 6. Achievements — Proof of excellence */}
      <Achievements />

      {/* 7. Process — How we work together */}
      <Process />

      {/* 8. Testimonials — Social proof */}
      <Testimonials />

      {/* 9. Final CTA — Strong closing push */}
      <FinalCTA />

      {/* 10. Contact — Form + direct links */}
      <Contact />

      <Footer />
    </main>
  );
}

