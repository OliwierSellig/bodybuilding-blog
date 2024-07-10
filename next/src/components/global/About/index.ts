import About from "./About";
export type { AboutTypes } from "./About.types";
export default About;

export const About_Query = `
  _type == "About" => {
    title,
    subtitle
  },
`;
