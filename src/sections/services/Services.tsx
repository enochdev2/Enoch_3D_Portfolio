import { Container, SectionTitle } from "../../components/ui";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      <Container>
        <div className="mb-16 max-w-3xl">
          <SectionTitle
            subtitle="Services"
            title="Visuals Built to Create Impact"
          />

          <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg">
            I create 3D visuals that turn ideas into experiences, stories, and
            commercial value, helping brands communicate clearly, capture
            attention, and connect with their audience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}