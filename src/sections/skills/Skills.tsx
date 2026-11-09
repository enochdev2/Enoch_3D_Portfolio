import { Container, SectionTitle } from "../../components/ui";
import ServicesGrid from "./ServicesGrid";
import SoftwareGrid from "./SoftwareGrid";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle subtitle="Capabilities" title="How I Build in 3D" />
          <p className="mt-5 text-base leading-8 text-zinc-400">
            My work moves between form, surface, and motion. These are the
            disciplines I draw on to develop a character, visualize a product,
            or bring a scene to life.
          </p>
        </div>

        <ServicesGrid />
        <SoftwareGrid />
      </Container>
    </section>
  );
}
