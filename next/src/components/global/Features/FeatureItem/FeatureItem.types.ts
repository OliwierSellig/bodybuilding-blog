import { StaticImageData } from 'next/image';

export type FeatureItemTypes = {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
};
