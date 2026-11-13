import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play, SkipForward, VolumeX } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

// Reuse video links and cover images already maintained by the project gallery.
const featuredSlugs = [
  "headphone-product-animation",
  "walk-cycle-animation",
  "cream-product-animation",
  "wireless-earphone-animation",
] as const;

function youtubeId(source: string): string | null {
  try {
    const url = new URL(source);
    const host = url.hostname.replace(/^www\./, "");
    const parts = url.pathname.split("/").filter(Boolean);
    const id =
      host === "youtu.be"
        ? parts[0]
        : host === "youtube.com" || host === "m.youtube.com"
          ? url.searchParams.get("v") ??
            (parts[0] === "shorts" || parts[0] === "embed" ? parts[1] : null)
          : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

const films = featuredSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  const source = project?.gallery.find((item) => item.type === "video")?.src;
  const videoId = source ? youtubeId(source) : null;
  return project && videoId ? [{ project, videoId }] : [];
});

type Player = {
  mute(): void;
  playVideo(): void;
  pauseVideo(): void;
  loadVideoById(videoId: string): void;
  cueVideoById(videoId: string): void;
  getPlayerState(): number;
  getIframe(): HTMLIFrameElement;
  destroy(): void;
};

type PlayerEvent = { target: Player; data: number };
type YouTube = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady: (event: PlayerEvent) => void;
        onStateChange: (event: PlayerEvent) => void;
        onError: (event: PlayerEvent) => void;
        onAutoplayBlocked: () => void;
      };
    },
  ) => Player;
};

declare global {
  interface Window {
    YT?: YouTube;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YouTube> | undefined;

function loadYouTubeApi(): Promise<YouTube> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<YouTube>((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    const timeout = window.setTimeout(() => {
      reject(new Error("YouTube player did not load"));
    }, 15000);

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      window.clearTimeout(timeout);
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube player API unavailable"));
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      reject(new Error("Could not connect to YouTube"));
    };
    document.head.appendChild(script);
  }).catch((error: unknown) => {
    apiPromise = undefined; // Allow retry after network failures.
    throw error;
  });

  return apiPromise;
}

