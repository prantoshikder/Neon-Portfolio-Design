import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={`flex flex-col gap-3 ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      }`}
    >
      <span className="text-cyan inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase">
        <span className="bg-cyan h-1.5 w-1.5 rounded-full shadow-[0_0_10px_2px_var(--color-cyan)]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl text-base text-pretty md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
