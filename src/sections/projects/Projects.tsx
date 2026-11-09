import { Container, SectionTitle } from "../../components/ui";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle subtitle="Selected work" title="Projects in 3D" />
          <p className="mt-5 text-base leading-8 text-zinc-400">
            A selection of character studies, product visuals, hard-surface
            models, and simulations. Open a project to explore its process,
            details, and available animation.
          </p>
        </div>

        <ProjectGrid />
      </Container>
    </section>
  );
}
