import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Vertical line */}
      <div className="from-cyan via-violet absolute top-2 left-0 h-full w-px bg-gradient-to-b to-transparent" />

      <div className="flex flex-col gap-10">
        {experience.map((item, i) => (
          <Reveal key={item.role + item.company} delay={i * 0.1}>
            <div className="relative">
              {/* Dot */}
              <span className="bg-bg absolute top-1.5 -left-[2.35rem] grid h-4 w-4 place-items-center rounded-full sm:-left-[2.85rem]">
                <span className="from-cyan to-violet h-2.5 w-2.5 rounded-full bg-gradient-to-br shadow-[0_0_12px_2px_var(--color-violet)]" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-text text-lg font-semibold">
                    {item.role}
                  </h3>
                  <span className="text-cyan rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs">
                    {item.period}
                  </span>
                </div>
                <p className="text-violet mt-1 text-sm font-medium">
                  {item.company}
                </p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((a) => (
                    <li
                      key={a}
                      className="text-muted flex items-start gap-2 text-sm"
                    >
                      <Check size={15} className="text-cyan mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
