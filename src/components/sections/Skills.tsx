import {
  Code2,
  Database,
  FileCode2,
  Flame,
  Lightbulb,
  MessageCircle,
  Paintbrush,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skillItems } from "@/data/portfolio";
import type { SkillItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const skillIcons: Record<SkillItem["icon"], LucideIcon> = {
  html: FileCode2,
  css: Paintbrush,
  php: Code2,
  mysql: Database,
  flutter: Smartphone,
  firebase: Flame,
  teamwork: Users,
  communication: MessageCircle,
  problemSolving: Lightbulb,
};

const skillColors: Record<SkillItem["icon"], string> = {
  html: "#E34F26",
  css: "#1572B6",
  php: "#777BB4",
  mysql: "#4479A1",
  flutter: "#02569B",
  firebase: "#FFCA28",
  teamwork: "#22C55E",
  communication: "#38BDF8",
  problemSolving: "#F59E0B",
};

function SkillChip({ skill }: { skill: SkillItem }) {
  const Icon = skillIcons[skill.icon];
  const color = skillColors[skill.icon];

  return (
    <div
      className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-background/50 px-4 py-2 text-white/80"
      title={skill.name}
    >
      <span
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}22` }}
      >
        <Icon className="size-4" style={{ color }} aria-hidden />
      </span>
      <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export function Skills() {
  const track = [...skillItems, ...skillItems];

  return (
    <section aria-label="Skills" className="py-8 md:py-10">
      <Container>
        <FadeIn>
          <div className="skills-marquee overflow-hidden rounded-2xl border border-white/10 bg-surface-alt/90 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-3xl sm:py-6">
            <div className="skills-marquee-track flex w-max items-center gap-4 px-4 sm:gap-6 sm:px-6">
              {track.map((skill, index) => (
                <SkillChip
                  key={`${skill.id}-${index}`}
                  skill={skill}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
