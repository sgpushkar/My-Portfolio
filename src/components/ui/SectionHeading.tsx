import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Reveal } from "@/components/ui/Motion";

interface SectionHeadingProps {
  children?: ReactNode;
  label?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  glow?: boolean;
}

export default function SectionHeading({
  children,
  label,
  title,
  subtitle,
  description,
  align = "left",
  glow = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  // If using modern framer-motion format with children and subtitle
  if (children && subtitle !== undefined) {
    const alignClass = centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
    
    return (
      <motion.div
        className={`mb-16 ${alignClass}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {subtitle && (
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-muted font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            viewport={{ once: false }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-5xl font-black leading-tight text-accent-default"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          viewport={{ once: false }}
        >
          {children}
        </motion.h2>

        {/* Optional divider */}
        {centered && (
          <motion.div
            className="mx-auto mt-6 h-0.5 w-12 bg-accent-warm"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            viewport={{ once: false }}
          />
        )}
      </motion.div>
    );
  }

  // Legacy format with label, title, description
  const alignClass = centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <Reveal
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      {label && <span className="section-label">{label}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </Reveal>
  );
}
