/**
 * ============================================================
 *  PORTFOLIO CONTENT — Edit everything here in one place.
 *  (Eikhane sob text/data edit korbe. Component e jawa lagbe na.)
 * ============================================================
 */

export const profile = {
  name: "Pranto Shikder",
  // Roles cycle in the hero typing animation
  roles: [
    "Frontend Developer",
    "React & Next.js Engineer",
    "UI/UX Enthusiast",
    "Web Animation Specialist",
  ],
  tagline:
    "I craft fast, accessible and beautifully animated web interfaces that turn ideas into delightful user experiences.",
  location: "Dhaka, Bangladesh",
  email: "prantoshikder24@gmail.com",
  phone: "+880 1700 000000",
  availableForWork: true,
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    dribbble: "https://dribbble.com/",
  },
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Projects Shipped" },
    { value: "30+", label: "Happy Clients" },
    { value: "99", label: "Lighthouse Score" },
  ],
  // Longer bio used on the About page
  bio: [
    "I'm a frontend developer with a deep love for the craft of the web. For the past four years I've specialized in building fast, accessible and visually polished applications using React, Next.js and TypeScript.",
    "My approach blends solid engineering with thoughtful design — I care as much about clean, maintainable code as I do about that last 5% of polish that makes an interface feel effortless and alive. I believe great products live in the details: the timing of a transition, the focus ring on a button, the empty state nobody else thought about.",
    "I've worked with startups and agencies, shipping everything from marketing sites to complex SaaS dashboards. I love collaborating closely with designers, translating Figma into living, breathing interfaces — and just as often, designing the experience myself.",
    "When I'm not shipping pixels, you'll find me exploring new animation techniques, contributing to open-source, writing about frontend, or mentoring developers getting started in the field.",
  ],
  // What I value when building products
  values: [
    {
      icon: "Target",
      title: "User-first",
      text: "Every decision starts with the person on the other side of the screen.",
    },
    {
      icon: "Gauge",
      title: "Performance",
      text: "Fast is a feature. I obsess over Core Web Vitals on every build.",
    },
    {
      icon: "Accessibility",
      title: "Accessible",
      text: "The web is for everyone — keyboard, screen reader and beyond.",
    },
    {
      icon: "Sparkles",
      title: "Polished",
      text: "Motion and micro-details that make products feel premium.",
    },
  ],
  interests: [
    "Open Source",
    "UI Animation",
    "Photography",
    "Coffee Brewing",
    "Football",
    "Tech Writing",
  ],
};

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "University of Dhaka",
    period: "2016 — 2020",
    detail:
      "Graduated with honors. Focused on human-computer interaction and web technologies. Led the university web dev club.",
  },
  {
    degree: "Meta Front-End Developer Certificate",
    school: "Coursera",
    period: "2021",
    detail:
      "Professional certification covering React, responsive design, version control and UX principles.",
  },
];

/**
 * SERVICES — "What kind of work do I do?"
 * Each service now carries deliverables for the Services page.
 */
export const services = [
  {
    icon: "Layout",
    title: "Web App Development",
    description:
      "Production-grade single-page & server-rendered apps with React, Next.js and TypeScript — built to scale and easy to maintain.",
    deliverables: [
      "Next.js / React architecture",
      "Type-safe codebase",
      "Reusable component system",
      "API & state integration",
    ],
  },
  {
    icon: "Palette",
    title: "UI / UX Engineering",
    description:
      "Pixel-perfect interfaces from Figma to code. Design systems, reusable components and consistent visual language.",
    deliverables: [
      "Figma-to-code conversion",
      "Design system & tokens",
      "Component library",
      "Style guide & docs",
    ],
  },
  {
    icon: "Sparkles",
    title: "Motion & Interaction",
    description:
      "Micro-interactions, scroll animations and smooth transitions that make products feel alive and premium.",
    deliverables: [
      "Scroll & page transitions",
      "Micro-interactions",
      "Animated data viz",
      "Reduced-motion support",
    ],
  },
  {
    icon: "Gauge",
    title: "Performance Optimization",
    description:
      "Core Web Vitals, lazy loading, code-splitting and bundle analysis to keep apps blazing fast on every device.",
    deliverables: [
      "Lighthouse audit",
      "Bundle size reduction",
      "Image & font optimization",
      "Core Web Vitals fixes",
    ],
  },
  {
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Mobile-first layouts that look flawless from a 320px phone to an ultra-wide monitor — no exceptions.",
    deliverables: [
      "Mobile-first layouts",
      "Fluid typography",
      "Cross-device QA",
      "Touch-friendly UX",
    ],
  },
  {
    icon: "Accessibility",
    title: "Accessibility (a11y)",
    description:
      "WCAG-compliant, keyboard-friendly and screen-reader tested interfaces so everyone can use your product.",
    deliverables: [
      "WCAG 2.2 compliance",
      "Keyboard navigation",
      "Screen reader testing",
      "Semantic HTML & ARIA",
    ],
  },
];

