import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/portfolio";
import { useContact } from "@/context/ContactContext";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const { openContact } = useContact();

  return (
    <section id="contact" className="bg-surface-alt/50 py-20 md:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="text-accent">Great</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted">
            Punya ide project web atau mobile? Hubungi saya lewat email, WhatsApp,
            atau form kontak.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <Mail className="size-4 text-accent" /> {contact.email}
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <Phone className="size-4 text-accent" /> {contact.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" /> {contact.location}
            </span>
          </div>

          <div className="mt-10">
            <Button onClick={openContact} withArrow size="lg">
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
