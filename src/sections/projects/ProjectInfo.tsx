import { Badge } from "../../components/ui";

type Props = {
  project: any;
};

export default function ProjectInfo({ project }: Props) {
  return (
    <section className="py-24">
      <h2 className="mb-8 text-4xl font-bold">Overview</h2>

      <p className="mb-10 text-zinc-400">{project.overview}</p>

      <div className="flex flex-wrap gap-3">
        {project.software.map((item: string) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </section>
  );
}
