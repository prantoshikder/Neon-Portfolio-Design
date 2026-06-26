import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Stats from "@/components/Stats";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectGrid from "@/components/ProjectGrid";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

function ViewAll({ href, label }: { href: string; label: string }) {
  return (
    <Reveal className="mt-10 flex justify-center">
      <Link
        href={href}
        className="group text-text inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
      >
        {label}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechTicker />

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Stats />
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer"
          subtitle="From the first wireframe to the final deployed pixel — here's how I can help bring your product to life."
        />
        <div className="mt-14">
          <ServicesGrid limit={3} />
        </div>
        <ViewAll href="/services" label="Explore all services" />
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="A selection of work that shows how I think about UI, motion and performance."
        />
        <div className="mt-14">
          <ProjectGrid featuredOnly />
        </div>
        <ViewAll href="/work" label="View all projects" />
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="Kind Words"
          title="What clients say"
          subtitle="I care about the people I work with as much as the products we ship."
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
