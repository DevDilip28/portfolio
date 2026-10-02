export type Project = {
  title: string;
  category: string;
  description: string;
  details: string;
  stack: string[];
  live?: string;
  github: string;
  featured?: boolean;
};

export type SkillCapability = {
  name: string;
  skills: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  highlight?: boolean;
  capabilities: SkillCapability[];
};

export type LearningArea = {
  title: string;
  text: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "ForgeAI",
    category: "Agentic AI · Developer Tool",
    description:
      "Autonomous CLI coding agent powered by LangGraph and MCP—plans tasks, executes tools, and preserves project context across sessions.",
    details:
      "Separate CODE, ARCHITECT, and ASK modes with LangGraph orchestration, SQLite checkpointing, dynamic MCP tools, and human-in-the-loop safeguards. Inspects and edits code, runs shell commands, searches the web, and surfaces live execution metrics.",
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "MCP",
      "OpenAI",
      "SQLite",
      "SQLAlchemy",
      "Rich",
    ],
    github: "https://github.com/DevDilip28/ForgeAI",
    featured: true,
  },
  {
    title: "ContextIQ",
    category: "Generative AI · RAG",
    description:
      "Full-stack knowledge assistant—upload PDFs, sites, and YouTube content, then search and chat with grounded answers.",
    details:
      "End-to-end RAG: ingestion, extraction, chunking, embeddings, vector search, relevance retrieval, conversation memory, and context-grounded LLM responses across multiple sources.",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "FAISS",
      "Hugging Face",
      "Groq",
    ],
    live: "https://contextiq-ten.vercel.app/",
    github: "https://github.com/DevDilip28/ContextIQ",
  },
  {
    title: "TriggerFlow",
    category: "Full-Stack · Workflow Automation",
    description:
      "Visual workflow automation—connect triggers and actions to run multi-step processes without manual intervention.",
    details:
      "Node-based builder on React Flow with event-driven services, time and price triggers, email and trading actions, external APIs, and real-time WebSocket updates in a TurboRepo monorepo.",
    stack: [
      "React",
      "TypeScript",
      "React Flow",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "TurboRepo",
    ],
    live: "https://trigger-flow-client.vercel.app/",
    github: "https://github.com/DevDilip28/TriggerFlow",
  },
  {
    title: "AlgoHolic",
    category: "Full-Stack · Developer Platform",
    description:
      "LeetCode-style DSA platform—solve problems, run code in multiple languages, track streaks, and unlock achievements.",
    details:
      "JWT auth, problem catalog, interactive editor, sandboxed execution, progress analytics, streaks, and achievements on a modular Node.js, Express, Prisma, and PostgreSQL API.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    live: "https://algoholic.site",
    github: "https://github.com/DevDilip28/AlGoHolic",
  },
  {
    title: "DropVault",
    category: "Full-Stack · Cloud Storage",
    description:
      "Secure cloud storage for uploading, previewing, and organizing images and documents with a polished dashboard.",
    details:
      "Auth via Clerk, delivery through ImageKit, PostgreSQL persistence with Drizzle ORM, and a responsive Next.js experience for uploads, previews, and metadata.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "ImageKit",
      "Drizzle",
      "PostgreSQL",
    ],
    live: "https://www.dropvault.site/",
    github: "https://github.com/DevDilip28/DropVault",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI",
    description: "LLM products, retrieval, and production-grade AI application design.",
    highlight: true,
    capabilities: [
      {
        name: "Retrieval & knowledge",
        skills: ["RAG", "Embeddings", "Semantic search", "FAISS", "Chunking"],
      },
      {
        name: "LLM systems",
        skills: ["LLM APIs", "Grounded generation", "Streaming", "Groq", "Hugging Face"],
      },
      {
        name: "Frameworks",
        skills: ["LangChain", "LangGraph", "Vector stores", "Context engineering"],
      },
    ],
  },
  {
    title: "Agentic AI",
    description: "Multi-step agents, tools, orchestration, and safe autonomous workflows.",
    highlight: true,
    capabilities: [
      {
        name: "Orchestration",
        skills: ["LangGraph", "AI agents", "State graphs", "Checkpointing"],
      },
      {
        name: "Tools & protocols",
        skills: ["MCP", "Tool calling", "Human-in-the-loop", "Shell & file tools"],
      },
      {
        name: "Patterns",
        skills: ["Planning", "Multi-mode agents", "Session memory", "Observability"],
      },
    ],
  },
  {
    title: "Full-Stack",
    description: "Product UI, app architecture, and shipping complete user experiences.",
    highlight: true,
    capabilities: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        name: "Product UI",
        skills: ["React Flow", "Responsive design", "Design systems", "Accessibility"],
      },
      {
        name: "Application layer",
        skills: ["JavaScript", "Server components", "Auth flows", "Real-time UI"],
      },
    ],
  },
  {
    title: "Backend",
    description: "APIs, auth, data modeling, and scalable service architecture.",
    highlight: true,
    capabilities: [
      {
        name: "Runtimes",
        skills: ["Node.js", "Express.js", "Python", "FastAPI"],
      },
      {
        name: "APIs & realtime",
        skills: ["REST APIs", "WebSockets", "JWT", "Webhooks"],
      },
      {
        name: "Architecture",
        skills: ["Modular services", "Monorepos", "Async jobs", "Error handling"],
      },
    ],
  },
  {
    title: "Data & infrastructure",
    description: "Persistence, DevOps basics, and tooling for reliable deployments.",
    capabilities: [
      {
        name: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "SQLAlchemy"],
      },
      {
        name: "Platform",
        skills: ["Docker", "Linux", "Git", "GitHub", "Vercel"],
      },
      {
        name: "Monorepo & quality",
        skills: ["TurboRepo", "SQLite", "Migrations", "CI-friendly workflows"],
      },
    ],
  },
];

export const learningAreas: LearningArea[] = [
  {
    title: "RAG & context engineering",
    text: "Retrieval quality, embeddings, context selection, re-ranking, and grounded generation at scale.",
    tags: ["RAG", "Embeddings", "Context"],
  },
  {
    title: "Agentic AI",
    text: "Tool-using agents with durable state, decision loops, and dependable multi-step workflows.",
    tags: ["LangGraph", "MCP", "Agents"],
  },
  {
    title: "LLM systems",
    text: "Model APIs, structured outputs, orchestration, memory, streaming, and reliability patterns.",
    tags: ["LLM APIs", "Orchestration", "Memory"],
  },
  {
    title: "AI backend engineering",
    text: "APIs, async processing, auth, and data layers built for production AI workloads.",
    tags: ["FastAPI", "Node.js", "PostgreSQL"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "GenAI", href: "#genai" },
];

export const socialLinks = {
  github: "https://github.com/DevDilip28",
  linkedin: "https://www.linkedin.com/in/dilipasdeo/",
  email: "mailto:dilipasdeo028@gmail.com",
};
