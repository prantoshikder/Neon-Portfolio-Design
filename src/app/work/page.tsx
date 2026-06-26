import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGrid from "@/components/ProjectGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Work — Pranto Shikder",
  description:
    "Selected frontend projects and case studies — SaaS dashboards, e-commerce, design systems and more.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work & case studies"
        description="Each project below opens into a full case study — the problem, my approach and the results. Click any card to dive in."
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <ProjectGrid />
      </section>

      <CtaBand title="Want to be my next case study?" />
    </>
  );
}
