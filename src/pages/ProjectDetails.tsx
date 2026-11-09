import { useParams } from "react-router-dom";
import ProjectGallery from "../sections/projects/ProjectGallery";
import ProjectHero from "../sections/projects/ProjectHero";
import ProjectInfo from "../sections/projects/ProjectInfo";
import RelatedProjects from "../sections/projects/RelatedProjects";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-orange-400">
            404 · Project unavailable
          </p>
          <h1 className="text-3xl font-bold text-white">Project not found</h1>
          <a
            href="/#projects"
            className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-200 transition hover:border-orange-400"
          >
            Back to portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProjectHero title={project.title} image={project.cover} />
      <ProjectInfo project={project} />
      <ProjectGallery gallery={project.gallery} projectTitle={project.title} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RelatedProjects project={project} />
      </div>
    </>
  );
}
