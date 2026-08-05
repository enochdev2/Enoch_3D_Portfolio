import { Container, SectionTitle } from "../../components/ui";
import ServicesGrid from "./ServicesGrid";
import SoftwareGrid from "./SoftwareGrid";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionTitle subtitle="Skills" title="What I Do" />

        <ServicesGrid />

        <SoftwareGrid />
      </Container>
    </section>
  );
}
