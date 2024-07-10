import { StaticImageData } from "next/image";

export type CourseFeatureItemTypes = {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
};
