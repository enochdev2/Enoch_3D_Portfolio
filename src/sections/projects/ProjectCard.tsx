import { Link } from "react-router-dom";
import { character } from "../../assets/hero";
import { Badge } from "../../components/ui";
import type { Project } from "../../data/projects";


export default function ProjectCard({ project }: { project: Project }) {
  return (
     <Link
      to={`/projects/${project.slug}`}
      className="group block"
    >

    <div className="group overflow-hidden rounded-3xl border border-zinc-800">
      {/* <div className="aspect-square bg-zinc-900" /> */}

      <div className="space-y-4 p-6">
         <img
          src={project.cover || character}
          alt="Enoch"
          className="relative z-10 w-full object-contain"
        />
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-zinc-400">{project?.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
}
