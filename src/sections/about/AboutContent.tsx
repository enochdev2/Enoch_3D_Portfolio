import { about } from "../../data/about";
import SectionTitle from "../../components/ui/SectionTitle";
import Badge from "../../components/ui/Badge";
import { software } from "../../data/skills";
import ExperienceGrid from "./ExperienceGrid";

export default function AboutContent() {
  return (
    <div>
      <SectionTitle subtitle="The artist behind the work" title="About Me" />

      <div className="mt-6 space-y-4">
        {[about.intro, about.intro2, about.intro3, about.intro4].map(
          (paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-base leading-8 text-zinc-400"
            >
              {paragraph}
            </p>
          ),
        )}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <span className="mr-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Main tool
        </span>
        {software.map((item) => (
          <Badge key={item} className="border-orange-400/20 bg-orange-400/5">
            {item}
          </Badge>
        ))}
      </div>

      <ExperienceGrid />
    </div>
  );
}
