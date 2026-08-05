import { useParams } from "react-router-dom";
import ProjectGallery from "../sections/projects/ProjectGallery";
import ProjectHero from "../sections/projects/ProjectHero";
import ProjectInfo from "../sections/projects/ProjectInfo";
import RelatedProjects from "../sections/projects/RelatedProjects";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <ProjectHero
        title={project.title}
        image={project.cover}
      />

      <ProjectInfo project={project} />

      <ProjectGallery gallery={project.gallery} />

      <RelatedProjects project={project} />
    </>
  );
}