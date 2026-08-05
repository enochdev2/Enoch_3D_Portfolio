import { Card } from "../../components/ui";

type Props = {
  title: string;

  children: React.ReactNode;
};

export default function SkillCard({
  title,

  children,
}: Props) {
  return (
    <Card >
      <h3 className="mb-6 text-2xl font-bold">{title}</h3>

      {children}
    </Card>
  );
}
