// src/lib/data.ts
import type {
  Achievement,
  ContactLink,
  ExperienceItem,
  ProcessStep,
  Project,
  Service,
  SkillCategory,
  StatItem,
  TechItem,
  Testimonial,
} from '@/types';

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const;

// ─── Hero ──────────────────────────────────────────────────────────────────────

export const TYPING_PHRASES = [
  'things that feel as good as they look.',
  'landing pages that convert.',
  'apps that actually ship.',
  'sites that look like ₹10L builds.',
  'digital products that work.',
];

export const STATS: StatItem[] = [
  { target: 7, label: 'Projects Shipped' },
  { target: 4, label: 'Happy Clients' },
  { target: 3, label: 'Years Building' },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'landing-page',
    icon: '→',
    title: 'Landing Page',
    who: 'Personal brands, coaches & freelancers',
    description:
      'A sharp, fast, mobile-first page designed to turn visitors into paying clients — not just impress them.',
    deliverables: [
      'Custom design, no templates',
      'SEO-ready structure',
      'Contact / booking form',
      'Deployed & live on day 1',
    ],
    outcome: 'Clients report 2× more enquiries within the first month.',
  },
  {
    id: 'business-website',
    icon: '◈',
    title: 'Business Website',
    who: 'Local businesses, tuition centres & service brands',
    description:
      'A professional multi-page site that makes you look like you have been in business for years — even if you just started.',
    deliverables: [
      'Up to 5 custom pages',
      'Google Maps / WhatsApp integration',
      'Mobile responsive',
      'Fast load, clean code',
    ],
    outcome: 'You stop losing leads to competitors who simply look more professional.',
  },
  {
    id: 'web-app',
    icon: '⬡',
    title: 'Full-Stack Web App',
    who: 'Startups & founders with a product idea',
    description:
      'From database design to deployed product — I build working apps, not mockups. Real auth, real data, real users.',
    deliverables: [
      'React / Next.js frontend',
      'Node.js / Express backend',
      'Database design & setup',
      'Deployment on Vercel / Render',
    ],
    outcome: 'A product you can demo to investors or put in front of real users.',
  },
];

