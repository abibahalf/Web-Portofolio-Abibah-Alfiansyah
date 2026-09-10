import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/types/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const images = project
    ? project.images.length > 0
      ? project.images
      : [project.thumbnail]
    : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, images.length, onClose]);

  const current = images[index];

  return (
    <AnimatePresence>
      {project && current ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close project modal backdrop"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Mockup ${project.title}`}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-surface p-4 shadow-2xl sm:p-6"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-white/70 transition hover:border-accent hover:text-accent"
            >
              <X className="size-4" />
            </button>

            <div className="relative flex items-center justify-center px-10 sm:px-14">
              <img
                src={current}
                alt={`${project.title} mockup ${index + 1}`}
                className="max-h-[48vh] w-auto max-w-full object-contain sm:max-h-[56vh]"
              />

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Mockup sebelumnya"
                    onClick={() =>
                      setIndex(
                        (currentIndex) =>
                          (currentIndex - 1 + images.length) % images.length,
                      )
                    }
                    className="absolute left-0 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:border-accent hover:text-accent"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Mockup berikutnya"
                    onClick={() =>
                      setIndex((currentIndex) => (currentIndex + 1) % images.length)
                    }
                    className="absolute right-0 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:border-accent hover:text-accent"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              ) : null}
            </div>

            {images.length > 1 ? (
              <div className="mt-4 flex justify-center gap-2">
                {images.map((src, imageIndex) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(imageIndex)}
                    aria-label={`Pilih mockup ${imageIndex + 1}`}
                    className={`relative h-16 w-11 overflow-hidden rounded-lg border transition sm:h-[4.5rem] sm:w-12 ${
                      imageIndex === index
                        ? "border-accent ring-2 ring-accent/40"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
