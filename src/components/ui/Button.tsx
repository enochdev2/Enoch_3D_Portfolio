import { cn } from "../../lib/utils";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  };

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 transition-all duration-300 font-medium",

        variant === "primary" &&
          "bg-orange-500 hover:bg-orange-400",

        variant === "secondary" &&
          "border border-zinc-700 hover:border-orange-500",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}