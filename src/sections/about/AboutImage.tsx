import { enoch } from "../../assets/hero";

export default function AboutImage() {
  return (
    

    <div className="relative">
      {/* Orange glow */}
      <div className="absolute aspect-square  bottom-10 right-0 h-96 w-96 rounded-full bg-orange-500/30 blur-[140px]" />

      {/* Glass card */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-sm">
        <img
          src={enoch}
          alt="Enoch"
          className="relative z-10 w-full object-contain"
        />
      </div>
    </div>
  );
}