export interface Skill {
  title: string;

  level: number;

  experience: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
  {
    title: "Character Modeling",

    level: 80,

    experience: "Intermediate",
  },

  {
    title: "Hard Surface",

    level: 80,

    experience: "Intermediate",
  },

  {
    title: "Animation",

    level: 80,

    experience: "Intermediate",
  },

  {
    title: "Simulation",

    level: 85,

    experience: "Intermediate",
  },
];


export const software = [

"Blender",

// "Photoshop",

// "Substance Painter",

// "Unreal Engine",

];