/**
 * PROCESS — how I work, shown on the Services page.
 */
export const process = [
  {
    step: "01",
    title: "Discover",
    text: "We talk through your goals, users and constraints. I research, ask the hard questions and define what success looks like.",
  },
  {
    step: "02",
    title: "Design & Plan",
    text: "Wireframes, design direction and a technical plan. We agree on scope, milestones and the stack before a line of code.",
  },
  {
    step: "03",
    title: "Build",
    text: "Clean, type-safe, component-driven development with regular previews so you see progress every step of the way.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    text: "Performance pass, accessibility audit, deploy — then I stick around to measure, refine and improve.",
  },
];

/**
 * SKILLS — grouped, each with a proficiency level (0–100) for bars.
 */
export const skills = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES2024)", level: 96 },
      { name: "HTML5", level: 98 },
      { name: "CSS3 / Sass", level: 95 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", level: 96 },
      { name: "Next.js", level: 93 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Motion / Framer", level: 90 },
      { name: "Redux / Zustand", level: 85 },
      { name: "Vue", level: 72 },
    ],
  },
  {
    category: "Tools & Platform",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Figma", level: 88 },
      { name: "Vite", level: 90 },
      { name: "Vitest / Jest", level: 82 },
      { name: "Storybook", level: 85 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    category: "Backend Basics",
    items: [
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 78 },
    ],
  },
];

export const learning = ["Astro", "WebGPU", "Rust", "Three.js"];

/**
 * PROJECTS — each is a full case study with a unique `slug`.
 * Detail pages live at /work/[slug].
 */
