import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import type { Service } from "@/types/portfolio";

const iconMap = {
  strategy: BriefcaseBusiness,
  palette: Palette,
  monitor: LayoutDashboard,
  mobile: MonitorSmartphone,
  brand: Sparkles,
  motion: WandSparkles,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-surface px-6 py-8 transition-colors duration-300 hover:border-accent/50 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
    </motion.article>
  );
}
