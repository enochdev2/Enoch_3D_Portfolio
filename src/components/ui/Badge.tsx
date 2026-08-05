import { cn } from "../../lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-zinc-700 px-4 py-2 text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}