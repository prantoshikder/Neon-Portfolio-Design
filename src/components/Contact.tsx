"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin, Twitter } from "./ui/BrandIcons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — wire this up to your email service / API route.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-5 pt-36 pb-16 sm:pt-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12"
      >
        <div className="bg-violet/20 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
        <div className="bg-cyan/20 absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2">
          {/* Left — invitation */}
          <div className="flex flex-col justify-center">
            <span className="text-cyan inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase">
              <span className="bg-cyan h-1.5 w-1.5 rounded-full shadow-[0_0_10px_2px_var(--color-cyan)]" />
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great</span> together
            </h2>
            <p className="text-muted mt-4 text-pretty">
              Have a project in mind or just want to say hi? My inbox is always
              open — I&apos;ll get back to you within a day.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="text-text hover:text-cyan inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors"
              >
                <Mail size={17} className="text-cyan" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-text hover:text-cyan inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors"
              >
                <Phone size={17} className="text-cyan" />
                {profile.phone}
              </a>
              <span className="text-text inline-flex w-fit items-center gap-2 text-sm font-medium">
                <MapPin size={17} className="text-violet" />
                {profile.location}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { href: profile.socials.github, Icon: Github, label: "github" },
                {
                  href: profile.socials.linkedin,
                  Icon: Linkedin,
                  label: "linkedin",
                },
                {
                  href: profile.socials.twitter,
                  Icon: Twitter,
                  label: "twitter",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:border-cyan/40 hover:text-cyan grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@email.com"
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              placeholder="Project inquiry"
            />
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-muted text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="text-text placeholder:text-muted/50 focus:border-cyan/50 resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-colors outline-none focus:bg-white/[0.06]"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group from-cyan to-violet text-bg mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_30px_-6px_var(--color-violet)] transition-transform hover:scale-[1.02] disabled:opacity-80"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={17} /> Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-muted text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="text-text placeholder:text-muted/50 focus:border-cyan/50 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-colors outline-none focus:bg-white/[0.06]"
      />
    </div>
  );
}
