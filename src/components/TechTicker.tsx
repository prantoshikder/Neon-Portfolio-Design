const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "GraphQL",
  "Figma",
  "Vite",
  "Storybook",
  "Accessibility",
  "Web Vitals",
];

export default function TechTicker() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-5">
      <div className="from-bg pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r to-transparent" />
      <div className="from-bg pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l to-transparent" />
      <div className="animate-marquee flex w-max gap-10 pr-10">
        {[...TECH, ...TECH].map((tech, i) => (
          <span
            key={i}
            className="text-muted/70 flex shrink-0 items-center gap-3 font-mono text-lg font-medium"
          >
            <span className="from-cyan to-violet h-1.5 w-1.5 rounded-full bg-linear-to-r" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
