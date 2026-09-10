import { services } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <FadeIn className="mb-12 text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Skills & <span className="text-accent">Services</span> I Am Providing
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.06}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
