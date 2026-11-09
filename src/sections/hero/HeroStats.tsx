import { Box, Clapperboard, Cuboid } from "lucide-react";

const focus = [
  { icon: Box, title: "Character art" },
  { icon: Cuboid, title: "Product visuals" },
  { icon: Clapperboard, title: "Animation" },
];

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-3">
      {focus.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
          >
            <Icon size={20} className="mb-3 text-orange-400" />
            <p className="text-xs font-medium text-zinc-300">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
