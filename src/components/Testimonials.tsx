"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass relative flex flex-col rounded-2xl p-6"
        >
          <Quote
            size={32}
            className="fill-violet/20 text-violet/40 mb-4"
            strokeWidth={1}
          />
          <blockquote className="text-text/90 flex-1 text-sm leading-relaxed">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-5 border-t border-white/5 pt-4">
            <div className="text-text font-semibold">{t.name}</div>
            <div className="text-muted text-sm">{t.title}</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
