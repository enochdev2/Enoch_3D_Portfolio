import character from "../../assets/hero/character.png";

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Orange glow */}
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-orange-500/30 blur-[140px]" />

      {/* Glass card */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-sm">
        <img
          src={character}
          alt="Character"
          className="relative z-10 w-full object-contain"
        />
      </div>
    </div>
  );
}
