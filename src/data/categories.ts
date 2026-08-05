export const categories = [

"All",

"Character",

"Hard Surface",

"Simulation",

"Animation",

] as const;

export type Category =
typeof categories[number];