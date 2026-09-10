import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const images = project.images.length > 0 ? project.images : [project.thumbnail];
  const [index, setIndex] = useState(0);
  const current = images[index] ?? project.thumbnail;

  const goTo = (next: number) => {
    const total = images.length;
    setIndex(((next % total) + total) % total);
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <button
          type="button"
          onClick={onOpen}
          className="h-full w-full"
          aria-label={`Lihat mockup ${project.title}`}
        >
          <img
            src={current}
            alt={`${project.title} mockup ${index + 1}`}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Mockup sebelumnya"
              onClick={(event) => {
                event.stopPropagation();
                goTo(index - 1);
              }}
              className="absolute left-3 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow-md transition group-hover:opacity-100"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Mockup berikutnya"
              onClick={(event) => {
                event.stopPropagation();
                goTo(index + 1);
              }}
              className="absolute right-3 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow-md transition group-hover:opacity-100"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((src, imageIndex) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Tampilkan mockup ${imageIndex + 1}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIndex(imageIndex);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    imageIndex === index ? "w-5 bg-accent" : "w-1.5 bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500">{project.category}</p>
          {project.demoUrl && project.demoUrl !== "#" ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs font-semibold text-accent hover:underline"
            >
              {project.demoLabel ?? "Lihat aplikasi"}
            </a>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${project.title}`}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110"
        >
          <ArrowUpRight className="size-5" />
        </button>
      </div>
    </motion.article>
  );
}
