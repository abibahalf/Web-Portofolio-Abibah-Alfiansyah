import { education, experiences } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="bg-surface-alt/40 py-20 md:py-28">
      <Container>
        <FadeIn className="mb-12 text-center">
          <SectionLabel>Resume</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Pengalaman & <span className="text-accent">Pendidikan</span>
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.06}>
                <article className="relative rounded-2xl border border-white/10 bg-surface px-6 py-6 pl-8">
                  <span className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-accent" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-white/70">
                    {item.role} · {item.company}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                    >
                      {item.urlLabel ?? "Lihat aplikasi"}
                    </a>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <FadeIn key={item.id} delay={0.1 + index * 0.08}>
                <article className="rounded-2xl border border-white/10 bg-surface px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.school}</h3>
                  <p className="mt-1 text-sm text-white/70">{item.program}</p>
                  {item.detail ? (
                    <p className="mt-3 text-sm font-semibold text-muted">{item.detail}</p>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
