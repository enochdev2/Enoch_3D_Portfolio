import {Human} from "../assets/hero";
import {mangoJuice} from "../assets/hero";
import {clothSimulation} from "../assets/hero";
import {CatCartoon} from "../assets/hero";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description?: string;
  cover: string;
  image: string;
  overview: string;
  gallery: GalleryItem[];
  software: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "low-poly-human",

    title: "Low Poly Human",

    category: "Character",

    cover: `${Human}`,
    image: `${Human}`,

    overview:
      "A stylized low-poly human character created with Blender, focusing on simple geometry, clean shapes, and a game-ready aesthetic.",

    gallery: [
      {
        type: "image",
        src: "/images/projects/human.jpg",
      },
    ],

    software: ["Blender"],

    tags: ["Low Poly", "Game Asset"],
  },

  {
    id: 2,
    slug: "cartoon-character",

    title: "Cartoon Character",

    category: "Character",

    cover: `${CatCartoon}`,
    image: `${CatCartoon}`,

    overview:
      "A stylized cartoon character created in Blender, exploring expressive shapes, proportions, and a playful visual style.",

    gallery: [
      {
        type: "image",
        src: `${CatCartoon}`,
      },
    ],

    software: ["Blender"],

    tags: ["Character", "Cartoon", "3D Modeling"],
  },

  {
    id: 3,
    slug: "hammer",

    title: "Hammer",

    category: "Hard Surface",

    cover: "/images/projects/hammer.jpg",
    image: "/images/projects/hammer.jpg",

    overview:
      "A hard-surface hammer model created in Blender to practice clean topology, mechanical forms, proportions, and detailed 3D modeling.",

    gallery: [
      {
        type: "image",
        src: "/images/projects/hammer.jpg",
      },
    ],

    software: ["Blender"],

    tags: ["Modeling", "Hard Surface", "Prop"],
  },

  {
    id: 4,
    slug: "Cloth",

    title: "Cloth Simulation",

    category: "Simulation",

    cover: `${clothSimulation}`,
    image: `${clothSimulation}`,

    overview:
      "A Cloth simulation created in Blender to explore realistic motion, Cloth behavior, simulation settings, and visual effects.",

    gallery: [
      {
        type: "image",
        src: `${clothSimulation}`,
      },
    ],

    software: ["Blender"],

    tags: ["Simulation", "Fluid", "Visual Effects"],
  },

  {
    id: 5,
    slug: "3d-product-visualization",

    title: "3D Product Visualization & Advertising",

    category: "Product Visualization",

    cover: `${mangoJuice}`,
    image: `${mangoJuice}`,

    overview:
      "A commercial-focused 3D product visualization created to demonstrate how realistic modeling, materials, lighting, composition, and rendering can transform a product into premium advertising content. The project explores how 3D visualization can help businesses create engaging visuals for product launches, social media, promotional campaigns, and advertising.",

    gallery: [
      {
        type: "image",
        src: `${mangoJuice}`,
      },
      {
        type: "image",
        src: "/images/projects/mango-juice-2.jpg",
      },
      {
        type: "image",
        src: "/images/projects/mango-juice-3.jpg",
      },
    ],

    software: ["Blender"],

    tags: [
      "Product Visualization",
      "Product Advertising",
      "3D Rendering",
      "Product Animation",
    ],
  },
];