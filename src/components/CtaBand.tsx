import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function CtaBand({
  title = "Have a project in mind?",
  subtitle = "Let's build something fast, beautiful and user-friendly together.",
}: Props) {
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto max-w-5xl">
        <div className="glass glow-border relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="bg-cyan/20 pointer-events-none absolute -top-16 -left-16 h-52 w-52 rounded-full blur-3xl" />
          <div className="bg-violet/20 pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full blur-3xl" />

          <h2 className="relative text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted relative mx-auto mt-4 max-w-xl text-pretty">
            {subtitle}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group from-cyan to-violet text-bg inline-flex items-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_30px_-6px_var(--color-violet)] transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/work"
              className="text-text inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              See My Work
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