// ─── Projects (Case Studies) ───────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'sienvera',
    featured: true,
    name: 'Sienvera',
    emoji: '🎨',
    hook: 'A handmade art storefront with a soft luxury feel and a real admin workflow behind it.',
    problem:
      'Small handmade art brands need more than a static gallery — they need a storefront that feels premium and is easy to update without editing code every time.',
    desc: 'A handcrafted art shop experience for showcasing canvas paintings, crochet pieces, and resin art. Includes collection browsing, commission and contact flows, theme switching, and an admin panel for managing artwork.',
    impact:
      'Live on Vercel with a polished storefront and a working admin flow for uploading and updating pieces.',
    features: [
      'Curated storefront for canvas, crochet, and resin art',
      'Admin panel for uploading and managing artwork',
      'Cloudinary image uploads',
      'Commission flow with Instagram, WhatsApp, and email',
      'Responsive React interface with premium editorial styling',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'CSS Modules', 'Cloudinary', 'Vercel'],
    githubUrl: 'https://github.com/sgpushkar',
    liveUrl: 'https://sienvera.vercel.app/',
  },
  {
    id: 'attendex',
    featured: true,
    name: 'AttenDex',
    emoji: '🎯',
    hook: 'Face recognition that actually works, even in bad lighting.',
    problem:
      'Manual attendance takes 10 minutes per class and is error-prone. Teachers waste time; data gets lost.',
    desc: 'AI-powered attendance system using face recognition. Detects and encodes faces in real time to mark attendance automatically — with a full admin dashboard and report export.',
    impact:
      'Cuts attendance time by 80%. Tested across 3 live classes with 98% face detection accuracy.',
    features: [
      'Face detection using InsightFace & OpenCV',
      'Role system: admin / teacher / student',
      'Subject & session management',
      'Dashboard with attendance overview',
      'Report export & background face encoding',
    ],
    tags: ['Python', 'Flask', 'InsightFace', 'OpenCV', 'SQLite', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/sgpushkar',
    liveUrl: '',
  },
  {
    id: 'cryptonova',
    featured: true,
    name: 'CryptoNova',
    emoji: '📈',
    hook: 'Live crypto prices, server-side alerts, and real notifications — even when you close the tab.',
    problem:
      'Most crypto tracking tools lose your alerts the moment the browser closes. Traders miss triggers; opportunities are lost.',
    desc: 'Full-stack real-time cryptocurrency tracker with TypeScript, React, and WebSocket. Streams live Binance prices and keeps server-side alerts running 24/7 even when the frontend is closed.',
    impact:
      'Tracks 50 live pairs. Alerts fire within 1 second of trigger. Notifications delivered via Telegram & email even when user is offline.',
    features: [
      'Live Binance WebSocket price streaming (50 pairs)',
      'Server-side alert engine with 1-second sweep',
      'Telegram Bot & email notifications',
      'Price-above / price-below / % move alerts',
      'Premium dark glassmorphism UI with live flashing prices',
    ],
    tags: ['TypeScript', 'React', 'Vite', 'TailwindCSS', 'Express', 'WebSocket', 'MongoDB'],
    githubUrl: 'https://github.com/sgpushkar/CryptoNova',
    liveUrl: '',
  },
  {
    id: 'luna',
    name: 'Luna',
    emoji: '🌙',
    hook: 'A chatbot that knows how you feel and plays the right song.',
    problem: 'Music discovery is static — you have to search for what you want.',
    desc: 'Emotion-based music chatbot that detects your mood and recommends songs, supporting multiple languages and a clean chat UI.',
    impact: 'Handled 200+ mood-based queries in the prototype with 4-language support.',
    features: [
      'Mood detection via LLaMA / OpenAI',
      'Multilingual chat support',
      'Spotify API music recommendations',
      'Conversational chat interface',
    ],
    tags: ['Node.js', 'JavaScript', 'OpenAI', 'Spotify API'],
    githubUrl: 'https://github.com/sgpushkar',
    liveUrl: '',
  },
  {
    id: 'phoccy',
    name: 'PHOCCy',
    emoji: '🤖',
    hook: 'The college assistant that never sleeps and never gives wrong answers.',
    problem:
      'Students ask the same questions every day about admissions, events, and deadlines.',
    desc: 'College information chatbot that answers queries about Pillai HOC College using JSON-based intent matching and AI fallback.',
    impact: 'Handled 500+ queries during a college event demo with 95% accuracy on known topics.',
    features: [
      'Handles college-specific queries',
      'JSON-based intent matching',
      'AI fallback for unmatched queries',
      'NLP-powered natural language understanding',
    ],
    tags: ['Node.js', 'OpenAI', 'JavaScript'],
    githubUrl: 'https://github.com/sgpushkar',
    liveUrl: '',
  },
  {
    id: 'repomedic',
    name: 'RepoMedic',
    emoji: '🏥',
    hook: 'Your medical knowledge, supercharged by AI.',
    problem:
      'Medical students and patients struggle to find reliable, structured information quickly.',
    desc: 'AI-powered medical assistant and project repository with smart search, backend API, and a web frontend.',
    impact: '15+ medical topics indexed, with AI search reducing lookup time by 70%.',
    features: [
      'AI-based search & response system',
      'Backend REST API',
      'Web frontend interface',
      'Database-backed project repository',
    ],
    tags: ['Node.js', 'JavaScript', 'REST API', 'MongoDB', 'MySQL'],
    githubUrl: 'https://github.com/sgpushkar',
    liveUrl: '',
  },
  {
    id: 'myportfolio',
    name: 'My Portfolio',
    emoji: '⭐',
    hook: 'The site you are on right now — built from scratch to ship fast and look great.',
    problem: 'Generic portfolio templates feel lifeless and do not reflect the actual craft of a developer.',
    desc: 'Personal developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features scroll-driven animations, glassmorphism cards, and a fully responsive layout.',
    impact: 'Fully deployed on Vercel. Showcases 7 projects and a complete professional profile.',
    features: [
      'Conversion-focused layout and copy',
      'Framer Motion scroll animations',
      'Glassmorphism & depth card system',
      'Responsive across all screen sizes',
    ],
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/sgpushkar/My-Portfolio',
    liveUrl: '',
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We spend 30 minutes talking about your goals, your users, and what success looks like. No forms, no fluff.',
  },
  {
    number: '02',
    title: 'Proposal & Scope',
    description:
      'I send a clear proposal within 24 hours — scope, timeline, price. No surprises, no bait-and-switch.',
  },
  {
    number: '03',
    title: 'Build & Update',
    description:
      'I build in focused sprints and keep you updated at every stage. You see real progress, not just a final reveal.',
  },
  {
    number: '04',
    title: 'Launch & Handoff',
    description:
      'I handle deployment, test across devices, and hand you a fully working site. You own everything.',
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rohan',
    name: 'Rohan Desai',
    role: 'Founder',
    company: 'StudySpace India',
    quote:
      'Pushkar delivered our landing page in 4 days. Clean, fast, and exactly what we needed. Our enquiry rate went up almost immediately. Would hire again without hesitation.',
    stars: 5,
    initials: 'RD',
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Yoga Coach',
    company: 'Self-employed',
    quote:
      'I needed a site that looked professional and worked on mobile. Pushkar built exactly that — on time, within budget, and without me having to explain things twice. My enquiries have doubled.',
    stars: 5,
    initials: 'PN',
  },
  {
    id: 'arjun',
    name: 'Arjun Mehta',
    role: 'Co-founder',
    company: 'SwiftKart',
    quote:
      'Fast communicator, no ghost modes, delivered exactly what we scoped. The dashboard he built handles our core flows perfectly. We are already planning phase 2 with him.',
    stars: 5,
    initials: 'AM',
  },
];

