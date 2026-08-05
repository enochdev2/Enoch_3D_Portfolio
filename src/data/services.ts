import { Box, Clapperboard, Cpu, Sparkles } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: typeof Box;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Character Creation",

    description: "Creating stylized and animation-ready characters.",

    icon: Sparkles,

    items: [
      "Stylized Characters",
      "Cartoon Characters",
      "Low Poly Characters",
      "Character Design",
    ],
  },

  {
    title: "Hard Surface",

    description: "Clean props and product models.",

    icon: Box,

    items: ["Props", "Weapons", "Tools", "Environment Assets"],
  },

  {
    title: "Animation",

    description: "Bringing characters and products to life.",

    icon: Clapperboard,

    items: [
      "Character Animation",
      "Product Animation",
      "Camera Animation",
      "Storytelling",
    ],
  },

  {
    title: "Simulation",

    description: "Physics simulations inside Blender.",

    icon: Cpu,

    items: ["Cloth", "Rigid Body", "Fluid", "Particles"],
  },
];
