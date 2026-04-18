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
          DEFAULT: "#0B0F14",
          secondary: "#111827",
          tertiary: "#1a202c",
        },
        accent: {
          DEFAULT: "#E5E7EB",
          primary: "#1F6FEB",
          warm: "#F59E0B",
          muted: "#6B7280",
        },
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "subtle-float": "subtleFloat 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        "soft-sm": "0 2px 8px rgba(0, 0, 0, 0.15)",
        "soft-md": "0 4px 16px rgba(0, 0, 0, 0.2)",
        "soft-lg": "0 8px 32px rgba(0, 0, 0, 0.25)",
        "depth-sm": "0 4px 12px rgba(0, 0, 0, 0.3)",
        "depth-md": "0 8px 24px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
