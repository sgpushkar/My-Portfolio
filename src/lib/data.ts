// src/lib/data.ts
import type {
  Project,
  Achievement,
  SkillCategory,
  TechItem,
  ExperienceItem,
  ContactLink,
  StatItem,
} from "@/types";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Activities" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const TYPING_PHRASES = [
  "Building AI-powered apps.",
  "Creating full-stack web projects.",
  "Solving problems with code.",
  "Experimenting with real-world tools.",
  "Turning ideas into working products.",
];

export const STATS: StatItem[] = [
  { target: 4, label: "Projects Built" },
  { target: 6, label: "Tech Stacks" },
  { target: 2, label: "Competitions Won" },
  { target: 3, label: "Years Learning" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    tags: ["Java", "Python", "JavaScript", "C", "C++"],
  },
  {
    id: "frontend",
    title: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "React (basic)"],
  },
  {
    id: "backend",
    title: "Backend",
    tags: ["Node.js", "Express.js", "Flask", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    tags: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    id: "ai-apis",
    title: "AI & APIs",
    tags: ["OpenAI API", "LLaMA", "InsightFace", "OpenCV"],
  },
  {
    id: "tools",
    title: "Tools",
    tags: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ", "Vercel"],
  },
];

export const TECH_STACK: TechItem[] = [
  { icon: "🌐", name: "HTML5", tip: "Web structure" },
  { icon: "🎨", name: "CSS3", tip: "Styling" },
  { icon: "⚡", name: "JavaScript", tip: "Dynamic web" },
  { icon: "⚛️", name: "React", tip: "UI components" },
  { icon: "🟢", name: "Node.js", tip: "Server runtime" },
  { icon: "🐍", name: "Python", tip: "AI & Scripting" },
  { icon: "☕", name: "Java", tip: "OOP" },
  { icon: "🔥", name: "Flask", tip: "Python web" },
  { icon: "🐬", name: "MySQL", tip: "Relational DB" },
  { icon: "🍃", name: "MongoDB", tip: "NoSQL" },
  { icon: "🗃️", name: "SQLite", tip: "Embedded DB" },
  { icon: "👁️", name: "OpenCV", tip: "Computer vision" },
  { icon: "🤖", name: "OpenAI", tip: "LLM API" },
  { icon: "🦙", name: "LLaMA", tip: "Open-source LLM" },
  { icon: "🐙", name: "GitHub", tip: "Version control" },
  { icon: "▲", name: "Vercel", tip: "Deployment" },
  { icon: "📮", name: "Postman", tip: "API testing" },
];

export const PROJECTS: Project[] = [
  {
    id: "attendex",
    featured: true,
    name: "AttenDex",
    emoji: "🎯",
    desc: "AI-powered attendance system using face recognition. Detects and encodes faces in real time to mark attendance automatically.",
    features: [
      "Face detection using InsightFace & OpenCV",
      "Role system — admin / teacher / student",
      "Subject & session management",
      "Dashboard with attendance overview",
      "Report export & background face encoding",
    ],
    tags: ["Python", "Flask", "InsightFace", "OpenCV", "SQLite", "HTML/CSS/JS"],
    githubUrl: "https://github.com/sgpushkar",
  },
  {
    id: "luna",
    name: "Luna",
    emoji: "🌙",
    desc: "Emotion-based music chatbot that detects your mood and recommends songs, supporting multiple languages and a clean chat UI.",
    features: [
      "Mood detection via LLaMA / OpenAI",
      "Multilingual chat support",
      "Spotify API music recommendations",
      "Conversational chat interface",
    ],
    tags: ["Node.js", "JavaScript", "OpenAI", "Spotify API"],
    githubUrl: "https://github.com/sgpushkar",
  },
  {
    id: "phoccy",
    name: "PHOCCy",
    emoji: "🤖",
    desc: "College information chatbot that answers queries about Pillai HOC College — departments, admissions, events, and more.",
    features: [
      "Handles college-specific queries",
      "JSON-based intent matching",
      "AI fallback for unmatched queries",
      "NLP-powered natural language understanding",
    ],
    tags: ["Node.js", "OpenAI", "JavaScript"],
    githubUrl: "https://github.com/sgpushkar",
  },
  {
    id: "repomedic",
    name: "RepoMedic",
    emoji: "🏥",
    desc: "AI-powered medical assistant and project repository with smart search, backend API, and a web frontend.",
    features: [
      "AI-based search & response system",
      "Backend REST API",
      "Web frontend interface",
      "Database-backed project repository",
    ],
    tags: ["Node.js", "JavaScript", "REST API", "MongoDB", "MySQL"],
    githubUrl: "https://github.com/sgpushkar",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "msbte",
    icon: "🏆",
    title: "State Level Project Competition (MSBTE Sponsored)",
    desc: "Presented an AI-powered project at a state-level competition sponsored by MSBTE, competing among engineering colleges across Maharashtra.",
    year: "2026",
    type: "PARTICIPANT",
  },
  {
    id: "quiz",
    icon: "🧠",
    title: "State Level Technical Quiz Champion",
    desc: "Won 1st place in the State Level Technical Quiz Competition organized at Pillai HOC College, competing against teams from multiple engineering institutes across Maharashtra. Demonstrated expertise in programming, AI, and emerging tech.",
    year: "2026",
    type: "WINNER",
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "reva",
    role: "AI Intern",
    org: "Reva Technologies",
    location: "Panvel",
    desc: "Built AI chatbot projects using OpenAI and LLaMA. Worked on backend and web apps using Flask and Node.js. Created demo projects and integrated APIs to showcase real-world AI use cases.",
  },
  {
    id: "freelance",
    role: "Freelance Developer",
    org: "Independent",
    desc: "Built web, backend, and AI-based tools for clients. Handled everything from requirement gathering to deployment — solo and on short timelines.",
  },
  {
    id: "personal",
    role: "Personal Projects Developer",
    org: "Independent",
    location: "Mumbai, India",
    desc: "Built multiple AI and full-stack projects from scratch — REST APIs, databases, face recognition systems, and automation tools. Focused on learning by building real, working applications.",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: "📧",
    label: "Email",
    value: "pushkarmhatre007@gmail.com",
    href: "mailto:pushkarmhatre007@gmail.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/sgpushkar",
    href: "https://github.com/sgpushkar",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/pushkarmhatre",
    href: "https://linkedin.com/in/pushkar-mhatre-9430103a5",
  },
];

export const EDUCATION_SUBJECTS = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "AI",
  "OOP",
  "Software Engineering",
  "Web Technology",
];
