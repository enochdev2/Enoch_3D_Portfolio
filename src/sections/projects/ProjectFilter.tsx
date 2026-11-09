import { motion, useReducedMotion } from "framer-motion";
import { categories } from "../../data/categories";

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

export default function ProjectFilter({ category, setCategory }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mb-12 flex flex-wrap gap-3" aria-label="Filter projects by category">
      {categories.map((item) => {
        const isActive = category === item;

        return (
          <motion.button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={isActive}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            className={`relative isolate overflow-hidden rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
              isActive
                ? "border-orange-300/60 text-zinc-950"
                : "border-white/10 bg-white/[0.025] text-zinc-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={shouldReduceMotion ? undefined : "active-project-filter"}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-300"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 34 }
                }
              />
            )}
            <span className="relative z-10">{item}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
