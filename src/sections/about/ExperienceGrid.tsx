import { Boxes, Clapperboard, Star, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Boxes,
    value: "15+",
    title: "Projects",
  },
  {
    icon: Clapperboard,
    value: "8+",
    title: "Animations",
  },
  {
    icon: Star,
    value: "100%",
    title: "Passion",
  },
  {
    icon: Clock3,
    value: "1+",
    title: "Years Learning",
  },
];

export default function ExperienceGrid() {
  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-[#111827]/70 p-8 py-5">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="text-center">
              <Icon className="mx-auto mb-2 text-orange-500" size={30} />

              <h3 className="text-3xl font-bold">{item.value}</h3>

              <p className="mt-1 text-sm text-zinc-400">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
