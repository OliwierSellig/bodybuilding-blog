import { ImgDataTypes } from '@/components/ui/image';
import { StaticImageData } from 'next/image';

export type FeaturesTypes = {
  title: string;
  subtitle: string;
  list: {
    title: string;
    subtitle: string;
    img: ImgDataTypes;
  }[];
};
