import { ImgDataQuery } from '@/components/ui/image';
import About from './About';
export type { AboutTypes } from './About.types';
export default About;

export const About_Query = `
  _type == "About" => {
    title,
    subtitle,
    img {
      ${ImgDataQuery}
    }
  },
`;
