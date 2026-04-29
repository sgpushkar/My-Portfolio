// src/types/index.ts

export interface Project {
  id: string;
  featured?: boolean;
  name: string;
  emoji: string;
  hook: string;
  problem: string;
  desc: string;
  impact: string;
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
  type: 'WINNER' | 'PARTICIPANT' | 'ORGANIZER';
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

// New types for client-acquisition sections

export interface Service {
  id: string;
  icon: string;
  title: string;
  who: string;
  description: string;
  deliverables: string[];
  outcome: string;
}



export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}