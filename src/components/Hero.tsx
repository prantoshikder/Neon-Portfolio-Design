"use client";

import { profile } from "@/data/portfolio";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dribbble, Github, Linkedin, Twitter } from "./ui/BrandIcons";

/** Lightweight typewriter effect cycling through the roles. */
function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const socialIcons = [
  { key: "github", Icon: Github },
  { key: "linkedin", Icon: Linkedin },
  { key: "twitter", Icon: Twitter },
  { key: "dribbble", Icon: Dribbble },
] as const;

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-16"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left — copy */}
        <div className="flex flex-col items-start gap-6">
          {profile.availableForWork && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient glow-text">
              {profile.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-text">I build </span>
            <span className="text-gradient">{typed}</span>
            <span className="animate-blink text-cyan font-light">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-muted max-w-xl text-base text-pretty sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-muted flex items-center gap-2 text-sm"
          >
            <MapPin size={15} className="text-violet" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/work"
              className="group from-cyan to-violet text-bg inline-flex items-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_30px_-6px_var(--color-violet)] transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={profile.resumeUrl}
              className="text-text inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center gap-3 pt-1"
          >
            {socialIcons.map(({ key, Icon }) => (
              <a
                key={key}
                href={profile.socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="text-muted hover:border-cyan/40 hover:text-cyan grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — animated avatar / code orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm md:block"
        >
          <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--color-cyan),var(--color-violet),var(--color-pink),var(--color-cyan))] opacity-60 blur-2xl" />
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div className="animate-spin-slow absolute inset-3 rounded-full border border-dashed border-white/10 [animation-direction:reverse] [animation-duration:18s]" />

          <div className="glass absolute inset-10 grid place-items-center rounded-full">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-center font-mono"
            >
              <div className="from-cyan to-violet bg-linear-to-br bg-clip-text text-6xl font-bold text-transparent">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-muted mt-2 text-xs">&lt;/frontend&gt;</div>
            </motion.div>
          </div>

          {/* Floating tech badges */}
          {[
            { label: "React", className: "left-0 top-10", delay: 0 },
            { label: "Next.js", className: "right-0 top-24", delay: 0.6 },
            { label: "TS", className: "bottom-12 left-4", delay: 1.2 },
            { label: "Motion", className: "bottom-2 right-8", delay: 1.8 },
          ].map((badge) => (
            <motion.span
              key={badge.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              }}
              className={`glass absolute ${badge.className} text-text rounded-full px-3 py-1.5 font-mono text-xs font-semibold`}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="bg-cyan h-1.5 w-1.5 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
