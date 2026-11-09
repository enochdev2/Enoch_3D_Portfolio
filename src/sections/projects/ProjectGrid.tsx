import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { projects } from "../../data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [category, setCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <>
      <ProjectFilter category={category} setCategory={setCategory} />

      <motion.div layout={!shouldReduceMotion} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.96 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.32,
                delay: shouldReduceMotion ? 0 : index * 0.035,
                ease: [0.22, 0.61, 0.36, 1],
                layout: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
