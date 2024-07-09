import Image from "next/image";
import styles from "./FeatureItem.module.scss";
import type { FeatureItemTypes } from "./FeatureItem.types";

export default function FeatureItem({
  title,
  subtitle,
  image,
}: FeatureItemTypes) {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image src={image} fill alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </li>
  );
}
