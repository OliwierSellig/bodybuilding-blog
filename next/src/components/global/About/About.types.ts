import { StaticImageData } from "next/image";

export type AboutTypes = {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
};
