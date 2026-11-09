import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import character from "../../assets/hero/character.png";

export default function HeroImage() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const rotateX = useSpring(pointerY, {
    stiffness: 130,
    damping: 20,
    mass: 0.7,
  });
  const rotateY = useSpring(pointerX, {
    stiffness: 130,
    damping: 20,
    mass: 0.7,
  });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(251, 146, 60, 0.2), transparent 40%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x * 14);
    pointerY.set(y * -12);
    spotlightX.set((x + 0.5) * 100);
    spotlightY.set((y + 0.5) * 100);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
    spotlightX.set(50);
    spotlightY.set(50);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[570px] [perspective:1400px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-orange-500/20 blur-[100px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1 top-8 h-44 w-44 [transform:rotateX(68deg)_rotateZ(-24deg)]"
      >
        <motion.div
          className="relative h-full w-full rounded-full border border-orange-200/15"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -bottom-5 left-6 h-52 w-52 rounded-full border border-white/10 [transform:rotateX(72deg)_rotateZ(18deg)]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.11] via-white/[0.035] to-orange-500/[0.06] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-6"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[2.5rem]"
          style={{ background: spotlight }}
        />
        <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-white/[0.07]" />

        <div
          className="pointer-events-none absolute left-8 top-8 z-20 rounded-full border border-white/10 bg-zinc-950/65 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-300 backdrop-blur-md"
          style={{ transform: "translateZ(45px)" }}
        >
          Blender · 3D artwork
        </div>

        <motion.img
          src={character}
          alt="Stylized 3D character artwork by Enoch Promise"
          className="relative z-10 mx-auto w-full object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.35)]"
          style={{ z: 70 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -14, 0], rotateZ: [-0.7, 0.7, -0.7], scale: [1, 1.012, 1] }
          }
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -left-5 top-[34%] z-20 hidden rounded-2xl border border-white/10 bg-zinc-950/80 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:block"
          style={{ transform: "translateZ(65px)" }}
          animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [-2, 1, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-500">Craft</span>
          <span className="mt-1 block text-xs font-semibold text-zinc-100">Form & detail</span>
        </motion.div>

        <motion.div
          className="absolute -right-4 top-[58%] z-20 hidden rounded-2xl border border-orange-300/20 bg-zinc-950/85 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:block"
          style={{ transform: "translateZ(80px)" }}
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0], rotate: [2, -1, 2] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-500">Motion</span>
          <span className="mt-1 block text-xs font-semibold text-orange-200">Light & movement</span>
        </motion.div>

        <div
          className="absolute bottom-7 right-7 z-20 rounded-2xl border border-white/10 bg-zinc-950/75 px-4 py-3 shadow-xl backdrop-blur-md"
          style={{ transform: "translateZ(55px)" }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Creative focus</p>
          <p className="mt-1 text-sm font-semibold text-white">Form · Light · Motion</p>
        </div>
      </motion.div>

      <p className="mt-5 text-center text-xs tracking-wide text-zinc-500">
        Move your cursor over the artwork to explore its depth
      </p>
    </div>
  );
}
