import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  image: string;
};

export default function ProjectHero({ title, image }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 sm:min-h-[68vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(249,115,22,0.16),transparent_35%),linear-gradient(135deg,#111827,#090b11_65%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />

      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35 [mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-8 sm:pb-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            Selected project · 3D artwork
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
