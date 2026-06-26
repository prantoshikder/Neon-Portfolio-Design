import type { Metadata } from "next";
import Contact from "@/components/Contact";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact — Pranto Shikder",
  description:
    "Let's work together. Get in touch about a project, collaboration or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="A few things people usually want to know before reaching out."
        />
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.06}>
              <details className="glass group rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="text-text flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {faq.q}
                  <span className="text-cyan grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