export default function HeroFilmReel() {
  const reduceMotion = useReducedMotion();
  const reduceData =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-data: reduce)").matches;
  const screenRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const visibleRef = useRef(false);
  const manualStartRef = useRef(false);
  const userPausedRef = useRef(false);
  const currentIndexRef = useRef(0);
  const failedVideosRef = useRef(new Set<string>());
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Do not request or autoplay a YouTube player until most of it is visible.
  useEffect(() => {
    const node = screenRef.current;
    if (!node || films.length === 0) return;

    const updateVisibility = (intersecting: boolean) => {
      const visible = intersecting && !document.hidden;
      visibleRef.current = visible;
      if (visible && !reduceMotion && !reduceData) setEnabled(true);
      const player = playerRef.current;
      if (!player) return;
      if (visible && !userPausedRef.current && (!reduceMotion || manualStartRef.current)) {
        player.playVideo();
      } else if (!visible) {
        player.pauseVideo();
      }
    };

    let mostlyVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        mostlyVisible = entry.intersectionRatio >= 0.6;
        updateVisibility(mostlyVisible);
      },
      { threshold: [0, 0.6, 1] },
    );
    observer.observe(node);
    const onVisibilityChange = () => updateVisibility(mostlyVisible);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [reduceMotion, reduceData]);

  useEffect(() => {
    if (!enabled || films.length === 0) return;
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let player: Player | null = null;

    void loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;
        const mount = document.createElement("div");
        host.appendChild(mount);
        player = new YT.Player(mount, {
          videoId: films[currentIndexRef.current].videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            playsinline: 1,
            rel: 0,
            fs: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: ({ target }) => {
              if (cancelled) return;
              target.mute(); // Muted playback is more likely to be permitted.
              target.getIframe().setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
              setReady(true);
              if ((visibleRef.current || manualStartRef.current) && !userPausedRef.current) {
                target.playVideo();
              }
            },
            onStateChange: ({ data }) => {
              if (cancelled) return;
              setIsPlaying(data === 1);
              if (data === 1) setBlocked(false);
              if (data === 0) {
                // The same single player advances to the next film indefinitely.
                const next = (currentIndexRef.current + 1) % films.length;
                currentIndexRef.current = next;
                setActiveIndex(next);
                if (visibleRef.current && !userPausedRef.current) {
                  player?.loadVideoById(films[next].videoId);
                } else {
                  player?.cueVideoById(films[next].videoId);
                }
              }
            },
            onError: () => {
              if (cancelled) return;
              failedVideosRef.current.add(films[currentIndexRef.current].videoId);
              if (failedVideosRef.current.size >= films.length) {
                setError("These videos cannot be embedded here. View them in My Work instead.");
                player?.pauseVideo();
                return;
              }
              const next = (currentIndexRef.current + 1) % films.length;
              currentIndexRef.current = next;
              setActiveIndex(next);
              if (visibleRef.current) player?.loadVideoById(films[next].videoId);
              else player?.cueVideoById(films[next].videoId);
            },
            onAutoplayBlocked: () => {
              if (!cancelled) setBlocked(true);
            },
          },
        });
        playerRef.current = player;
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load YouTube. You can still view each film in My Work.");
      });

    return () => {
      cancelled = true;
      playerRef.current = null;
      player?.destroy();
      host.replaceChildren();
    };
  }, [enabled]);

  if (films.length === 0) return null;
  const selected = films[activeIndex];

  function selectFilm(index: number) {
    const next = (index + films.length) % films.length;
    currentIndexRef.current = next;
    setActiveIndex(next);
    userPausedRef.current = false;
    manualStartRef.current = true;
    setBlocked(false);
    setError(null);
    failedVideosRef.current.clear();
    if (!enabled) setEnabled(true);
    else playerRef.current?.loadVideoById(films[next].videoId);
  }

  function togglePlayback() {
    manualStartRef.current = true;
    if (!enabled) {
      userPausedRef.current = false;
      setEnabled(true);
      return;
    }
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      userPausedRef.current = true;
      player.pauseVideo();
    } else {
      userPausedRef.current = false;
      player.mute();
      player.playVideo();
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-blue-500/10 blur-3xl" aria-hidden="true" />
      <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#060811] shadow-[0_35px_110px_rgba(0,0,0,0.62)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> Enoch / motion archive</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(films.length).padStart(2, "0")}</span>
        </div>
        <div ref={screenRef} className="relative aspect-[9/12] bg-[#080b12]" style={{ backgroundImage: `url(${selected.project.cover})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
          {enabled ? (
            <div ref={hostRef} className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full" aria-label="YouTube animation player" />
          ) : (
            <img src={selected.project.cover} alt={`${selected.project.title} preview`} className="h-full w-full object-contain" />
          )}
        </div>
        <div className="border-t border-white/10 px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
                {error ? "Playback unavailable" : blocked ? "Tap to start" : ready ? "Now screening" : "Featured animation"}
              </p>
              <p aria-live="polite" className="truncate text-base font-semibold text-white sm:text-lg">{selected.project.title}</p>
            </div>
            <Link to={`/projects/${selected.project.slug}`} className="flex shrink-0 items-center gap-1 text-xs text-zinc-300 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
              Details <ArrowUpRight size={14} />
            </Link>
          </div>
          {error && <p role="status" className="mt-2 text-xs text-amber-200">{error}</p>}
          <div className="mt-4 flex items-center gap-2">
            <button type="button" onClick={togglePlayback} disabled={Boolean(error)} aria-label={isPlaying ? "Pause films" : "Play films"} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white hover:border-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 disabled:opacity-50">
              {isPlaying ? <Pause size={14} /> : <Play size={14} />} {isPlaying ? "Pause" : "Play"}
            </button>
            <button type="button" onClick={() => selectFilm(activeIndex + 1)} aria-label="Next film" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 hover:border-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
              <SkipForward size={14} /> Next
            </button>
            <span className="ml-auto flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500"><VolumeX size={14} /> Starts muted</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-label="Choose an animation">
        {films.map((film, index) => (
          <button
            key={film.videoId}
            type="button"
            onClick={() => selectFilm(index)}
            aria-label={`Play ${film.project.title}`}
            aria-pressed={activeIndex === index}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${activeIndex === index ? "w-9 bg-orange-400" : "w-4 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] leading-5 text-zinc-500">Starts muted · Advances automatically · Pauses off-screen</p>
    </div>
  );
}
