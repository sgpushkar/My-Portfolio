import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-oxanium)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#000000",
          2: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#ffffff",
          2: "#aaaaaa",
          3: "#cccccc",
        },
        muted: "#9a9a9a",
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease infinite",
        "fade-up": "fadeUp 0.9s ease both",
        "name-glow": "nameGlow 3s ease-in-out infinite alternate",
        blink: "blink 1s step-end infinite",
        "grid-shift": "gridShift 30s linear infinite",
        "scan-down": "scanDown 8s linear infinite",
        "noise-shift": "noiseShift 0.5s steps(2) infinite",
        "geo-float": "geoFloat 14s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        nameGlow: {
          from: { opacity: "0.15", filter: "blur(18px)" },
          to: { opacity: "0.35", filter: "blur(26px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gridShift: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "0 60px, 60px 0" },
        },
        scanDown: {
          "0%": { top: "-200px" },
          "100%": { top: "100vh" },
        },
        noiseShift: {
          "0%,100%": { backgroundPosition: "0 0" },
          "33%": { backgroundPosition: "50px 25px" },
          "66%": { backgroundPosition: "-25px 50px" },
        },
        geoFloat: {
          from: { transform: "translateY(0) rotate(20deg)", opacity: "0.4" },
          to: { transform: "translateY(-25px) rotate(25deg)", opacity: "0.8" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255,255,255,0.1)",
        "glow-md": "0 0 36px rgba(255,255,255,0.22)",
        "glow-lg": "0 0 60px rgba(255,255,255,0.15)",
        card: "0 16px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
