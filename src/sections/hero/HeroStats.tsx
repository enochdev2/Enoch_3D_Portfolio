import { Card } from "../../components/ui";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-5">
      <Card>
        <h3 className="text-3xl font-bold text-orange-500">10+</h3>

        <p className="text-zinc-400">Projects</p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold text-orange-500">5+</h3>

        <p className="text-zinc-400">Simulations</p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold text-orange-500">100%</h3>

        <p className="text-zinc-400">Passion</p>
      </Card>
    </div>
  );
}
