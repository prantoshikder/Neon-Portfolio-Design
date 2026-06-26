import CtaBand from "@/components/CtaBand";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, profile } from "@/data/portfolio";
import {
  Accessibility,
  Gauge,
  GraduationCap,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Pranto Shikder",
  description: profile.bio[0],
};

const valueIcons: Record<string, LucideIcon> = {
  Target,
  Gauge,
  Accessibility,
  Sparkles,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Turning complex problems into simple, beautiful interfaces"
        description="A little more about who I am, what I believe in, and the road that got me here."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Bio + portrait */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-start">
          <Reveal className="text-muted space-y-5 text-base leading-relaxed text-pretty md:text-lg">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass glow-border relative aspect-square overflow-hidden rounded-3xl">
              <div className="from-cyan/20 via-violet/10 to-pink/20 absolute inset-0 bg-linear-to-br" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[32px_32px] opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="from-cyan to-violet bg-linear-to-br bg-clip-text font-mono text-7xl font-bold text-transparent">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <p className="text-text/70 mt-3 font-mono text-sm">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <Stats />
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="My Principles"
          title="What I value"
          subtitle="The ideas that guide every project I take on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.values.map((value, i) => {
            const Icon = valueIcons[value.icon] ?? Sparkles;
            return (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="glass glow-border h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="text-cyan mb-4 inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-linear-to-br from-white/10 to-white/0">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-text mb-1.5 font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Journey" title="Experience" align="left" />
        <div className="mt-12">
          <Experience />
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Background" title="Education" align="left" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="text-violet mb-4 inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-linear-to-br from-white/10 to-white/0">
                  <GraduationCap size={20} />
                </div>
                <span className="text-cyan font-mono text-xs">
                  {edu.period}
                </span>
                <h3 className="text-text mt-1 font-semibold">{edu.degree}</h3>
                <p className="text-violet text-sm font-medium">{edu.school}</p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Things I enjoy"
          align="left"
        />
        <Reveal className="mt-10 flex flex-wrap gap-3">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="text-text/90 hover:border-cyan/40 hover:text-cyan rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm transition-all hover:-translate-y-0.5"
            >
              {interest}
            </span>
          ))}
        </Reveal>
      </section>

      <CtaBand title="Like the way I think?" />
    </>
  );
}
