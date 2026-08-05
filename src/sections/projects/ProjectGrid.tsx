import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;

    return projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <>
      <ProjectFilter category={category} setCategory={setCategory} />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
