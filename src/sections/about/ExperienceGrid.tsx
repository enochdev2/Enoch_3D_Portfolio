import { Box, Clapperboard, Cuboid, Waves } from "lucide-react";

const focusAreas = [
  {
    icon: Box,
    title: "Character art",
    detail: "Stylized forms, proportions, and character modeling.",
  },
  {
    icon: Cuboid,
    title: "Product visuals",
    detail: "Product form, materials, lighting, and presentation.",
  },
  {
    icon: Clapperboard,
    title: "Animation",
    detail: "Character movement, product motion, and camera work.",
  },
  {
    icon: Waves,
    title: "Simulation",
    detail: "Cloth studies and procedural visual experiments.",
  },
];

export default function ExperienceGrid() {
  return (
    <div className="mt-9">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        Creative focus
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {focusAreas.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-400/30"
            >
              <Icon size={20} className="mb-3 text-orange-400" />
              <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-zinc-500">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
