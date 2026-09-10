import { navItems, profile, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-xs font-black text-white">
            {profile.firstName.charAt(0)}
          </span>
          <span className="font-bold uppercase tracking-[0.18em] text-white">
            {profile.firstName}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5" aria-label="Footer">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wide text-muted transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs text-muted">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>

      <Container className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-muted">
        © {year} {profile.fullName}. All rights reserved.
      </Container>
    </footer>
  );
}