// ─── Achievements (kept for reference) ────────────────────────────────────────

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'msbte',
    icon: '🏆',
    title: 'State Level Project Competition (MSBTE Sponsored)',
    desc: 'Presented an AI-powered project at a state-level competition sponsored by MSBTE, competing among engineering colleges across Maharashtra.',
    year: '2026',
    type: 'PARTICIPANT',
  },
  {
    id: 'quiz',
    icon: '🧠',
    title: 'State Level Technical Quiz Champion',
    desc: 'Won 1st place in the State Level Technical Quiz Competition organized at Pillai HOC College, competing against teams from multiple engineering institutes across Maharashtra.',
    year: '2026',
    type: 'WINNER',
  },
];

// ─── Skills (kept for reference) ──────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    tags: ['Java', 'Python', 'JavaScript', 'C', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'backend',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'Flask', 'REST API'],
  },
  {
    id: 'database',
    title: 'Database',
    tags: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    id: 'ai-apis',
    title: 'AI & APIs',
    tags: ['OpenAI API', 'LLaMA', 'InsightFace', 'OpenCV'],
  },
  {
    id: 'tools',
    title: 'Tools',
    tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
];

export const TECH_STACK: TechItem[] = [
  { icon: '🌐', name: 'HTML5', tip: 'Web structure' },
  { icon: '🎨', name: 'CSS3', tip: 'Styling' },
  { icon: '⚡', name: 'JavaScript', tip: 'Dynamic web' },
  { icon: '⚛️', name: 'React', tip: 'UI components' },
  { icon: '🟢', name: 'Node.js', tip: 'Server runtime' },
  { icon: '🐍', name: 'Python', tip: 'AI & scripting' },
  { icon: '☕', name: 'Java', tip: 'OOP' },
  { icon: '🔥', name: 'Flask', tip: 'Python web' },
  { icon: '🐬', name: 'MySQL', tip: 'Relational DB' },
  { icon: '🍃', name: 'MongoDB', tip: 'NoSQL' },
  { icon: '👁️', name: 'OpenCV', tip: 'Computer vision' },
  { icon: '🤖', name: 'OpenAI', tip: 'LLM API' },
  { icon: '🐙', name: 'GitHub', tip: 'Version control' },
  { icon: '▲', name: 'Vercel', tip: 'Deployment' },
];

// ─── Experience (kept for reference) ──────────────────────────────────────────

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'reva',
    role: 'AI Intern',
    org: 'Reva Technologies',
    location: 'Panvel',
    desc: 'Built AI chatbot projects using OpenAI and LLaMA. Worked on backend and web apps using Flask and Node.js. Created demo projects and integrated APIs to showcase real-world AI use cases.',
  },
  {
    id: 'freelance',
    role: 'Freelance Developer',
    org: 'Independent',
    desc: 'Built web, backend, and AI-based tools for clients. Handled everything from requirement gathering to deployment, solo and on short timelines.',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: '📧',
    label: 'Email',
    value: 'pushkarmhatre007@gmail.com',
    href: 'mailto:pushkarmhatre007@gmail.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sgpushkar',
    href: 'https://github.com/sgpushkar',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/pushkarmhatre',
    href: 'https://linkedin.com/in/pushkar-mhatre-9430103a5',
  },
];

export const EDUCATION_SUBJECTS = [
  'Data Structures & Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'AI',
  'OOP',
  'Software Engineering',
  'Web Technology',
];
