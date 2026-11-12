import { Link } from "react-router-dom";
import enochToonLogo from "../../assets/hero/Enoch Toon.jpg";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Enoch Toon Studio — home"
      className="group inline-flex shrink-0 items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-orange-400/30 bg-zinc-950 shadow-[0_0_22px_rgba(249,115,22,0.14)] transition-all duration-300 group-hover:scale-105 group-hover:border-orange-300/70 group-hover:shadow-[0_0_28px_rgba(249,115,22,0.3)] motion-reduce:transform-none">
        <img
          src={enochToonLogo}
          alt=""
          width={108}
          height={108}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-['Space_Grotesk'] text-base font-bold tracking-tight text-white sm:text-lg">
          ENOCH <span className="text-orange-400">TOON</span>
        </span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-400">
          3D Studio
        </span>
      </span>
    </Link>
  );
}
