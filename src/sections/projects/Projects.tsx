import { Container, SectionTitle } from "../../components/ui";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <SectionTitle subtitle="Portfolio" title="Featured Work" />

        <ProjectGrid />
      </Container>
    </section>
  );
}
