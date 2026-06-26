"use client";

import { skills } from "@/data/portfolio";
import { motion } from "motion/react";

export default function SkillsBars() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: gi * 0.08 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-muted mb-5 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
            <span className="from-cyan to-violet h-2 w-2 rounded-full bg-linear-to-r" />
            {group.category}
          </h3>

          <div className="flex flex-col gap-4">
            {group.items.map((item) => (
              <div key={item.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-text font-medium">{item.name}</span>
                  <span className="text-muted font-mono text-xs">
                    {item.level}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/6">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="from-cyan to-violet h-full rounded-full bg-linear-to-r shadow-[0_0_12px_-2px_var(--color-violet)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
