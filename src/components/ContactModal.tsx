import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { contact } from "@/data/portfolio";
import { useContact } from "@/context/ContactContext";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactModal() {
  const { isOpen, closeContact } = useContact();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeContact();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeContact]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    const subject = encodeURIComponent(`Halo Abibah — dari ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close contact modal backdrop"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeContact}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-surface p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closeContact}
              aria-label="Close contact modal"
              className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-accent hover:text-accent"
            >
              <X className="size-4" />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 className="size-14 text-accent" />
                <h3
                  id="contact-modal-title"
                  className="mt-4 text-2xl font-bold text-white"
                >
                  Message Sent Successfully
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out. I will get back to you as soon as
                  possible.
                </p>
                <Button className="mt-6" onClick={closeContact}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3
                  id="contact-modal-title"
                  className="pr-10 text-2xl font-bold uppercase tracking-tight text-white"
                >
                  Let&apos;s Talk
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Share a few details and I&apos;ll reply within 1–2 business
                  days.
                </p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-white/90"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-white/90"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                      placeholder="you@example.com"
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-white/90"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full resize-none rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
