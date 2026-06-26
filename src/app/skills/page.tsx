import type { Metadata } from "next";
import { Rocket } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SkillsBars from "@/components/SkillsBars";
import TechStack from "@/components/TechStack";
import CtaBand from "@/components/CtaBand";
import { learning } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Skills — Pranto Shikder",
  description:
    "My frontend tech stack: React, Next.js, TypeScript, Tailwind CSS, Motion and the tools I build with every day.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tech Stack"
        title="The tools I build with"
        description="A transparent look at my toolkit and how comfortable I am with each piece of it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Skills" }]}
      />

      {/* Proficiency bars */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SkillsBars />
      </section>

      {/* Core technologies */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeading
          eyebrow="Core Stack"
          title="Languages & technologies"
          subtitle="The languages, frameworks and tools I reach for most when shipping products."
        />
        <div className="mt-12">
          <TechStack />
        </div>
      </section>

      {/* Currently learning */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Always Growing"
          title="Currently exploring"
          subtitle="The web never stands still, and neither do I. Here's what's on my learning bench right now."
        />
        <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
          {learning.map((item) => (
            <span
              key={item}
              className="glass text-text inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-1"
            >
              <Rocket size={16} className="text-violet" />
              {item}
            </span>
          ))}
        </Reveal>
      </section>

      <CtaBand title="Need this stack on your team?" />
    </>
  );
}
