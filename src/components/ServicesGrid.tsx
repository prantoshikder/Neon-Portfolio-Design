"use client";

import { motion } from "motion/react";
import {
  Layout,
  Palette,
  Sparkles,
  Gauge,
  Smartphone,
  Accessibility,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services as allServices } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Palette,
  Sparkles,
  Gauge,
  Smartphone,
  Accessibility,
};

type Props = {
  /** Limit how many to show (e.g. 3 on the home page). */
  limit?: number;
  /** Show the deliverables checklist (Services page). */
  detailed?: boolean;
};

export default function ServicesGrid({ limit, detailed = false }: Props) {
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] ?? Layout;
        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="from-cyan/20 to-violet/20 absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="text-cyan group-hover:text-violet mb-5 inline-grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_-4px_var(--color-violet)]">
              <Icon size={22} strokeWidth={2} />
            </div>

            <h3 className="text-text mb-2 text-lg font-semibold">
              {service.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {service.description}
            </p>

            {detailed && (
              <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-muted flex items-center gap-2 text-sm"
                  >
                    <Check size={15} className="text-cyan shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
