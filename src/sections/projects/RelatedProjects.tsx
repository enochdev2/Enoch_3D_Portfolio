import { SectionTitle } from "../../components/ui";
import { projects, type Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

type RelatedProjectsProps = {
  project: Project;
};

export default function RelatedProjects({
  project,
}: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter(
      (item) =>
        item.category === project.category &&
        item.id !== project.id
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="mt-32">
      <SectionTitle
        subtitle="More Work"
        title="Related Projects"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedProjects.map((relatedProject) => (
          <ProjectCard
            key={relatedProject.id}
            project={relatedProject}
          />
        ))}
      </div>
    </section>
  );
}