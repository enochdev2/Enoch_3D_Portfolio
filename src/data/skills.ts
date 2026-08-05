export interface Skill {
  title: string;

  level: number;

  experience: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
  {
    title: "Character Modeling",

    level: 65,

    experience: "Beginner",
  },

  {
    title: "Hard Surface",

    level: 80,

    experience: "Intermediate",
  },

  {
    title: "Animation",

    level: 45,

    experience: "Beginner",
  },

  {
    title: "Simulation",

    level: 85,

    experience: "Intermediate",
  },
];


export const software = [

"Blender",

"Photoshop",

"Substance Painter",

"Unreal Engine",

];