export const projects = [
  {
    slug: "nova-analytics",
    title: "Nova Analytics Dashboard",
    tagline: "Real-time SaaS analytics, reimagined.",
    description:
      "A real-time SaaS analytics platform with live charts, dark mode and a fully custom design system. Reduced load time by 60%.",
    image: "gradient-1",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    year: "2024",
    role: "Lead Frontend Developer",
    client: "Nova Inc.",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    overview:
      "Nova needed a dashboard that could render thousands of live data points without dropping a frame. The old product felt sluggish and dated, hurting retention.",
    problem:
      "The legacy dashboard took 6+ seconds to become interactive and re-rendered the entire chart grid on every data tick, causing visible jank.",
    solution:
      "I rebuilt the frontend on Next.js with a memoized chart layer, virtualized tables and a streaming data hook. A new design system unified 40+ screens.",
    features: [
      "Live-updating charts at 60fps via memoized canvas layers",
      "Custom design system with light/dark themes and tokens",
      "Virtualized data tables handling 100k+ rows",
      "Saved views, filters and CSV export",
      "Fully keyboard-navigable and screen-reader friendly",
    ],
    results: [
      { value: "-60%", label: "Time to interactive" },
      { value: "60fps", label: "Live chart rendering" },
      { value: "+24%", label: "User retention" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Zustand",
      "Vercel",
    ],
  },
  {
    slug: "lumen-ecommerce",
    title: "Lumen E-Commerce",
    tagline: "A storefront that loads before you blink.",
    description:
      "Headless storefront with smooth cart animations, instant search and a 98 Lighthouse performance score.",
    image: "gradient-2",
    tags: ["React", "Stripe", "Motion", "Vite"],
    year: "2024",
    role: "Frontend Developer",
    client: "Lumen Goods",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    overview:
      "A modern lifestyle brand wanted a headless storefront that felt as premium as their products and converted on mobile.",
    problem:
      "Their hosted platform was slow, hard to customize, and the checkout flow leaked customers at every step.",
    solution:
      "A headless React storefront with instant search, optimistic cart updates, buttery transitions and a streamlined two-step checkout.",
    features: [
      "Instant, typo-tolerant product search",
      "Optimistic cart with animated add-to-cart flow",
      "Two-step Stripe checkout with Apple/Google Pay",
      "98 Lighthouse performance score on mobile",
      "Reusable, themeable product components",
    ],
    results: [
      { value: "98", label: "Lighthouse score" },
      { value: "+38%", label: "Mobile conversion" },
      { value: "1.1s", label: "Largest Contentful Paint" },
    ],
    tech: ["React", "Vite", "Stripe", "Motion", "Algolia", "Tailwind CSS"],
  },
  {
    slug: "pulse-music",
    title: "Pulse Music Player",
    tagline: "Music you can see.",
    description:
      "A web-based music player with animated visualizers, gesture controls and offline playback support.",
    image: "gradient-3",
    tags: ["React", "Web Audio API", "PWA"],
    year: "2023",
    role: "Solo Developer",
    client: "Personal Project",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    overview:
      "An experiment in pushing the browser's audio and animation capabilities into a delightful, installable music experience.",
    problem:
      "Most web players ignore the expressive potential of the Web Audio API and feel like afterthoughts compared to native apps.",
    solution:
      "A PWA with real-time frequency visualizers, gesture controls, media-session integration and full offline playback.",
    features: [
      "Real-time audio visualizers via Web Audio API",
      "Installable PWA with offline playback",
      "Gesture controls and media-session keys",
      "Animated, theme-aware now-playing screen",
    ],
    results: [
      { value: "100", label: "PWA score" },
      { value: "0ms", label: "Offline load" },
      { value: "5k+", label: "GitHub stars" },
    ],
    tech: ["React", "Web Audio API", "Workbox", "TypeScript", "Motion"],
  },
  {
    slug: "drift-travel",
    title: "Drift Travel Booking",
    tagline: "Plan a trip in three taps.",
    description:
      "Interactive map-based trip planner with 3D card transitions and a buttery-smooth multi-step booking flow.",
    image: "gradient-4",
    tags: ["Next.js", "Mapbox", "Zustand"],
    year: "2023",
    role: "Frontend Developer",
    client: "Drift Travel",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    overview:
      "Drift wanted booking to feel like daydreaming about a holiday — visual, map-driven and effortless.",
    problem:
      "Traditional booking funnels are form-heavy and abandon-prone, especially on mobile.",
    solution:
      "A map-first planner with 3D destination cards, a persistent itinerary drawer and a guided multi-step flow that never loses your place.",
    features: [
      "Interactive Mapbox destination explorer",
      "3D card transitions between destinations",
      "Persistent itinerary with Zustand state",
      "Guided multi-step booking with progress save",
    ],
    results: [
      { value: "+45%", label: "Booking completion" },
      { value: "-30%", label: "Drop-off rate" },
      { value: "4.8★", label: "App store rating" },
    ],
    tech: ["Next.js", "Mapbox GL", "Zustand", "Motion", "Tailwind CSS"],
  },
  {
    slug: "atlas-components",
    title: "Atlas Component Library",
    tagline: "40+ accessible components, fully themeable.",
    description:
      "An open-source, fully accessible React component library with 40+ themeable components and live docs.",
    image: "gradient-5",
    tags: ["React", "Storybook", "a11y"],
    year: "2022",
    role: "Maintainer",
    client: "Open Source",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    overview:
      "A from-scratch component library built to be the accessibility-first foundation for the teams I worked with.",
    problem:
      "Existing libraries were either inaccessible, hard to theme, or shipped massive bundles.",
    solution:
      "A tree-shakeable, WAI-ARIA-compliant library with a token-based theming system and interactive Storybook docs.",
    features: [
      "40+ WAI-ARIA compliant components",
      "Token-based theming, light/dark out of the box",
      "Tree-shakeable, tiny per-component bundles",
      "Live, interactive Storybook documentation",
    ],
    results: [
      { value: "40+", label: "Components" },
      { value: "100%", label: "a11y test pass" },
      { value: "12k", label: "Weekly downloads" },
    ],
    tech: ["React", "TypeScript", "Storybook", "Radix Primitives", "Vitest"],
  },
  {
    slug: "verve-cms",
    title: "Verve Portfolio CMS",
    tagline: "Ship a portfolio in minutes.",
    description:
      "A no-code portfolio builder letting creatives ship a site in minutes with drag-and-drop blocks.",
    image: "gradient-6",
    tags: ["Next.js", "Sanity", "Tailwind"],
    year: "2022",
    role: "Frontend Developer",
    client: "Verve",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    overview:
      "Verve set out to let non-technical creatives publish a beautiful portfolio without touching code.",
    problem:
      "Most site builders trade flexibility for simplicity — or overwhelm beginners with options.",
    solution:
      "A drag-and-drop block editor backed by Sanity, with curated templates, live preview and one-click publish to a fast Next.js site.",
    features: [
      "Drag-and-drop block editor",
      "Curated, customizable templates",
      "Live preview as you edit",
      "One-click publish to a fast static site",
    ],
    results: [
      { value: "3 min", label: "Avg. time to publish" },
      { value: "10k+", label: "Sites created" },
      { value: "95", label: "Avg. Lighthouse" },
    ],
    tech: ["Next.js", "Sanity", "Tailwind CSS", "dnd-kit", "Vercel"],
  },
];

/**
 * EXPERIENCE — timeline of roles with achievements.
 */
export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Pixelwave Studio",
    period: "2023 — Present",
    description:
      "Lead the frontend team building design-driven products for clients across fintech and e-commerce.",
    achievements: [
      "Established the company-wide component library used across 15+ projects",
      "Cut average page load time by 45% through a performance initiative",
      "Mentored 4 junior developers from onboarding to shipping features",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Bytecraft Labs",
    period: "2021 — 2023",
    description:
      "Shipped 20+ client web apps with React & Next.js in a fast-paced agency environment.",
    achievements: [
      "Introduced motion guidelines that became the company standard",
      "Built reusable starter template that cut project setup from days to hours",
      "Maintained a 98+ average Lighthouse score across delivered projects",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    period: "2020 — 2021",
    description:
      "Built responsive marketing sites and landing pages for startups while mastering modern CSS and JavaScript.",
    achievements: [
      "Delivered 30+ landing pages for early-stage startups",
      "Grew a 5-star reputation across freelance platforms",
    ],
  },
];

/**
 * TESTIMONIALS — social proof for the home & contact pages.
 */
export const testimonials = [
  {
    quote:
      "Pranto turned our clunky dashboard into something our users actually love. The attention to detail and performance is unmatched.",
    name: "Sarah Chen",
    title: "Product Lead, Nova Inc.",
  },
  {
    quote:
      "Hands down the best frontend developer we've worked with. Pixel-perfect, fast, and a genuine pleasure to collaborate with.",
    name: "Marcus Webb",
    title: "Founder, Lumen Goods",
  },
  {
    quote:
      "Delivered ahead of schedule with a polish we didn't think was possible on our timeline. We'll be working with Pranto again.",
    name: "Priya Sharma",
    title: "CTO, Drift Travel",
  },
];

/**
 * FAQ — shown on the Contact page.
 */
export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Anything frontend-heavy — SaaS dashboards, marketing sites, e-commerce storefronts, design systems and web apps. If it runs in a browser and needs to feel great, I'm interested.",
  },
  {
    q: "Do you work with designers or can you design too?",
    a: "Both. I love collaborating with designers and translating Figma to code, but I'm equally comfortable owning the design when there isn't one.",
  },
  {
    q: "What's your typical availability and timeline?",
    a: "I usually take on one or two projects at a time. Small sites take 1–2 weeks; larger apps run 4–8 weeks. Let's talk specifics.",
  },
  {
    q: "How do you charge?",
    a: "Project-based for well-defined scopes, or a weekly rate for ongoing work. I'll always give you a clear estimate up front.",
  },
];

/**
 * Navigation — now route-based (multi-page).
 */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];
