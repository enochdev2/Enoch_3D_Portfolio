import {
  Human,
  mangoJuice,
  clothSimulation,
  CatCartoon,
  nivea,
  earphone,
  hammer,
} from "../assets/hero";

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
    title: "Low-Poly Human",
    category: "Character",
    description:
      "A stylized character study focused on readable proportions, simplified geometry, and a clean low-poly silhouette.",
    cover: Human,
    image: Human,
    overview:
      "Created in Blender, this character explores how simple geometry can communicate the human form. The work focuses on proportion, shape language, and keeping the silhouette clear without unnecessary detail.",
    gallery: [{ type: "image", src: Human }],
    software: ["Blender"],
    tags: ["Character Art", "Low Poly", "3D Modeling"],
  },
  {
    id: 2,
    slug: "cartoon-character",
    title: "Cartoon Character",
    category: "Character",
    description:
      "A playful character-modeling study exploring expressive shapes, stylized proportions, and a distinctive silhouette.",
    cover: CatCartoon,
    image: CatCartoon,
    overview:
      "A stylized cartoon character created in Blender. The project explores simplified forms, expressive proportions, and a playful visual identity.",
    gallery: [{ type: "image", src: CatCartoon }],
    software: ["Blender"],
    tags: ["Character Art", "Cartoon", "3D Modeling"],
  },
  {
    id: 3,
    slug: "hammer",
    title: "Hammer",
    category: "Hard Surface",
    description:
      "A hard-surface prop study built around proportion, clean primary forms, and carefully defined mechanical details.",
    cover: hammer,
    image: hammer,
    overview:
      "A hard-surface model created in Blender to practice clean forms, proportions, topology, and the presentation of a familiar everyday object.",
    gallery: [{ type: "image", src: hammer }],
    software: ["Blender"],
    tags: ["Hard Surface", "Prop Modeling", "3D Asset"],
  },
  {
    id: 4,
    slug: "cloth-simulation",
    title: "Cloth Simulation",
    category: "Simulation",
    description:
      "A cloth simulation study exploring fabric movement, folds, draping, and the visual behavior of simulated materials.",
    cover: clothSimulation,
    image: clothSimulation,
    overview:
      "Created in Blender, this study explores cloth behavior and the way fabric responds to simulation settings. The focus is on the resulting folds, drape, and sense of movement.",
    gallery: [{ type: "image", src: clothSimulation }],
    software: ["Blender"],
    tags: ["Simulation", "Cloth", "Visual Effects"],
  },
  {
    id: 5,
    slug: "cream-product-animation",
    title: "Cream Product Animation",
    category: "Product Visualization",
    description:
      "A cosmetic product visualization focused on form, material definition, lighting, and a polished commercial presentation.",
    cover: nivea,
    image: nivea,
    overview:
      "A 3D cosmetic product visualization created in Blender. The project focuses on product modeling, material treatment, lighting, composition, and presenting the product with a clean commercial look.",
    gallery: [
      { type: "image", src: nivea },
      { type: "video", src: "https://www.youtube.com/watch?v=bt91NEkW67I" },
    ],
    software: ["Blender"],
    tags: ["Product Visualization", "Product Animation", "Advertising"],
  },
  {
    id: 6,
    slug: "wireless-earphone-animation",
    title: "Wireless Earphone Animation",
    category: "Product Visualization",
    description:
      "A consumer-electronics visualization exploring product form, realistic materials, lighting, and animated presentation.",
    cover: earphone,
    image: earphone,
    overview:
      "A 3D product animation created for wireless earphones. The work explores product modeling, material definition, lighting, camera movement, and commercial presentation.",
    gallery: [
      { type: "image", src: earphone },
      { type: "video", src: "https://www.youtube.com/watch?v=SgTf3V7J5ec" },
    ],
    software: ["Blender"],
    tags: ["Product Visualization", "Product Animation", "Electronics"],
  },
  {
    id: 7,
    slug: "headphone-product-animation",
    title: "Headphone Product Animation",
    category: "Product Visualization",
    description:
      "A product-focused study intended to showcase headphone modeling, materials, lighting, and commercial presentation.",
    cover: "/images/projects/headphone.jpg",
    image: "/images/projects/headphone.jpg",
    overview:
      "A 3D headphone visualization focused on product form, material treatment, lighting, camera composition, and commercial presentation.",
    gallery: [{ type: "image", src: "/images/projects/headphone.jpg" }],
    software: ["Blender"],
    tags: ["Product Visualization", "Consumer Electronics", "3D Rendering"],
  },
  {
    id: 8,
    slug: "drink-can-product-animation",
    title: "Drink Can Product Animation",
    category: "Product Visualization",
    description:
      "A commercial-style drink-can visualization built around product form, materials, lighting, and cinematic composition.",
    cover: mangoJuice,
    image: mangoJuice,
    overview:
      "A 3D drink-can visualization created in Blender. The project explores product modeling, material definition, product lighting, camera composition, and a cinematic advertising presentation.",
    gallery: [
      { type: "image", src: mangoJuice },
      { type: "image", src: "/images/projects/mango-juice-2.jpg" },
      { type: "image", src: "/images/projects/mango-juice-3.jpg" },
    ],
    software: ["Blender"],
    tags: ["Product Visualization", "Advertising", "3D Rendering"],
  },
  {
    id: 9,
    slug: "rigid-body-simulation",
    title: "Rigid Body Simulation",
    category: "Simulation",
    description:
      "A Blender physics study exploring rigid-body dynamics and how solid objects respond to simulated forces.",
    cover: "https://img.youtube.com/vi/DRlvCTHAxSI/hqdefault.jpg",
    image: "https://img.youtube.com/vi/DRlvCTHAxSI/hqdefault.jpg",
    overview:
      "This study uses Blender's rigid-body physics to explore how solid objects move and interact in a simulated scene. The focus is on physical behavior, timing, and presenting the simulation clearly.",
    gallery: [
      { type: "video", src: "https://youtube.com/shorts/DRlvCTHAxSI" },
    ],
    software: ["Blender"],
    tags: ["Rigid Body", "Physics Simulation", "Dynamics"],
  },
  {
    id: 10,
    slug: "material-and-lighting-study",
    title: "Material & Lighting Study",
    category: "Material & Lighting",
    description:
      "An object-rendering study focused on giving everyday forms a lived-in finish through material treatment and deliberate lighting.",
    cover: "https://img.youtube.com/vi/_sNPokdSDsc/hqdefault.jpg",
    image: "https://img.youtube.com/vi/_sNPokdSDsc/hqdefault.jpg",
    overview:
      "The aim was to make these pieces feel used rather than factory-fresh. Lighting was shaped to reveal their rounded forms and surface details, giving the materials more character and depth.",
    gallery: [
      { type: "video", src: "https://youtube.com/shorts/_sNPokdSDsc" },
    ],
    software: ["Blender"],
    tags: ["Material Study", "Lighting", "Product Rendering"],
  },
];
