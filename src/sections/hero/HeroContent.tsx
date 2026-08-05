import { Button } from "../../components/ui";
import { hero } from "../../data/hero";

export default function HeroContent() {
  return (
    <div>
      <p className="mb-5 uppercase tracking-[0.3em] text-orange-500">
        Hello, I'm
      </p>

      <h1 className="mb-6 text-6xl font-bold font-['Space_Grotesk']">
        {hero.name}
      </h1>

      <h2 className="mb-6 text-3xl text-zinc-300">{hero.title}</h2>

      <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
        {hero.description}
      </p>

      <div className="flex flex-wrap gap-5">
        <Button>View Portfolio</Button>

        <Button variant="secondary">Download Resume</Button>
      </div>
    </div>
  );
}
