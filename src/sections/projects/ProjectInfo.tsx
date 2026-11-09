import { Badge } from "../../components/ui";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
};

export default function ProjectInfo({ project }: Props) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
          Project overview
        </p>
        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          About this work
        </h2>
        <p className="max-w-3xl text-base leading-8 text-zinc-400">
          {project.overview}
        </p>
      </div>

      <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Project details
        </p>
        <div className="mb-6">
          <p className="mb-2 text-sm text-zinc-500">Discipline</p>
          <p className="font-medium text-white">{project.category}</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 text-sm text-zinc-500">Software</p>
          <div className="flex flex-wrap gap-2">
            {project.software.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm text-zinc-500">Focus</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
