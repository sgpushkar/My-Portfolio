// src/types/index.ts

export interface Project {
  id: string;
  featured?: boolean;
  name: string;
  emoji: string;
  hook: string;          // Added
  problem: string;       // Added
  desc: string;
  impact: string;        // Added
  features: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  year: string;
  type: "WINNER" | "PARTICIPANT" | "ORGANIZER";
}

export interface SkillCategory {
  id: string;
  title: string;
  tags: string[];
}

export interface TechItem {
  icon: string;
  name: string;
  tip: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  location?: string;
  desc: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface StatItem {
  target: number;
  label: string;
}