import {
  Human,
  walkCycleImage,
  mangoJuice,
  clothSimulationUpdated,
  CatCartoon,
  nivea,
  earphone,
  headphoneProduct,
  hammerAngleOne,
  hammerAngleTwo,
  watermelonMaterial,
  woodMaterial,
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
    title: "Human Modeling",
    category: "Character",
    description:
      "A low-poly human character modeling study focused on form, proportions, and silhouette.",
    cover: Human,
    image: Human,
    overview:
      "A human character model created in Blender, presented in a neutral pose to show its overall form and proportions. This project focuses on the character modeling work, separately from the walk-cycle animation.",
    gallery: [{ type: "image", src: Human }],
    software: ["Blender"],
    tags: ["Human Modeling", "Character", "3D Modeling"],
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
    cover: hammerAngleOne,
    image: hammerAngleOne,
    overview:
      "A hard-surface model created in Blender to practice clean forms, proportions, topology, and the presentation of a familiar everyday object.",
    gallery: [
      { type: "image", src: hammerAngleOne },
      { type: "image", src: hammerAngleTwo },
    ],
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
    cover: clothSimulationUpdated,
    image: clothSimulationUpdated,
    overview:
      "Created in Blender, this study explores cloth behavior and the way fabric responds to simulation settings. The focus is on the resulting folds, drape, and sense of movement.",
    gallery: [
      { type: "image", src: clothSimulationUpdated },
      { type: "video", src: "https://youtube.com/shorts/IDNIdUD7pz0" },
    ],
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
      "A cinematic 3D headphone product animation highlighting the sculpted form, materials, and lighting of the design.",
    cover: headphoneProduct,
    image: headphoneProduct,
    overview:
      "This headphone product animation presents the design through a polished render and moving visuals. The accompanying still highlights the form and lighting, while the embedded video shows the animation in motion.",
    gallery: [
      { type: "video", src: "https://youtube.com/shorts/eMSvnfB06jA" },
      { type: "image", src: headphoneProduct },
    ],
    software: ["Blender"],
    tags: ["Product Visualization", "Headphone Animation", "3D Rendering"],
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
  {
    id: 11,
    slug: "walk-cycle-animation",
    title: "Walk Cycle Animation",
    category: "Character",
    description:
      "A rigged Blender character brought to life through a walk-cycle animation, with an emphasis on leg movement, posing, and timing.",
    cover: walkCycleImage,
    image: walkCycleImage,
    overview:
      "A character animation study using a rigged model to create a repeating walk cycle. The accompanying still shows the character's rig controls and walking pose; the video demonstrates the resulting animation.",
    gallery: [
      { type: "video", src: "https://youtu.be/YQpVutKlswo" },
      { type: "image", src: walkCycleImage },
    ],
    software: ["Blender"],
    tags: ["Walk Cycle", "Character Rigging", "Animation"],
  },
  {
    id: 12,
    slug: "watermelon-material-study",
    title: "Watermelon Material Study",
    category: "Material & Lighting",
    description:
      "A stylized watermelon surface study exploring green color variation, striped patterning, and a rendered fruit form.",
    cover: watermelonMaterial,
    image: watermelonMaterial,
    overview:
      "An exploration of a watermelon-inspired material on a three-dimensional form. The render emphasizes green stripes, color variation, and how the surface responds to light.",
    gallery: [{ type: "image", src: watermelonMaterial }],
    software: ["Blender"],
    tags: ["Material Study", "Texturing", "Organic Surface"],
  },
  {
    id: 13,
    slug: "wood-texture-material-study",
    title: "Wood Texture Material Study",
    category: "Material & Lighting",
    description:
      "A wood-surface study presenting grain, color variation, and reflected light across simple geometric forms.",
    cover: woodMaterial,
    image: woodMaterial,
    overview:
      "A material and lighting study featuring wood grain on a sphere and a rectangular object. It compares how surface pattern and highlights read across curved and flat forms.",
    gallery: [{ type: "image", src: woodMaterial }],
    software: ["Blender"],
    tags: ["Wood Texture", "Materials", "Lighting"],
  },
];
