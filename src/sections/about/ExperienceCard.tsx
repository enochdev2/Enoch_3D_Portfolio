import { Card } from "../../components/ui";

type Props = {
  title: string;
  value: string;
};

export default function ExperienceCard({
  title,
  value,
}: Props) {
  return (
    <Card className="text-center">

      <h3 className="text-4xl font-bold text-orange-500">

        {value}

      </h3>

      <p className="mt-2 text-zinc-400">

        {title}

      </p>

    </Card>
  );
}