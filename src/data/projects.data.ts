export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  status: "Live" | "In Progress" | "Archived";
  tags: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  accent: string; // tailwind bg class for card accent bar
  accentHex: string; // raw hex for dynamic styles
  index: string; // zero-padded display number
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "mr-veggies-quick-commerce-store",
    title: "Mr Veggies Store",
    tagline: "Lightweight e-commerce store with user dashboard",
    description:
      "This portfolio project is a quick-commerce store built using Next.js, Zustand, and Firebase. It allows users to browse and purchase fresh vegetables, fruits and other daily products online. The application provides a seamless shopping experience with features such as product listing, shopping cart, and user authentication.",
    year: "2026",
    role: "Full Stack Developer",
    status: "Live",
    tags: ["Fuse.js", "NoSQL", "Easy-to-Operate"],
    stack: ["Next.js", "TypeScript", "Firestore", "Fuse.js"],
    liveUrl: "https://mr-veggies.vercel.app/",
    githubUrl: "https://github.com/rishabhjn13/MrVeggies",
    highlights: [
      "Browse and purchase fresh vegetables, fruits, and daily essentials online",
      "Zustand-powered cart with persistent state across sessions",
      "Firebase authentication with secure user dashboard",
      "Optimised product search using Fuse.js fuzzy matching",
    ],
    accent: "bg-[#111]",
    accentHex: "#111111",
    index: "01",
    images: [
      "https://github.com/rishabhjn13/MrVeggies/raw/main/public/screenshots/1.png",
      "https://github.com/rishabhjn13/MrVeggies/raw/main/public/screenshots/4.png",
      "https://github.com/rishabhjn13/MrVeggies/raw/main/public/screenshots/6.png",
      "https://github.com/rishabhjn13/MrVeggies/raw/main/public/screenshots/5.png",
    ],
  },
  {
    slug: "openai-api-tester-tool",
    title: "OpenAI API Testing Tool",
    tagline: "Test your OpenAI api easily with Ollama",
    description:
      "Automatically generates test cases for your APIs using a local Ollama model. Streamline API validation, reduce manual testing, and integrate seamlessly with your development workflow.",
    year: "2025",
    role: "Backend Engineer",
    status: "Archived",
    tags: ["Ollama", "OpenAI", "Node.js"],
    stack: [
      "react.js",
      "axios",
      "socket-io",
      "multer",
      "zod-validation",
      "tailwindcss",
      "winston",
    ],
    githubUrl: "https://github.com/rishabhjn13/OpenAPI-Testing-Tool",
    highlights: [
      "Auto-generates test cases for APIs using a local Ollama model",
      "Real-time request inspection via Socket.io",
      "File upload support through Multer for multipart API testing",
      "Zod-based schema validation with structured Winston logging",
    ],
    accent: "bg-[#1a1a2e]",
    accentHex: "#1a1a2e",
    index: "02",
    images: [
      "https://github.com/rishabhjn13/OpenAPI-Testing-Tool/raw/master/images/1.png",
      "https://github.com/rishabhjn13/OpenAPI-Testing-Tool/raw/master/images/2.png",
      "https://github.com/rishabhjn13/OpenAPI-Testing-Tool/raw/master/images/3.png",
      "https://github.com/rishabhjn13/OpenAPI-Testing-Tool/raw/master/images/4.png",
    ],
  },
  {
    slug: "pensieve",
    title: "Pensieve MultiTool",
    tagline: "Multi tool applicaation for productivity.",
    description:
      "About Pensieve is a modern, full‑stack developer toolkit built with Next.js and TypeScript, featuring a secure TOTP-authenticated dashboard and a suite of productivity tools like a AI Notepad and Cloud Vault. It integrates cloud backends such as Firebase and Supabase to provide seamless data storage, real-time updates, and AI-powered text summarization.",
    year: "2026",
    role: "Full Stack Engineer",
    status: "Live",
    tags: ["Real-time", "Collaboration", "AI"],
    stack: [
      "Next.js",
      "Yjs",
      "WebRTC",
      "Monaco Editor",
      "OpenAI API",
      "Supabase",
    ],
    liveUrl: "https://dev-kit-flax.vercel.app",
    githubUrl: "https://github.com/rishabhjn13/Pensieve",
    highlights: [
      "TOTP-authenticated dashboard for secure access",
      "AI Notepad with GPT-powered text summarization",
      "Cloud Vault backed by Firebase and Supabase for real-time storage",
      "Unified productivity toolkit built with Next.js and TypeScript",
    ],
    accent: "bg-[#0f3460]",
    accentHex: "#0f3460",
    index: "03",
    images: [
      "https://github.com/rishabhjn13/Pensieve/raw/master/public/screenshots/1.png",
      "https://github.com/rishabhjn13/Pensieve/raw/master/public/screenshots/2.png",
      "https://github.com/rishabhjn13/Pensieve/raw/master/public/screenshots/3.png",
    ],
  },
];
