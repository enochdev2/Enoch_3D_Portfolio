import { about } from "../../data/about";
import SectionTitle from "../../components/ui/SectionTitle";
import Badge from "../../components/ui/Badge";
import ExperienceGrid from "./ExperienceGrid";

export default function AboutContent() {
  return (
    <div>
      <SectionTitle subtitle="WHO I AM" title="About Me" />

      <p className="mt-2 max-w-2xl leading-8 text-zinc-400">{about.intro}</p>

      <div className="mt-4 flex flex-wrap gap-4">
        {about.software.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      <ExperienceGrid />
    </div>
  );
}
