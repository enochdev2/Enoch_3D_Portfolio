import { ArrowDown } from "lucide-react";
import { Container } from "../../components/ui";
import HeroContent from "./HeroContent";
import HeroFilmReel from "./HeroFilmReel";

export default function Hero() {
  return (
    <section
      id="home"
      className="cinema-hero relative isolate min-h-screen overflow-hidden border-b border-white/[0.06]"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-[#070a11]">
        <div className="cinema-hero-wash absolute -inset-[20%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_48%,transparent_12%,rgba(2,3,8,0.85)_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-[0.13]" />
        <div className="cinema-grain absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-2.5 bg-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-2.5 bg-black/80" />
      </div>

      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none font-['Space_Grotesk'] text-[21vw] font-black uppercase tracking-[-0.09em] text-white/[0.023] lg:block">
        IMAGINE
      </span>

      <div aria-hidden="true" className="pointer-events-none absolute left-6 top-28 hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 xl:block [writing-mode:vertical-rl]">
        ENOCH / DIGITAL ARTISTRY
      </div>

      <Container>
        <div className="grid min-h-screen items-center gap-12 pb-32 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pt-28">
          <HeroContent />
          <HeroFilmReel />
        </div>
      </Container>

      <a
        href="#showreel"
        className="group absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
      >
        <span className="h-px w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-orange-300" />
        Enter the screening room
        <ArrowDown size={14} className="text-orange-300" />
      </a>
    </section>
  );
}
