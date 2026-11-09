import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, {
    stiffness: 150,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(tiltY, {
    stiffness: 150,
    damping: 22,
    mass: 0.6,
  });
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${pointerX}% ${pointerY}%, rgba(249, 115, 22, 0.2), transparent 72%)`;
  const hasVideo = project.gallery.some((item) => item.type === "video");

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(x * 100);
    pointerY.set(y * 100);
    tiltX.set((0.5 - y) * 10);
    tiltY.set((x - 0.5) * 10);
  }

  function resetPointer() {
    pointerX.set(50);
    pointerY.set(50);
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full rounded-[1.8rem] [perspective:1400px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
      aria-label={`View ${project.title} project`}
    >
      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.075] via-white/[0.025] to-orange-500/[0.025] shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition-colors duration-500 group-hover:border-orange-300/40 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.38)]"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-orange-950/30 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Project preview
          </div>
          <img
            src={project.cover}
            alt={`${project.title} 3D project`}
            loading="lazy"
            className="relative h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.6deg]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-zinc-950/65 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md">
            {project.category}
          </span>

          {hasVideo && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-zinc-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200 backdrop-blur-md">
              <Play size={11} fill="currentColor" />
              Motion
            </span>
          )}

          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-950/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>

          <div className="pointer-events-none absolute bottom-4 right-4 translate-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/70">
            Explore project
          </div>
        </div>

        <div
          className="relative space-y-4 p-5 sm:p-6"
          style={{ transform: "translateZ(24px)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-100 sm:text-2xl">
              {project.title}
            </h3>
            <ArrowUpRight
              size={19}
              className="mt-1 shrink-0 text-orange-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>

          <p className="line-clamp-3 text-sm leading-7 text-zinc-400">
            {project.description ?? project.overview}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                className="border-white/10 px-3 py-1 text-xs text-zinc-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
