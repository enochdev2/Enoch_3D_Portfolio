

import { Container, SectionTitle } from "../../components/ui";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-32">
      <Container>
        <SectionTitle subtitle="Services" title="What I Create" />

        <p className="mb-16 max-w-3xl text-zinc-400">
          I help businesses, brands and creators create engaging 3D experiences
          through stylized characters, animations and digital assets.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
