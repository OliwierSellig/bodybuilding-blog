import Image from "next/image";
import styles from "./BlogPostItem.module.scss";
import type { BlogPostItemTypes } from "./BlogPostItem.types";
import Button from "../Button";

export default function BlogPostItem({
  title,
  description,
  slug,
  image,
}: BlogPostItemTypes) {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <Image alt="" src={image} fill />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button href={`/blog/${slug}`}>Przeczytaj więcej</Button>
      </div>
    </article>
  );
}
