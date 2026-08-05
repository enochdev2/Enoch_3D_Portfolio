import {
  Box,
  BoxSelect,
  Shield,
  Waves,
  Bone,
  PersonStanding,
} from "lucide-react";





 const timeline = [
  {
    icon: Box,
    title: "Started Blender",
    desc: "Took my first steps into the 3D world.",
  },
  {
    icon: BoxSelect,
    title: "Low Poly",
    desc: "Learned the basics of modelling and topology.",
  },
  {
    icon: Shield,
    title: "Hard Surface",
    desc: "Built clean detailed props and assets.",
  },
  {
    icon: Waves,
    title: "Simulation",
    desc: "Explored cloth, fluids and particles.",
  },
  {
    icon: Bone,
    title: "Rigging",
    desc: "Built skeletons and rigs.",
  },
  {
    icon: PersonStanding,
    title: "Animation",
    desc: "Bringing stories to life.",
  },
];

export default function Timeline() {
  return (
    <div className="mt-20 rounded-3xl border border-zinc-800 bg-[#111827]/70 p-12 py-4">
      <h2 className="mb-6 text-center text-3xl font-bold">My Journey</h2>

      <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-6">
        {/* Orange line */}
        <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-orange-500 lg:block" />

        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-[#151b2d] shadow-[0_0_30px_rgba(249,115,22,.35)]">
                <Icon size={18} className="text-orange-500" />
              </div>

              <div className="mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold">
                {index + 1}
              </div>

              <h3 className="mt-2 font-semibold">{item.title}</h3>

              <p className="mt-1 text-xs leading-7 text-zinc-400">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
