
import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

import SkillProgress from "./SkillProgress";

export default function ServicesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skills.map((skill) => (
        <SkillCard key={skill.title} title={skill.title}>
          <SkillProgress level={skill.level} />

          <p className="mt-5 text-zinc-400">{skill.experience}</p>
        </SkillCard>
      ))}
    </div>
  );
}
