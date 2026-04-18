"use client";

import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
  type MotionStyle,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  scale?: number;
  amount?: number;
  once?: boolean;
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  scale = 1,
  amount = 0.18,
  once = true,
  duration = 0.72,
  ...props
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      // Entrance motion is kept transform/opacity-only for smooth 60fps reveals.
      initial={reducedMotion ? false : { opacity: 0, y, scale }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  amount = 0.15,
  once = true,
  ...props
}: StaggerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reducedMotion
          ? undefined
          : {
              hidden: {},
              show: {
                transition: {
                  delayChildren: delay,
                  staggerChildren: stagger,
                },
              },
            }
      }
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "show"}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.68, ease },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: number;
  hoverScale?: number;
  hoverLift?: number;
};

export function TiltCard({
  children,
  className = "",
  glow = true,
  tilt = 4,
  hoverScale = 1.02,
  hoverLift = 4,
}: TiltCardProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.14), transparent 40%)`;
  const style: MotionStyle = reducedMotion
    ? {}
    : {
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      };

  const onMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    // Map pointer position into a small perspective range to keep the tilt subtle.
    rotateY.set((px - 0.5) * tilt * 2);
    rotateX.set((0.5 - py) * tilt * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const onLeave = () => {
    animate(rotateX, 0, { duration: 0.5, ease });
    animate(rotateY, 0, { duration: 0.5, ease });
    animate(glowX, 50, { duration: 0.5, ease });
    animate(glowY, 50, { duration: 0.5, ease });
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${className}`.trim()}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -hoverLift, scale: hoverScale }
      }
      transition={{ duration: 0.45, ease }}
    >
      {glow && !reducedMotion ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      ) : null}
      <div className="relative h-full" style={{ transform: "translateZ(18px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({
  value,
  suffix = "+",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) return;

    // Count up only once when the metric enters view to avoid distracting loops.
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, reducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {reducedMotion && isInView ? value : display}
      {isInView ? suffix : ""}
    </span>
  );
}
