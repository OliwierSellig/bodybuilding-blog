import { StaticImageData } from 'next/image';

export type HeroTypes = {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
};
