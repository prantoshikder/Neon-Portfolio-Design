import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: Props) {
  return (
    <header className="relative overflow-hidden px-5 pt-36 pb-12 sm:pt-40">
      {/* Glow behind heading */}
      <div className="bg-violet/15 pointer-events-none absolute top-20 left-1/2 -z-10 h-64 w-2xl max-w-full -translate-x-1/2 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {crumbs && (
          <Reveal className="text-muted mb-5 flex items-center gap-1.5 text-sm">
            {crumbs.map((c, i) => (
              <span key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-muted/50" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-cyan transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-text">{c.label}</span>
                )}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal>
          <span className="text-cyan inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase">
            <span className="bg-cyan h-1.5 w-1.5 rounded-full shadow-[0_0_10px_2px_var(--color-cyan)]" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.1}>
            <p className="text-muted mt-5 max-w-2xl text-base text-pretty md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
