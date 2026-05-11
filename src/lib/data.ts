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
    liveUrl: "https://snaplean.life",
    githubUrl: "https://github.com/Mehulpython/snaplean",
    status: "live",
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
    liveUrl: "https://futurefaceai.net",
    status: "live",
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
  "Python", "TypeScript", "React", "Next.js", "Node.js", "Java",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
  "AWS", "PySpark", "Databricks", "Scala",
  "Flask", "Django", "FastAPI", "Tailwind CSS",
  "Stripe", "AI/LLM", "OpenAI", "React Native", "Expo", "Git",
  "REST APIs", "CI/CD", "Framer Motion", "Power BI",
];

export const typingPhrases = [
  "AWS & Python Developer",
  "AI Builder",
  "Published Researcher",
  "Full-Stack Engineer",
  "Med → Tech",
  "7× AWS Certified",
];

export const stats = [
  { label: "Research Citations", value: 259, suffix: "+" },
  { label: "Publications", value: 6, suffix: "" },
  { label: "Projects Built", value: 8, suffix: "" },
  { label: "Live Products", value: 4, suffix: "" },
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
    role: "AWS-Python-Spark Developer",
    company: "Vanguard",
    period: "2023 — Present",
    description: "Lead developer building PII deidentification, data validation, and risk assessment systems on AWS using PySpark, Scala, and Python.",
    highlights: [
      "Lead Scala-based PII deidentification app + PySpark Glue jobs",
      "Onboarded 15 datalakes with robust data integration strategies",
      "Improved column type prediction accuracy by 20% using AWS Bedrock LLM",
      "Analyzed 5,000+ tables for Collibra metadata governance",
    ],
  },
  {
    role: "AWS-Python Developer",
    company: "Vanguard (via Deloitte)",
    period: "2022 — 2023",
    description: "Modernized mainframe APIs to AWS infrastructure — migrating DB2 databases and building RESTful APIs with Python and AWS services.",
    highlights: [
      "Modernized mainframe APIs to AWS (API Gateway, Lambda, S3)",
      "Configured Redshift IAM roles, security, and backup strategies",
      "Built RESTful APIs with Node.js/Express and Python/Flask",
      "Developed visualizations with Power BI and Quicksight",
    ],
  },
  {
    role: "AWS/Python Developer",
    company: "H&M Insurance / Lakeland Bank",
    period: "2014 — 2022",
    description: "Full-stack AWS/Python development across insurance and banking — ETL pipelines, container orchestration, and data processing workflows.",
    highlights: [
      "Built ETL pipelines with EMR, Spark, Hive on AWS",
      "Led Kubernetes container orchestration for scalable deployments",
      "Developed PySpark applications in Databricks & AWS EMR clusters",
      "Reduced manual metadata review efforts by 25%",
    ],
  },
  {
    role: "Independent AI Builder",
    company: "Side Projects",
    period: "2022 — Present",
    description: "Building AI-powered SaaS products end-to-end — from concept to production deployment.",
    highlights: [
      "8 products spanning AI, SaaS, and mobile",
      "4 live products with real users",
      "Full-stack: frontend, backend, database, payments, deployment",
    ],
  },
  {
    role: "Research Assistant",
    company: "Cleveland Clinic",
    period: "2012 — 2013",
    description: "Conducted clinical research at one of the nation's top hospitals — preparing protocols, statistical analysis, and manuscripts.",
    highlights: [
      "Co-authored 6 peer-reviewed publications with 259+ citations",
      "Principal Investigator on $8,000 research grant",
      "Research in gastroenterology, diabetes & colorectal cancer",
    ],
  },
  {
    role: "Medical Scribe / Graduate Assistant",
    company: "Ohio University",
    period: "2008 — 2012",
    description: "Supported clinical documentation at the Diabetes & Endocrine Center while completing MPH and serving as graduate assistant.",
    highlights: [
      "Graduate Assistant — Dept. of Social and Public Health",
      "Medical Monitor for INSPIRE DIABETES clinical trial",
      "Outstanding Poster Award — APTR, Washington DC (2010)",
    ],
  },
  {
    role: "Resident Medical Officer",
    company: "Wockhardt Hospital (Harvard Medical International)",
    period: "2007 — 2008",
    description: "Provided continuous on-site medical support in a Harvard-affiliated hospital — ward rounds, clinical procedures, and patient care.",
    highlights: [
      "48+ hours/week clinical duties",
      "Post-operative and ICU patient management",
      "Collaborated with consultants on treatment plans",
    ],
  },
];

