import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/types/portfolio";

export function Projects() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const pages = [projects];

  return (
    <section id="projects" className="bg-surface-alt/40 py-20 md:py-28">
      <Container>
        <FadeIn className="mb-12 text-center">
          <SectionLabel>My Work</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Recent Project
          </h2>
        </FadeIn>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-7 md:grid-cols-2">
          {pages[page]?.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <ProjectCard
                project={project}
                onOpen={() => setSelected(project)}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to projects page ${index + 1}`}
              onClick={() => setPage(index)}
              className={`h-2.5 rounded-full transition-all ${
                page === index
                  ? "w-6 bg-accent"
                  : "w-2.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
