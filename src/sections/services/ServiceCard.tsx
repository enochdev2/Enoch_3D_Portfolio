import { motion } from "framer-motion";
import {
  Check,
  Clapperboard,
  Cuboid,
  Film,
  Sparkles,
} from "lucide-react";
import type { Service } from "../../data/services";
import { Card } from "../../components/ui";

type Props = {
  service: Service;
  index: number;
};

const iconMap = {
  character: Sparkles,
  product: Cuboid,
  animation: Film,
  simulation: Clapperboard,
};

export default function ServiceCard({ service, index }: Props) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Card
        className="
          relative h-full overflow-hidden
          border border-white/10
          bg-white/[0.02]
          p-7
          transition-all duration-500
          group-hover:border-orange-500/30
          group-hover:bg-white/[0.04]
          md:p-8
        "
      >
        {/* Subtle hover glow */}
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20
            h-40 w-40
            rounded-full
            bg-orange-500/10
            blur-3xl
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Header */}
        <div className="relative mb-8 flex items-start justify-between">
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              border border-orange-500/10
              bg-orange-500/10
              text-orange-500
              transition-all duration-300
              group-hover:scale-105
              group-hover:bg-orange-500/15
            "
          >
            <Icon size={23} strokeWidth={1.8} />
          </div>

          <span className="text-sm font-medium tracking-[0.2em] text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
            {service.title}
          </h3>

          <p className="mb-8 max-w-xl text-sm leading-6 text-zinc-400 md:text-[15px]">
            {service.description}
          </p>

          {/* Services */}
          <div className="grid gap-3 sm:grid-cols-2">
            {service.items.map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2.5
                  text-sm text-zinc-300
                  transition-colors duration-300
                  group-hover:text-zinc-200
                "
              >
                <span
                  className="
                    flex h-5 w-5 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-orange-500/10
                  "
                >
                  <Check
                    size={11}
                    strokeWidth={2.5}
                    className="text-orange-500"
                  />
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}