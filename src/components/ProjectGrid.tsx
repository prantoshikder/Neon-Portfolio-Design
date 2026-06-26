"use client";

import { projects as allProjects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const gradients: Record<string, string> = {
  "gradient-1": "from-cyan/30 via-blue/20 to-violet/30",
  "gradient-2": "from-violet/30 via-pink/20 to-cyan/30",
  "gradient-3": "from-pink/30 via-violet/20 to-blue/30",
  "gradient-4": "from-blue/30 via-cyan/20 to-violet/30",
  "gradient-5": "from-emerald-400/30 via-cyan/20 to-blue/30",
  "gradient-6": "from-amber-400/25 via-pink/20 to-violet/30",
};

type Props = {
  /** Only show featured projects (home page preview). */
  featuredOnly?: boolean;
};

export default function ProjectGrid({ featuredOnly = false }: Props) {
  const projects = featuredOnly
    ? allProjects.filter((p) => p.featured)
    : allProjects;

  return (
    <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {projects.map((project, i) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
          className={`glass glow-border group relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 ${
            project.featured ? "lg:col-span-3" : "lg:col-span-2"
          }`}
        >
          <Link
            href={`/work/${project.slug}`}
            className="flex flex-1 flex-col"
            aria-label={`View case study: ${project.title}`}
          >
            {/* Visual */}
            <div
              className={`relative aspect-16/10 overflow-hidden bg-linear-to-br ${
                gradients[project.image] ?? gradients["gradient-1"]
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[28px_28px] opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-mono text-2xl font-bold text-white/80 drop-shadow-lg">
                  {project.title.split(" ")[0]}
                </span>
              </div>

              <span className="bg-bg/50 absolute top-3 left-3 rounded-md px-2 py-1 font-mono text-xs text-white/80 backdrop-blur-sm">
                {project.year}
              </span>

              {/* Hover overlay */}
              <div className="bg-bg/40 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-bg inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold">
                  View Case Study <ArrowUpRight size={15} />
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-text group-hover:text-cyan text-lg font-semibold transition-colors">
                {project.title}
              </h3>
              <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-muted rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
