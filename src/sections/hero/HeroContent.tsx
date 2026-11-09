import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { hero } from "../../data/hero";

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  const ctaPointerX = useMotionValue(0);
  const ctaPointerY = useMotionValue(0);
  const ctaX = useSpring(ctaPointerX, { stiffness: 260, damping: 18 });
  const ctaY = useSpring(ctaPointerY, { stiffness: 260, damping: 18 });

  function movePrimaryCta(event: React.PointerEvent<HTMLAnchorElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ctaPointerX.set(x * 10);
    ctaPointerY.set(y * 7);
  }

  function resetPrimaryCta() {
    ctaPointerX.set(0);
    ctaPointerY.set(0);
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative z-10 max-w-2xl"
    >
      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-orange-400">
        <span className="h-px w-8 bg-orange-400" />
        3D ARTIST / ANIMATOR
      </p>

      <h1 className="mb-5 font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        {hero.name.split(" ")[0]}
        <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          {hero.name.split(" ").slice(1).join(" ")}
        </span>
      </h1>

      <h2 className="mb-5 text-xl font-medium text-zinc-200 sm:text-2xl">{hero.title}</h2>

      <p className="mb-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
        {hero.description}
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        <motion.a
          href="#projects"
          onPointerMove={movePrimaryCta}
          onPointerLeave={resetPrimaryCta}
          style={{ x: ctaX, y: ctaY }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_12px_35px_rgba(249,115,22,0.18)] transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(249,115,22,0.32)]"
        >
          Explore selected work
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: "rgba(251,146,60,0.6)" }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/[0.07]"
        >
          Start a project
          <ArrowDownRight size={17} className="text-orange-400" />
        </motion.a>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
        {hero.focus.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-orange-400" />
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
