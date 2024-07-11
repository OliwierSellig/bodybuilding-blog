import Image from 'next/image';
import styles from './BlogPostItem.module.scss';
import type { BlogPostItemTypes } from './BlogPostItem.types';
import Button from '../Button';
import Img from '../image';

export default function BlogPostItem({ title, description, slug, image }: BlogPostItemTypes) {
  return (
    <article className={styles.article}>
      <Img
        data={image}
        sizes='(max-width: 410px) 95vw, (max-width: 680px) 360px, (max-width: 920px) 280px, (max-width: 1280px) 30vw, 384px'
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button href={`/blog/${slug}`}>Przeczytaj więcej</Button>
      </div>
    </article>
  );
}
