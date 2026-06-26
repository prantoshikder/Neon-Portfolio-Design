import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBand from "@/components/CtaBand";
import { process } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services — Pranto Shikder",
  description:
    "Frontend development services: web apps, UI/UX engineering, motion, performance, responsive design and accessibility.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Do"
        title="Services built to make your product shine"
        description="From the first wireframe to the final deployed pixel — here's exactly how I can help, and what you get."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Detailed services */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <ServicesGrid detailed />
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="How I Work"
          title="A simple, transparent process"
          subtitle="No surprises. You'll always know what's happening and what comes next."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="glass glow-border relative h-full overflow-hidden rounded-2xl p-6">
                <span className="absolute -top-4 -right-2 bg-gradient-to-br from-white/10 to-transparent bg-clip-text font-mono text-7xl font-bold text-transparent">
                  {step.step}
                </span>
                <div className="relative">
                  <span className="text-cyan font-mono text-sm font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-text mt-2 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to get started?" />
    </>
  );
}
