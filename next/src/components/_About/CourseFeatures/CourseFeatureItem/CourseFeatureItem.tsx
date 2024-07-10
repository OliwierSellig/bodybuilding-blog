import Image from "next/image";
import styles from "./CourseFeatureItem.module.scss";
import type { CourseFeatureItemTypes } from "./CourseFeatureItem.types";

export default function CourseFeatureItem({
  title,
  subtitle,
  image,
}: CourseFeatureItemTypes) {
  return (
    <li className={styles.item}>
      <Image src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </li>
  );
}
