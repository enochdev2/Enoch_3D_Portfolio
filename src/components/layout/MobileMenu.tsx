import { X } from "lucide-react";

import { navigation } from "../../data/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute right-0 top-0 h-full w-72 bg-zinc-900 transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}