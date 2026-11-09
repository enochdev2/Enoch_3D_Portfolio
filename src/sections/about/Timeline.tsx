import {
  Box,
  BoxSelect,
  Shield,
  Waves,
  Bone,
  PersonStanding,
} from "lucide-react";

const workflow = [
  {
    icon: Box,
    title: "Concept",
    desc: "Define the idea, visual direction, and intended result.",
  },
  {
    icon: BoxSelect,
    title: "Modeling",
    desc: "Build the primary forms, proportions, and silhouette.",
  },
  {
    icon: Shield,
    title: "Topology & UVs",
    desc: "Prepare geometry and surfaces for the next stages.",
  },
  {
    icon: Waves,
    title: "Materials & look",
    desc: "Develop surface detail, lighting, and visual character.",
  },
  {
    icon: Bone,
    title: "Rigging & motion",
    desc: "Prepare characters or objects for purposeful movement.",
  },
  {
    icon: PersonStanding,
    title: "Final render",
    desc: "Compose, animate, light, and present the finished work.",
  },
];

export default function Timeline() {
  return (
    <div className="mt-20 rounded-3xl border border-white/10 bg-[#111827]/55 p-6 sm:p-10">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
          A considered process
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          From idea to final frame
        </h2>
      </div>

      <div className="relative grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-6">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent lg:block" />

        {workflow.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 bg-[#151b2d] shadow-[0_0_30px_rgba(249,115,22,.12)]">
                <Icon size={19} className="text-orange-400" />
              </div>

              <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-orange-400">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
