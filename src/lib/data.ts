export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'in-development' | 'concept';
  emoji: string;
  color: string;
  category: 'ai' | 'saas' | 'mobile' | 'tool';
}

export const projects: Project[] = [
  {
    slug: "agentdeal",
    name: "AgentDeal",
    tagline: "AI agents negotiate on your behalf",
    description: "AI-powered negotiation platform where personal agents handle deal-making — from freelancers to enterprise contracts.",
    longDescription: [
      "AgentDeal lets you create AI agents with custom personalities, negotiation styles, and authority limits. Your agent negotiates with other agents in real-time, finding optimal deals while you stay in control.",
      "Features 141 API routes, 40+ database models, real-time alignment scoring, red flag detection, smart suggestions, Stripe payments, org management, and a full SDK.",
    ],
    features: [
      "Agent-to-agent real-time negotiation",
      "Live alignment scoring & gap analysis",
      "Smart suggestions & red flag detection",
      "Stripe escrow & payouts",
      "Organization management with SSO",
      "Full REST SDK & webhook system",
    ],
    techStack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS", "Redis"],
    liveUrl: "https://agentdeal.io",
    githubUrl: "https://github.com/Mehulpython/agentdeal",
    status: "live",
    emoji: "🤝",
    color: "#7C3AED",
    category: "ai",
  },
  {
    slug: "agentcupid",
    name: "AgentCupid",
    tagline: "AI matchmaking for dating & friendships",
    description: "AI-powered matchmaking platform where personal agents chat on your behalf to find compatible people.",
    longDescription: [
      "AgentCupid uses AI agents that represent you in conversations with potential matches. Your agent learns your preferences, communication style, and dealbreakers to find truly compatible connections.",
      "Includes personality matching algorithms, real-time agent conversations, compatibility scoring, and both dating and friendship modes.",
    ],
    features: [
      "AI agent matchmaking",
      "Personality compatibility scoring",
      "Real-time agent conversations",
      "Dating & friendship modes",
      "Smart ice-breakers",
      "Privacy-first design",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Tailwind CSS"],
    liveUrl: "https://agentscupid.com",
    status: "live",
    emoji: "💘",
    color: "#E11D48",
    category: "ai",
  },
  {
    slug: "nexaflow",
    name: "NexaFlow",
    tagline: "AI solutions for small businesses",
    description: "Platform providing AI-powered tools and solutions tailored for small business operations and growth.",
    longDescription: [
      "NexaFlow brings enterprise-grade AI capabilities to small businesses. From automated customer support to intelligent document processing, it's designed to be accessible and affordable.",
      "Built with a focus on simplicity — small business owners can integrate AI without technical expertise.",
    ],
    features: [
      "AI-powered business tools",
      "Small business focused",
      "Affordable pricing",
      "Easy integration",
      "Custom workflows",
      "Analytics dashboard",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://nexaflow360.com",
    status: "live",
    emoji: "⚡",
    color: "#0891B2",
    category: "saas",
  },
  {
    slug: "snaplean",
    name: "SnapLean",
    tagline: "AI calorie tracker — snap & track",
    description: "Snap a photo of your meal and get instant calorie and macro breakdowns powered by AI.",
    longDescription: [
      "SnapLean makes nutrition tracking effortless. Just photograph your meal and AI identifies individual food items, estimates portions, and calculates calories, protein, carbs, fats, and micronutrients.",
      "Features 35+ API endpoints, comprehensive food databases, meal history, daily goals, progress tracking, and an Android app via Capacitor.",
    ],
    features: [
      "AI food recognition from photos",
      "Instant macro breakdown",
      "Daily goals & progress tracking",
      "Meal history & insights",
      "Barcode scanning",
      "Android app (Capacitor)",
    ],
    techStack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Capacitor", "AI Vision"],
    status: "in-development",
    emoji: "📸",
    color: "#16A34A",
    category: "mobile",
  },
  {
    slug: "hoteldirect",
    name: "HotelDirect",
    tagline: "Direct booking platform for independent hotels",
    description: "All-in-one platform replacing OTA dependency with direct bookings, AI guest experience, and unified operations.",
    longDescription: [
      "US independent hotels pay $15-20 billion/year in OTA commissions (15-25% per booking). HotelDirect replaces 5-6 separate tools with one platform.",
      "Combines a smart booking engine, website builder, AI guest messaging via WhatsApp/SMS, reputation manager with AI review responses, and an analytics dashboard with commission savings tracking.",
    ],
    features: [
      "Smart booking engine (1-line embed)",
      "Hospitality website builder",
      "AI guest messaging (WhatsApp/SMS)",
      "Reputation manager with AI responses",
      "Commission savings analytics",
      "Direct booking optimization",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "WhatsApp API", "AI/LLM"],
    status: "in-development",
    emoji: "🏨",
    color: "#0369A1",
    category: "saas",
  },
  {
    slug: "nexadesk",
    name: "NexaDesk",
    tagline: "AI self-service kiosk platform",
    description: "Universal smart kiosk system turning any tablet into an intelligent self-service kiosk for hotels, restaurants, retail, and clinics.",
    longDescription: [
      "NexaDesk transforms tablets into AI-powered self-service kiosks. Designed for hospitality, food service, retail, and healthcare — it combines motion detection, voice AI, and intuitive touch interfaces.",
      "Uses MediaPipe for presence detection, ElevenLabs for natural voice responses, and Stripe Terminal for payments. Fully customizable per industry.",
    ],
    features: [
      "Tablet-based smart kiosk",
      "Motion detection (MediaPipe)",
      "Voice AI (ElevenLabs TTS)",
      "Stripe Terminal payments",
      "Multi-industry templates",
      "Real-time analytics dashboard",
    ],
    techStack: ["React Native", "Expo", "FastAPI", "PostgreSQL", "Redis", "Stripe Terminal", "GPT-4o"],
    status: "in-development",
    emoji: "🖥️",
    color: "#7C3AED",
    category: "saas",
  },
  {
    slug: "futurefaceai",
    name: "FutureFace AI",
    tagline: "AI baby face generator",
    description: "AI-powered baby face generator using advanced facial genetics analysis to create offspring predictions from parent photos.",
    longDescription: [
      "Upload two parent photos and FutureFace AI uses GPT-5 Vision and Flux Pro to generate morphologically accurate baby face predictions. It analyzes facial features, genetics markers, and morphological traits.",
      "Built as a fun, viral consumer app with shareable results, pricing tiers, and a mobile-ready interface.",
    ],
    features: [
      "Dual photo upload & analysis",
      "GPT-5 Vision facial genetics",
      "Flux Pro image generation",
      "Mobile-responsive design",
      "Shareable results",
      "Multiple generation styles",
    ],
    techStack: ["Next.js", "TypeScript", "GPT-5 Vision", "Flux Pro", "Tailwind CSS", "Capacitor"],
    status: "in-development",
    emoji: "👶",
    color: "#DB2777",
    category: "ai",
  },
  {
    slug: "reelmagic",
    name: "ReelMagic",
    tagline: "AI video ad generator",
    description: "AI-powered video ad creation SaaS — generate professional video ads from text prompts.",
    longDescription: [
      "ReelMagic automates video ad creation using AI. Describe your product, choose a style, and get a professional video ad ready for social media campaigns.",
      "Designed for small businesses and marketers who need high-quality video content without the production costs.",
    ],
    features: [
      "Text-to-video ad generation",
      "Multiple ad formats (social, web)",
      "Brand-consistent styling",
      "AI script writing",
      "Quick turnaround",
      "Affordable for SMBs",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "AI Video APIs", "Tailwind CSS"],
    status: "concept",
    emoji: "🎬",
    color: "#9333EA",
    category: "ai",
  },
];

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "Prisma", "Redis", "Tailwind CSS", "Docker", "AWS",
  "Stripe", "AI/LLM", "OpenAI", "React Native", "Expo", "Git",
  "REST APIs", "GraphQL", "Framer Motion", "Capacitor",
];

export const typingPhrases = [
  "Software Engineer",
  "AI Builder",
  "Full-Stack Developer",
  "Product Creator",
];

export const stats = [
  { label: "Projects Built", value: 8, suffix: "" },
  { label: "Live Products", value: 3, suffix: "" },
  { label: "API Routes", value: 141, suffix: "+" },
  { label: "Technologies", value: 22, suffix: "" },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Vanguard",
    period: "2023 — Present",
    description: "Building enterprise-grade financial software for one of the world's largest investment management companies.",
    highlights: [
      "Full-stack development with modern web technologies",
      "Enterprise application architecture & design patterns",
      "Collaborating across cross-functional teams",
    ],
  },
  {
    role: "Independent AI Builder",
    company: "Side Projects",
    period: "2022 — Present",
    description: "Building AI-powered SaaS products end-to-end — from concept to production deployment.",
    highlights: [
      "8 products spanning AI, SaaS, and mobile",
      "3 live products with real users",
      "Full-stack: frontend, backend, database, payments, deployment",
    ],
  },
];

export const socials = {
  github: "https://github.com/Mehulpython",
  email: "mehulkanadiya@gmail.com",
  linkedin: "https://linkedin.com/in/mehulkanadiya",
  twitter: "https://x.com/Mehulpython",
};
