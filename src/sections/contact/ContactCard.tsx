import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
};

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: Props) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-orange-500"
    >
      <div className="rounded-xl bg-orange-500/10 p-3 text-orange-500">
        <Icon size={22} />
      </div>

      <div>
        <p className="text-sm text-zinc-400">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
}