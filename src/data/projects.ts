import {Human} from "../assets/hero";
import {mangoJuice} from "../assets/hero";
import {clothSimulation} from "../assets/hero";
import {CatCartoon} from "../assets/hero";
import {nivea} from "../assets/hero";
import {earphone} from "../assets/hero";
import {hammer} from "../assets/hero";

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
      "A stylized low-poly human character created in Blender, focusing on simple geometry, clean shapes, proportions, and a game-ready aesthetic.",

    gallery: [
      {
        type: "image",
        src: "/images/projects/human.jpg",
      },
    ],

    software: ["Blender"],

    tags: ["Low Poly", "Character", "Game Asset"],
  },

  {
    id: 2,
    slug: "cartoon-character",

    title: "Cartoon Character",

    category: "Character",

    cover: `${CatCartoon}`,
    image: `${CatCartoon}`,

    overview:
      "A stylized cartoon character created in Blender, exploring expressive shapes, proportions, character modeling, and a playful visual style.",

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

    cover: `${hammer}`,
    image: `${hammer}`,

    overview:
      "A hard-surface hammer model created in Blender to practice clean topology, mechanical forms, proportions, and detailed 3D modeling.",

    gallery: [
      {
        type: "image",
        src: `${hammer}`,
      },
    ],

    software: ["Blender"],

    tags: ["Modeling", "Hard Surface", "Prop"],
  },

  {
    id: 4,
    slug: "cloth-simulation",

    title: "Cloth Simulation",

    category: "Simulation",

    cover: `${clothSimulation}`,
    image: `${clothSimulation}`,

    overview:
      "A cloth simulation created in Blender to explore realistic movement, cloth behavior, simulation settings, and visual effects.",

    gallery: [
      {
        type: "image",
        src: `${clothSimulation}`,
      },
    ],

    software: ["Blender"],

    tags: ["Simulation", "Cloth", "Visual Effects"],
  },

  {
    id: 5,
    slug: "cream-product-animation",

    title: "Cream Product Animation",

    category: "Product Visualization",

    cover: `${nivea}`,
    image: `${nivea}`,

    overview:
      "A 3D product visualization and animation created for a cosmetic cream product, focusing on realistic modeling, materials, lighting, composition, and cinematic product presentation.",

    gallery: [
      {
        type: "image",
        src: `${nivea}`,
      },
      {
        type: "video",
        src: "https://youtu.be/bt91NEkW67I?si=XsZVYZq1RAH0xK3g",
      },
    ],

    software: ["Blender"],

    tags: [
      "Product Visualization",
      "Product Animation",
      "3D Rendering",
      "Advertising",
    ],
  },

  {
    id: 6,
    slug: "wireless-earphone-animation",

    title: "Wireless Earphone Animation",

    category: "Product Visualization",

    cover: `${earphone}`,
    image: `${earphone}`,

    overview:
      "A 3D product animation created for wireless earphones, exploring product modeling, realistic materials, lighting, camera movement, and commercial presentation.",

    gallery: [
      {
        type: "image",
        src: `${earphone}`,
      },
      {
        type: "video",
        src: "https://youtu.be/SgTf3V7J5ec?si=kvWIaxMeAyVkc80j",
      },
    ],

    software: ["Blender"],

    tags: [
      "Product Visualization",
      "Product Animation",
      "Consumer Electronics",
      "Advertising",
    ],
  },

  {
    id: 7,
    slug: "headphone-product-animation",

    title: "Headphone Product Animation",

    category: "Product Visualization",

    cover: "/images/projects/headphone.jpg",
    image: "/images/projects/headphone.jpg",

    overview:
      "A 3D headphone visualization and animation focused on product modeling, materials, lighting, camera composition, and polished commercial presentation.",

    gallery: [
      {
        type: "image",
        src: "/images/projects/headphone.jpg",
      },
      {
        type: "video",
        src: "YOUR_YOUTUBE_VIDEO_URL",
      },
    ],

    software: ["Blender"],

    tags: [
      "Product Visualization",
      "Product Animation",
      "Consumer Electronics",
      "Advertising",
    ],
  },

  {
    id: 8,
    slug: "drink-can-product-animation",

    title: "Drink Can Product Animation",

    category: "Product Visualization",

    cover: `${mangoJuice}`,
    image: `${mangoJuice}`,

    overview:
      "A commercial-focused 3D drink can visualization created to explore realistic materials, product lighting, composition, camera animation, and cinematic advertising presentation.",

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
      {
        type: "video",
        src: "YOUR_YOUTUBE_VIDEO_URL",
      },
    ],

    software: ["Blender"],

    tags: [
      "Product Visualization",
      "Product Animation",
      "Advertising",
      "3D Rendering",
    ],
  },
];