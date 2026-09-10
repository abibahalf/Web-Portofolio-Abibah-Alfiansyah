import type { Statistic } from "@/types/portfolio";

type StatCardProps = {
  stat: Statistic;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-background/70 px-4 py-5 text-center transition-colors duration-300 hover:border-accent/40 sm:px-5">
      <p className="text-2xl font-bold text-foreground md:text-3xl">
        {stat.value}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
        {stat.label}
      </p>
    </article>
  );
}
