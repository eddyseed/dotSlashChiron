export type CertLevel =
  | "Professional"
  | "Associate"
  | "Specialization"
  | "Course";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string; // URL to logo image (optional, falls back to initials)
  date: string; // e.g. "Mar 2024"
  expiry?: string; // e.g. "Mar 2027" — omit if no expiry
  credentialId?: string;
  verifyUrl?: string; // Link to verify / view cert
  level: CertLevel;
  skills: string[]; // Short skill tags shown on card
  featured?: boolean; // Featured certs appear larger / first
}

export const certificates: Certificate[] = [
  {
    id: "freecodecamp-microsoft",
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft / freeCodeCamp",
    issuerLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210729021049",
    date: "Feb 2024",
    expiry: "",
    // credentialId: "AWS-SAA-12345",
    verifyUrl:
      "https://freecodecamp.org/certification/rishabhjn13/foundational-c-sharp-with-microsoft",
    level: "Associate",
    skills: ["C#", "Microsoft", "VSCode", "OOPS"],
    featured: true,
  },
  {
    id: "freecodecamp-javascript-dsa",
    title: "Legacy JavaScript Algorithms and Data Structures V8",
    issuer: "freeCodeCamp",
    issuerLogo:
      "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
    date: "May 2025",
    verifyUrl:
      "https://freecodecamp.org/certification/rishabhjn13/javascript-algorithms-and-data-structures-v8",
    level: "Professional",
    skills: ["React", "HTML/CSS", "JS", "DSA"],
    featured: true,
  },
  {
    id: "freeCodeCamp-responsive-web-design",
    title: "Legacy Responsive Web Design V8 Certification",
    issuer: "freeCodeCamp",
    issuerLogo:
      "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
    date: "Feb 2024",
    verifyUrl:
      "https://freecodecamp.org/certification/rishabhjn13/responsive-web-design",
    level: "Specialization",
    skills: ["UX Research", "Wireframing", "Prototyping", "Figma"],
    featured: false,
  },
  {
    id: "freeCodeCamp-backend-api",
    title: "Back-End Development and APIs v8",
    issuer: "freeCodeCamp",
    issuerLogo:
      "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
    date: "May 2025",
    verifyUrl:
      "https://freecodecamp.org/certification/rishabhjn13/back-end-development-and-apis",
    level: "Professional",
    skills: ["Backend Servers", "HTTP Servers", "Exress.js", "RESTapi"],
    featured: false,
  },
  {
    id: "simplilearn-introduction-mongodb",
    title: "Introduction to MongoDB",
    issuer: "Simplilearn",
    issuerLogo: "https://images.yourstory.com/cs/images/companies/sim-1591353283921.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=85",
    date: "Jun 2026",
    level: "Course",
    skills: ["MongoDB", "NoSQL", "Database"],
    featured: false,
    verifyUrl: "https://simpli-web.app.link/e/0Jlph4XUB3b"
  },

  {
    id: "be10x-ai-tools-workshop",
    title: "AI Tools Workshop Completion Certificate",
    issuer: "Be10x",
    issuerLogo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/64281ff2228ebef73094a229/0x0.png",
    verifyUrl: "https://drive.google.com/file/d/1TT0sE_enk3KTP2vTF6Zn-AaHXb1r_Iax/view?usp=sharing",
    date: "Feb 2026",
    level: "Course",
    skills: ["AI Tools", "Generative AI", "Productivity"],
    featured: false,
  },

  {
    id: "uniconverge-industrial-visit",
    title: "Industrial Visit Certificate",
    issuer: "UniConverge Technologies Pvt. Ltd., Noida",
    issuerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2exQU9rKo7vEu4ZyBr0uQZ85nO-Ti6RoVc874r3ZZ8SLkSqQQ8teeMwO",
    date: "Jan 2026",
    level: "Course",
    skills: ["Industry Exposure", "Technology", "Professional Development"],
    featured: false,
    verifyUrl: "https://drive.google.com/file/d/1FdTxM_bgsIQpYCXRutJMAPWyN_h9NseU/view?usp=sharing",
  },
];

// ── Contact ──────────────────────────────────────────────────────────

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "location";
  cta: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS || ""}`,
    icon: "mail",
    cta: "Send a mail",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/rishabhjn13",
    href: process.env.NEXT_PUBLIC_GITHUB_LINK || "#",
    icon: "github",
    cta: "View profile",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/rishabhjn13",
    href: process.env.NEXT_PUBLIC_LINKEDIN_LINK || "#",
    icon: "linkedin",
    cta: "Connect",
  },
  {
    id: "location",
    label: "Based in",
    value: "India · Remote-friendly",
    href: "https://www.google.com/",
    icon: "location",
    cta: "Available worldwide",
  },
];

export const contactMeta = {
  availabilityLabel: "Open to work",
  availabilityNote: "Available for freelance, contract & full-time roles",
  responseTime: "Usually replies within 24 hrs",
  headline: "Let's build something",
  subline:
    "Have a project in mind, a question, or just want to say hi? My inbox is open.",
};
