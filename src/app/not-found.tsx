import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-5 py-32 text-center">
      <div>
        <p className="from-cyan to-violet bg-linear-to-br bg-clip-text font-mono text-8xl font-bold text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="text-muted mx-auto mt-3 max-w-md text-pretty">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="from-cyan to-violet text-bg inline-flex items-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
          >
            <Home size={16} /> Back home
          </Link>
          <Link
            href="/work"
            className="text-text inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            <ArrowLeft size={16} /> See my work
          </Link>
        </div>
      </div>
    </section>
  );
}
