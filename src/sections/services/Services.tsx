import { Container, SectionTitle } from "../../components/ui";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-48 top-1/4 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-[120px]" />
      <Container>
        <div className="relative mb-14 max-w-3xl">
          <SectionTitle
            subtitle="Ways to collaborate"
            title="3D Work With a Clear Purpose"
          />
          <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
            From a character that needs personality to a product that needs a
            stronger visual story, I create 3D assets and animations shaped
            around the message each project needs to communicate.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-2">
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
