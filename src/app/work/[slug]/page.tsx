import CtaBand from "@/components/CtaBand";
import { Github } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Check,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const gradients: Record<string, string> = {
  "gradient-1": "from-cyan/40 via-blue/25 to-violet/40",
  "gradient-2": "from-violet/40 via-pink/25 to-cyan/40",
  "gradient-3": "from-pink/40 via-violet/25 to-blue/40",
  "gradient-4": "from-blue/40 via-cyan/25 to-violet/40",
  "gradient-5": "from-emerald-400/40 via-cyan/25 to-blue/40",
  "gradient-6": "from-amber-400/35 via-pink/25 to-violet/40",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];

  const newLocal =
    "from-cyan to-violet text-bg inline-flex items-center gap-1.5 rounded-xl bg-linear-to-r px-4 py-2 text-sm font-semibold transition-transform hover:scale-105";
  return (
    <>
      <article className="px-5 pt-36 pb-12 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb / back */}
          <Reveal>
            <Link
              href="/work"
              className="text-muted hover:text-cyan inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft size={15} /> Back to all work
            </Link>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-cyan rounded-md border border-white/10 bg-white/4 px-2.5 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted mt-3 text-lg text-pretty">
              {project.tagline}
            </p>
          </Reveal>

          {/* Meta + actions */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-white/5 py-5">
              <Meta icon={Calendar} label="Year" value={project.year} />
              <Meta icon={User} label="Role" value={project.role} />
              <Meta icon={Briefcase} label="Client" value={project.client} />
              <div className="ml-auto flex items-center gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={newLocal}
                >
                  Live Site <ArrowUpRight size={15} />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Source code"
                  className="text-muted hover:text-cyan grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors"
                >
                  <Github size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero visual */}
        <Reveal delay={0.15} className="mx-auto mt-10 max-w-5xl">
          <div
            className={`relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br ${
              gradients[project.image] ?? gradients["gradient-1"]
            }`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[40px_40px] opacity-25" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-mono text-4xl font-bold text-white/80 drop-shadow-lg sm:text-5xl">
                {project.title}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mx-auto mt-16 max-w-4xl">
          {/* Results */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="glass glow-border rounded-2xl p-6 text-center"
                >
                  <div className="from-cyan to-violet bg-linear-to-br bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {r.value}
                  </div>
                  <div className="text-muted mt-1 text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Narrative */}
          <div className="mt-14 space-y-12">
            <Block title="Overview" text={project.overview} />
            <Block title="The Challenge" text={project.problem} />
            <Block title="My Solution" text={project.solution} />

            {/* Features */}
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight">
                Key <span className="text-gradient">features</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="glass text-text/90 flex items-start gap-3 rounded-xl p-4 text-sm leading-relaxed"
                  >
                    <span className="from-cyan to-violet text-bg mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-linear-to-br">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Tech stack */}
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight">
                Tech <span className="text-gradient">stack</span>
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-text/90 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 font-mono text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Next project */}
          <Reveal className="mt-16">
            <Link
              href={`/work/${next.slug}`}
              className="glass glow-border group flex items-center justify-between gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="text-muted text-sm">Next project</span>
                <h3 className="text-text group-hover:text-cyan mt-1 text-xl font-semibold transition-colors">
                  {next.title}
                </h3>
              </div>
              <ArrowRight
                size={22}
                className="text-cyan shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </article>

      <CtaBand />
    </>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon size={17} className="text-violet" />
      <div>
        <div className="text-muted text-xs tracking-wider uppercase">
          {label}
        </div>
        <div className="text-text text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted mt-4 text-base leading-relaxed text-pretty md:text-lg">
        {text}
      </p>
    </Reveal>
  );
}
