import {
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";
import { profile, socialLinks } from "@/data/portfolio";
import { useContact } from "@/context/ContactContext";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TypingText } from "@/components/ui/TypingText";

const socialIcons = {
  linkedin: LinkedinIcon,
  email: EmailIcon,
  whatsapp: WhatsappIcon,
};

export function Hero() {
  const { openContact } = useContact();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 size-80 rounded-full bg-accent/5 blur-3xl" />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <FadeIn className="relative z-10">
          <SectionLabel>{profile.fullName}</SectionLabel>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hay! I&apos;m {profile.firstName}
            <br />
            <TypingText
              words={profile.roles}
              className="mt-1 block text-3xl sm:text-4xl lg:text-5xl"
            />
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={openContact} withArrow size="lg">
              Get In Touch
            </Button>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[var(--shadow-glow)]"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="line-circle absolute -right-2 top-8 size-56 opacity-40 sm:size-64 md:size-72" />
            <div className="absolute -left-4 bottom-16 size-20 rounded-full bg-gradient-to-br from-slate-500/40 to-slate-900/80 blur-[1px] sm:size-24" />
            <div className="absolute right-8 top-4 size-14 rounded-full bg-gradient-to-br from-slate-400/30 to-slate-900/70 sm:size-16" />
            <div className="absolute inset-x-6 bottom-0 top-10 overflow-hidden rounded-[2rem] sm:inset-x-10">
              <img
                src={profile.heroImage}
                alt={`${profile.fullName} portrait`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
