import { Badge } from "../../components/ui";
import { software } from "../../data/skills";


export default function SoftwareGrid() {
  return (
    <div className="mt-20">
      <h3 className="mb-8 text-3xl font-bold">Software</h3>

      <div className="flex flex-wrap gap-4">
        {software.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
