// src/lib/data.ts
import type {
  Achievement,
  ContactLink,
  ExperienceItem,
  Project,
  SkillCategory,
  StatItem,
  TechItem,
} from '@/types';

export const NAV_LINKS = [
  { href: '#about', label: 'Why I Code' },
  { href: '#skills', label: 'What I Bring' },
  { href: '#projects', label: 'Work That Ships' },
  { href: '#achievements', label: "Proof I'm Not Just a Student" },
  { href: '#education', label: 'Where I Learned to Build' },
  { href: '#experience', label: 'Proven Experience' },
  { href: '#contact', label: "Let's Talk" },
] as const;

export const TYPING_PHRASES = [
  'Building AI-powered apps.',
  'Creating full-stack web projects.',
  'Solving problems with code.',
  'Experimenting with real-world tools.',
  'Turning ideas into working products.',
];

export const STATS: StatItem[] = [
  { target: 6, label: 'Projects Built' },
  { target: 6, label: 'Tech Stacks' },
  { target: 2, label: 'Competitions Won' },
  { target: 3, label: 'Years Learning' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    tags: ['Java', 'Python', 'JavaScript', 'C', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'React (basic)'],
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
    tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ', 'Vercel'],
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
  { icon: '🗃️', name: 'SQLite', tip: 'Embedded DB' },
  { icon: '👁️', name: 'OpenCV', tip: 'Computer vision' },
  { icon: '🤖', name: 'OpenAI', tip: 'LLM API' },
  { icon: '🦙', name: 'LLaMA', tip: 'Open-source LLM' },
  { icon: '🐙', name: 'GitHub', tip: 'Version control' },
  { icon: '▲', name: 'Vercel', tip: 'Deployment' },
  { icon: '📮', name: 'Postman', tip: 'API testing' },
];

export const PROJECTS: Project[] = [
  {
    id: 'attendex',
    featured: true,
    name: 'AttenDex',
    emoji: '🎯',
    hook: 'Face recognition that actually works, even in bad lighting.',
    problem: 'Manual attendance takes 10 minutes per class and is prone to errors.',
    desc: 'AI-powered attendance system using face recognition. Detects and encodes faces in real time to mark attendance automatically.',
    impact: 'Reduces attendance time by 80%. Used in 3 test classes with 98% accuracy.',
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
    id: 'luna',
    name: 'Luna',
    emoji: '🌙',
    hook: 'A chatbot that knows how you feel and plays the right song.',
    problem: 'Music discovery is static and you have to search for what you want.',
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
    problem: 'Students ask the same questions every day about admissions, events, and deadlines, and nobody wants to read a PDF.',
    desc: 'College information chatbot that answers queries about Pillai HOC College, including departments, admissions, events, and more.',
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
    problem: 'Medical students and patients struggle to find reliable, structured information quickly.',
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
    id: 'cryptonova',
    featured: true,
    name: 'CryptoNova',
    emoji: '📈',
    hook: 'Live crypto prices, server-side alerts, and real notifications — even when you close the tab.',
    problem: 'Crypto traders need real-time price tracking and reliable alerts, but most tools lose alerts the moment the browser closes.',
    desc: 'CryptoNova is a full-stack real-time cryptocurrency tracking platform built with TypeScript, React, Vite, TailwindCSS, Express, WebSocket, MongoDB, and Mongoose. It streams live Binance prices and keeps server-side alerts running even when the frontend is closed.',
    impact: 'Tracks 50 live pairs via WebSocket. Alerts fire within 1 second of trigger. Notifications delivered via Telegram & email even when the user is offline.',
    features: [
      'Live Binance WebSocket price streaming (50 pairs)',
      'Server-side alert engine with 1-second sweep',
      'Telegram Bot & email notifications',
      'Price-above / price-below / % move alert types',
      'Watchlist, search, sorting & skeleton loading UI',
      'Premium dark glassmorphism UI with live flashing prices',
    ],
    tags: ['TypeScript', 'React', 'Vite', 'TailwindCSS', 'Express', 'WebSocket', 'MongoDB', 'Mongoose'],
    githubUrl: 'https://github.com/sgpushkar/CryptoNova',
    liveUrl: '',
  },
  {
    id: 'myportfolio',
    name: 'My Portfolio',
    emoji: '⭐',
    hook: 'The site you are on right now — built from scratch to ship fast and look great.',
    problem: 'Generic portfolio templates feel lifeless and do not reflect the actual craft of a developer.',
    desc: 'Personal developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features animated backgrounds, glassmorphism cards, scroll-driven animations, a custom cursor, and a fully responsive layout.',
    impact: 'Fully deployed on Vercel. Showcases 6 projects and a complete professional profile in a premium, handcrafted dark design.',
    features: [
      'Animated neural canvas background',
      'Glassmorphism & depth card system',
      'Framer Motion scroll animations',
      'Custom futuristic cursor',
      'Responsive across all screen sizes',
    ],
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/sgpushkar/My-Portfolio',
    liveUrl: '',
  },
];

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
    desc: 'Won 1st place in the State Level Technical Quiz Competition organized at Pillai HOC College, competing against teams from multiple engineering institutes across Maharashtra. Demonstrated expertise in programming, AI, and emerging tech.',
    year: '2026',
    type: 'WINNER',
  },
];

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
  {
    id: 'personal',
    role: 'Personal Projects Developer',
    org: 'Independent',
    location: 'Mumbai, India',
    desc: 'Built multiple AI and full-stack projects from scratch including REST APIs, databases, face recognition systems, and automation tools. Focused on learning by building real, working applications.',
  },
];

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
