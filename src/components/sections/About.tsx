import { profile, statistics } from "@/data/portfolio";
import { useContact } from "@/context/ContactContext";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatCard } from "@/components/ui/StatCard";

export function About() {
  const { openContact } = useContact();

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -right-10 top-24 size-40 rounded-full border border-dashed border-accent/30" />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="ring-dashed absolute -bottom-8 -left-8 size-40 sm:size-48" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <img
              src={profile.aboutImage}
              alt={`${profile.fullName} about portrait`}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            I Am Available For{" "}
            <span className="text-accent">{profile.aboutHighlight}</span> Project
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {profile.aboutDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={openContact} withArrow size="lg">
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
