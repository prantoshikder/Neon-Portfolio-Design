import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {profile.stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="glass glow-border rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
            <div className="from-cyan to-violet bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent">
              {stat.value}
            </div>
            <div className="text-muted mt-1 text-sm">{stat.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