export interface Publication {
  title: string;
  journal: string;
  year: number;
  citations: number;
  authors: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "Preventive behaviors, beliefs, and anxieties in relation to the swine flu outbreak among college students aged 18–24 years",
    journal: "Journal of Public Health",
    year: 2011,
    citations: 90,
    authors: "MK Kanadiya, AM Sallar",
    link: "https://doi.org/10.1007/s10389-010-0373-3",
  },
  {
    title: "Risk stratification of patients with Barrett's esophagus and low-grade dysplasia or indefinite for dysplasia",
    journal: "Clinical Gastroenterology and Hepatology",
    year: 2015,
    citations: 51,
    authors: "PN Thota, HJ Lee, JR Goldblum, X Liu, MR Sanaka, T Gohel, M Kanadiya, R Lopez",
    link: "https://doi.org/10.1016/j.cgh.2014.09.020",
  },
  {
    title: "Relationship between type-2 diabetes and use of metformin with risk of colorectal adenoma",
    journal: "Journal of Diabetes and Its Complications",
    year: 2013,
    citations: 50,
    authors: "MK Kanadiya, TD Gohel, MR Sanaka, PN Thota, JH Shubrook",
    link: "https://doi.org/10.1016/j.jdiacomp.2013.04.010",
  },
  {
    title: "Use of and attitudes toward complementary and alternative medicine among osteopathic medical students",
    journal: "Journal of Osteopathic Medicine (JAOA)",
    year: 2012,
    citations: 40,
    authors: "MK Kanadiya, G Klein, JH Shubrook",
  },
  {
    title: "Higher prevalence of colon polyps in patients with Barrett's esophagus: a case-control study",
    journal: "Gastroenterology Report",
    year: 2014,
    citations: 16,
    authors: "A Kumaravel, PN Thota, HJ Lee, T Gohel, M Kanadiya, R Lopez, MR Sanaka",
  },
  {
    title: "Prasugrel as a safe alternative for clopidogrel-associated arthritis",
    journal: "Journal of Invasive Cardiology",
    year: 2011,
    citations: 16,
    authors: "MK Kanadiya, S Singhal, VB Koshal",
  },
];

export const conferences = [
  {
    title: "Predictors of Response to Endoscopic Therapy of Barrett's Dysplasia",
    venue: "ACG Annual Meeting, San Diego, CA",
    year: 2013,
  },
  {
    title: "Is Diabetes Associated with Progression to Dysplasia in Barrett's Esophagus?",
    venue: "ACG Annual Meeting, San Diego, CA",
    year: 2013,
  },
  {
    title: "Gender-Based Differences in Risk for High-Grade Dysplasia in Barrett's Esophagus",
    venue: "ACG Annual Meeting, San Diego, CA",
    year: 2013,
  },
  {
    title: "Patients with Barrett's Esophagus Have Higher Prevalence of Colon Polyps",
    venue: "ACG Annual Meeting, San Diego, CA",
    year: 2013,
  },
  {
    title: "Cryotherapy vs Radiofrequency Ablation for Barrett's Dysplasia",
    venue: "ACG Annual Meeting, Las Vegas, NV",
    year: 2012,
  },
  {
    title: "Predictors of Response to Endoscopic Therapy of Barrett's Dysplasia and IMC",
    venue: "ACG Annual Meeting, Las Vegas, NV",
    year: 2012,
  },
  {
    title: "Diabetes and Risk of Colorectal Adenoma in Colonoscopy Patients",
    venue: "International Hospital Diabetes Meeting, Cambridge, MA",
    year: 2012,
  },
  {
    title: "Osteopathic Medical Students' Attitude Toward CAM",
    venue: "116th AOAOM Annual Conference, Orlando, FL",
    year: 2011,
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
  emoji: string;
}

export const education: Education[] = [
  {
    degree: "Master of Public Health (MPH)",
    institution: "Ohio University, Athens, OH",
    period: "2008 — 2011",
    details: [
      "Consortium of Eastern Ohio MPH Program",
      "Graduate Assistant — Dept. of Social and Public Health",
      "PI: $8,000 Research Grant (Diabetes & Colorectal Adenoma)",
      "Outstanding Poster Award — APTR, Washington DC",
      "2nd Place — Student Research Expo, Ohio University",
    ],
    emoji: "🎓",
  },
  {
    degree: "Associate in Information Systems",
    institution: "Cuyahoga Community College, Cleveland, OH",
    period: "2014 — 2016",
    details: [
      "Focus on software development and information systems",
      "Foundation for transition from medicine to technology",
    ],
    emoji: "💻",
  },
  {
    degree: "MBBS (MD) — Bachelor of Medicine & Bachelor of Surgery",
    institution: "Pramukhswami Medical College, Sardar Patel University, India",
    period: "2001 — 2007",
    details: [
      "Gujarat Medical Council Certified (#G-38871)",
      "ECFMG Certified (#0-741-046-7)",
      "USMLE Step 1: 218/90 • Step 2 CK: 219/90 • Step 2 CS: Passed",
    ],
    emoji: "⚕️",
  },
];

export const certifications = [
  { name: "AWS Solutions Architect", detail: "Associate — July 2022", category: "aws" },
  { name: "AWS Developer", detail: "Associate — August 2022", category: "aws" },
  { name: "AWS SysOps Administrator", detail: "Associate — August 2022", category: "aws" },
  { name: "AWS DevOps Engineer", detail: "Professional — September 2022", category: "aws" },
  { name: "AWS Data Analytics", detail: "Specialty — October 2022", category: "aws" },
  { name: "AWS Database", detail: "Specialty — November 2022", category: "aws" },
  { name: "AWS Security", detail: "Specialty — December 2022", category: "aws" },
  { name: "PCAP Python Programming", detail: "Certified Associate — August 2023", category: "python" },
  { name: "SAFe 5 PO/PM", detail: "Scaled Agile Framework", category: "agile" },
  { name: "Databricks Lakehouse", detail: "Fundamentals", category: "data" },
  { name: "ECFMG Certified", detail: "Educational Commission for Foreign Medical Graduate", category: "medical" },
  { name: "USMLE", detail: "Steps 1, 2 CK, 2 CS — All Passed", category: "medical" },
];

export const socials = {
  github: "https://github.com/Mehulpython",
  email: "mehulkanadiya@gmail.com",
  linkedin: "https://www.linkedin.com/in/mehul-kanadiya-5b0b09233",
  twitter: "https://x.com/Mehulpython",
  scholar: "https://scholar.google.com/citations?user=fObzCLIAAAAJ",
};
