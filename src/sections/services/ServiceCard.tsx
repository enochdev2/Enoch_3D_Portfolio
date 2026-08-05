import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Service } from "../../data/services";
import { Card } from "../../components/ui";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
    >
      <Card className="h-full">
        <div className="mb-6 inline-flex rounded-xl bg-orange-500/10 p-3 text-orange-500">
          <Icon size={30} />
        </div>

        <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>

        <p className="mb-8 text-zinc-400">{service.description}</p>

        <div className="space-y-4">
          {service.items.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check size={18} className="text-orange-500" />

              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
