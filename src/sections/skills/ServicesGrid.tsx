import { motion, useReducedMotion } from "framer-motion";
import { Badge, Card } from "../../components/ui";
import { skills } from "../../data/skills";

export default function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.07 }}
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
        >
          <Card className="group relative h-full overflow-hidden border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-orange-400/30 hover:bg-white/[0.045] sm:p-7">
            <span className="absolute right-6 top-6 text-sm font-medium tracking-[0.2em] text-zinc-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-3 pr-12 text-xl font-semibold text-white sm:text-2xl">
              {skill.title}
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-7 text-zinc-400">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge
                  key={item}
                  className="border-white/10 bg-zinc-950/40 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
