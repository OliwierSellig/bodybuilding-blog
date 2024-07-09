import { StaticImageData } from "next/image";

export type BlogPostItemTypes = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData | string;
};
