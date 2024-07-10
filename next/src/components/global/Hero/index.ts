import Hero from "./Hero";
export type { HeroTypes } from "./Hero.types";

export default Hero;

export const Hero_Query = `
  _type == "Hero" => {
    title,
    subtitle
  },
`;
