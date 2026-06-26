import { navLinks, profile } from "@/data/portfolio";
import { Code2, Heart, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Dribbble, Github, Linkedin, Twitter } from "./ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 pt-14 pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="flex w-fit items-center gap-2 font-mono font-bold"
          >
            <span className="from-cyan to-violet text-bg grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br">
              <Code2 size={17} strokeWidth={2.5} />
            </span>
            {profile.name.split(" ")[0]}
            <span className="text-cyan">.dev</span>
          </Link>
          <p className="text-muted mt-4 max-w-sm text-sm leading-relaxed">
            {profile.tagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
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
              {
                href: profile.socials.dribbble,
                Icon: Dribbble,
                label: "dribbble",
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

        {/* Nav */}
        <div>
          <h3 className="text-text mb-4 text-sm font-semibold tracking-wider uppercase">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted hover:text-cyan text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-text mb-4 text-sm font-semibold tracking-wider uppercase">
            Get in touch
          </h3>
          <ul className="text-muted flex flex-col gap-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-cyan inline-flex items-center gap-2 transition-colors"
              >
                <Mail size={15} className="text-cyan" />
                {profile.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-violet" />
              {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="text-muted mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-1.5">
          Built with <Heart size={13} className="fill-pink text-pink" /> using
          Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
