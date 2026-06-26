"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Brand logos — inline SVGs so they stay crisp and need no network request.  */
/*  Each is drawn on a 24×24 grid and inherits its own brand color.            */
/* -------------------------------------------------------------------------- */

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#fff"
        d="M13.1 13.4v-1.6H6.6v1.6h2.3V20h1.9v-6.6h2.3Zm.7 6.2c.3.2.7.3 1.1.4.4.1.9.2 1.4.2.5 0 .9-.05 1.3-.15.4-.1.75-.25 1.05-.46.3-.2.53-.47.7-.8.17-.32.25-.7.25-1.16 0-.33-.05-.62-.15-.86a2 2 0 0 0-.44-.66 3.2 3.2 0 0 0-.7-.52c-.27-.15-.58-.3-.92-.43a9 9 0 0 1-.67-.28 3 3 0 0 1-.5-.28 1.1 1.1 0 0 1-.3-.3.65.65 0 0 1-.1-.36c0-.13.03-.24.1-.34.07-.1.16-.19.28-.26a1.6 1.6 0 0 1 .46-.17 2.8 2.8 0 0 1 1.32.05c.23.06.45.14.67.25.22.1.42.24.6.4v-1.8a4.5 4.5 0 0 0-.9-.27 6.4 6.4 0 0 0-1.28-.1c-.47 0-.9.05-1.3.16-.4.1-.74.27-1.04.48-.3.22-.53.49-.7.82-.17.32-.25.7-.25 1.14 0 .55.16 1.02.48 1.4.32.4.8.72 1.45 1 .27.1.52.21.75.32.23.1.43.21.6.33.17.11.3.24.4.37.1.14.14.3.14.47 0 .12-.03.23-.09.33a.8.8 0 0 1-.27.27c-.12.07-.27.13-.45.17a3 3 0 0 1-1.55-.06 4 4 0 0 1-.8-.32 4 4 0 0 1-.72-.5v1.94Z"
      />
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        fill="#000"
        d="M11.9 18.3c-.5 0-.95-.13-1.34-.4a2.7 2.7 0 0 1-.9-1.07l1.46-.85c.1.22.22.4.38.54.16.13.36.2.6.2.27 0 .47-.07.6-.2.14-.13.2-.34.2-.62V11h1.78v5.13c0 .72-.22 1.27-.66 1.65-.43.35-1.02.52-1.76.52Zm-4.9-.02c-.6 0-1.1-.13-1.5-.4a2.7 2.7 0 0 1-.9-1.1l1.4-.81c.13.24.27.42.43.55.16.13.36.2.6.2.22 0 .4-.05.52-.15a.5.5 0 0 0 .2-.42c0-.2-.08-.36-.24-.48-.16-.13-.46-.28-.9-.46a5 5 0 0 1-1.4-.78c-.36-.32-.55-.76-.55-1.32 0-.5.18-.93.55-1.27.37-.34.86-.51 1.48-.51.5 0 .93.1 1.28.32.35.21.62.5.8.88l-1.34.8a1.3 1.3 0 0 0-.34-.4.7.7 0 0 0-.42-.13c-.16 0-.3.04-.4.13a.42.42 0 0 0-.16.34c0 .16.07.3.2.4.14.12.42.27.85.45.66.27 1.15.56 1.46.87.32.31.48.74.48 1.3 0 .58-.2 1.04-.6 1.39-.4.34-.96.51-1.66.51Z"
      />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <g
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        transform="translate(12 12)"
      >
        <ellipse rx="10" ry="3.85" />
        <ellipse rx="10" ry="3.85" transform="rotate(60)" />
        <ellipse rx="10" ry="3.85" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path
        fill="#fff"
        d="M9.2 7.3h1.2l6.3 8.7-1.3 1L9.2 9.4V16H8V7.3h1.2Zm6 0H16v5.2l-1-1.4V7.3Z"
      />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path fill="#539E43" d="M12 1.6 21 6.8v10.4L12 22.4 3 17.2V6.8L12 1.6Z" />
      <path
        fill="#fff"
        d="M12 17.6c-.2 0-.4-.05-.55-.14l-1.75-1.04c-.26-.15-.13-.2-.05-.23.35-.12.42-.15.8-.36.04-.02.1-.01.13.01l1.34.8c.05.03.12.03.16 0l5.25-3.03c.05-.03.08-.08.08-.14V7.4c0-.06-.03-.11-.08-.14l-5.25-3.03a.16.16 0 0 0-.16 0L6.67 7.26a.16.16 0 0 0-.08.14v6.06c0 .06.03.11.08.13l1.44.83c.78.4 1.26-.07 1.26-.53V7.83c0-.08.07-.15.15-.15h.67c.08 0 .15.07.15.15v5.99c0 1.04-.57 1.64-1.56 1.64-.3 0-.54 0-1.21-.33l-1.38-.79a1.11 1.11 0 0 1-.55-.96V7.4c0-.4.21-.76.55-.96l5.25-3.04a1.15 1.15 0 0 1 1.11 0l5.25 3.04c.34.2.55.56.55.96v6.06c0 .4-.21.76-.55.96l-5.25 3.04a1.1 1.1 0 0 1-.56.14Z"
      />
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="#387EB8"
        d="M11.9 2c-1.3 0-2.5.1-3.5.3-3 .5-3.5 1.6-3.5 3.6v2.6h7v.9H4.2c-2 0-3.8 1.2-4.3 3.5-.6 2.6-.7 4.2 0 7 .5 2 1.6 3.5 3.6 3.5h1.7v-3.2c0-2.3 2-4.3 4.3-4.3h4.2c1.9 0 3.5-1.6 3.5-3.5V5.9c0-1.9-1.6-3.3-3.5-3.6-1.2-.2-2.4-.3-3.6-.3ZM8.1 4.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1-1.1 1-.6 0-1-.4-1-1 0-.6.4-1.1 1-1.1Z"
      />
      <path
        fill="#FFC331"
        d="M12.1 22c1.3 0 2.5-.1 3.5-.3 3-.5 3.5-1.6 3.5-3.6v-2.6h-7v-.9h7.6c2 0 3.8-1.2 4.3-3.5.6-2.6.7-4.2 0-7-.5-2-1.6-3.5-3.6-3.5h-1.7v3.2c0 2.3-2 4.3-4.3 4.3H9.8c-1.9 0-3.5 1.6-3.5 3.5v4.8c0 1.9 1.6 3.3 3.5 3.6 1.2.2 2.4.3 3.6.3-.7 0-.6 0-1.3 0Zm3.8-2.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .6-.4 1.1-1 1.1Z"
      />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="#38BDF8"
        d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.75.18 1.28.73 1.87 1.33C13.3 10.8 14.4 12 17 12c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.75-.18-1.28-.73-1.87-1.33C15.7 7.2 14.6 6 12 6ZM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.75.18 1.28.73 1.87 1.33C8.3 16.8 9.4 18 12 18c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.75-.18-1.28-.73-1.87-1.33C10.7 13.2 9.6 12 7 12Z"
      />
    </svg>
  );
}

function GraphQLLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <g stroke="#E535AB" strokeWidth="1" fill="none">
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" />
        <path d="M12 3 4 16.5h16L12 3Zm0 0L4 7.5l8 13 8-13L12 3Z" />
      </g>
      <g fill="#E535AB">
        <circle cx="12" cy="3" r="1.4" />
        <circle cx="20" cy="7.5" r="1.4" />
        <circle cx="20" cy="16.5" r="1.4" />
        <circle cx="12" cy="21" r="1.4" />
        <circle cx="4" cy="16.5" r="1.4" />
        <circle cx="4" cy="7.5" r="1.4" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */

type Tech = {
  name: string;
  tag: string;
  /** brand color used for the hover glow + accent ring */
  color: string;
  logo: ReactNode;
};

const TECH: Tech[] = [
  {
    name: "TypeScript",
    tag: "Language",
    color: "#3178C6",
    logo: <TypeScriptLogo />,
  },
  {
    name: "JavaScript",
    tag: "Language",
    color: "#F7DF1E",
    logo: <JavaScriptLogo />,
  },
  { name: "Python", tag: "Language", color: "#FFC331", logo: <PythonLogo /> },
  { name: "React", tag: "Library", color: "#61DAFB", logo: <ReactLogo /> },
  { name: "Next.js", tag: "Framework", color: "#ffffff", logo: <NextLogo /> },
  { name: "Node.js", tag: "Runtime", color: "#539E43", logo: <NodeLogo /> },
  {
    name: "Tailwind CSS",
    tag: "Styling",
    color: "#38BDF8",
    logo: <TailwindLogo />,
  },
  { name: "GraphQL", tag: "API", color: "#E535AB", logo: <GraphQLLogo /> },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {TECH.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          whileHover={{ y: -6 }}
          style={{ "--brand": tech.color } as React.CSSProperties}
          className="group glass relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-6 text-center transition-colors duration-300 hover:border-(--brand)/40"
        >
          {/* brand-colored glow that fades in on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
            style={{ background: tech.color }}
          />

          <span className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_16px_var(--brand)]">
            {tech.logo}
          </span>

          <div className="relative">
            <p className="text-text font-semibold">{tech.name}</p>
            <p className="text-muted mt-0.5 font-mono text-xs tracking-wide">
              {tech.tag}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
