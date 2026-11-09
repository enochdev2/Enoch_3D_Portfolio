import { motion, useReducedMotion } from "framer-motion";
import type { GalleryItem } from "../../data/projects";

type Props = {
  gallery: GalleryItem[];
  projectTitle?: string;
};

function getYouTubeEmbedUrl(src: string): string | null {
  try {
    const url = new URL(src);
    const hostname = url.hostname.startsWith("www.")
      ? url.hostname.slice(4)
      : url.hostname;

    if (
      hostname !== "youtu.be" &&
      hostname !== "youtube.com" &&
      hostname !== "m.youtube.com"
    ) {
      return null;
    }

    const pathSegments = url.pathname.split("/").filter(Boolean);
    const pathVideoId =
      pathSegments[0] === "embed" || pathSegments[0] === "shorts"
        ? pathSegments[1]
        : null;

    const videoId =
      hostname === "youtu.be"
        ? pathSegments[0]
        : url.searchParams.get("v") ?? pathVideoId;

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  } catch {
    return null;
  }
}

export default function ProjectGallery({
  gallery,
  projectTitle = "Project",
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (gallery.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            Behind the render
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Project gallery
          </h2>
        </div>
        <span className="text-sm text-zinc-500">
          {String(gallery.length).padStart(2, "0")} media
        </span>
      </div>

      <motion.div layout={!shouldReduceMotion} className="grid gap-5 md:grid-cols-2">
        {gallery.map((item, index) => {
          const embedUrl =
            item.type === "video" ? getYouTubeEmbedUrl(item.src) : null;

          return (
            <motion.div
              key={`${item.src}-${index}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-[0_16px_45px_rgba(0,0,0,0.18)] transition-colors duration-500 hover:border-orange-300/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.3)]"
            >
              {item.type === "image" ? (
                <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-800 via-zinc-900 to-orange-950/30">
                  <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Preview unavailable
                  </div>
                  <img
                    src={item.src}
                    alt={`${projectTitle} gallery view ${index + 1}`}
                    loading="lazy"
                    className="relative h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.035]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ) : embedUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title={`${projectTitle} animation`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video controls preload="metadata" className="h-full w-full">
                  <source src={item.src} />
                  Your browser does not support the video element.
                </video>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
