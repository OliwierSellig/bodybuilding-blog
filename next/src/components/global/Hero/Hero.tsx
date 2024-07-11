import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from '@/components/ui/Button';
import { HeroTypes } from './Hero.types';
import Markdown from '@/components/ui/Markdown';

export default function Hero({ title, subtitle, image }: HeroTypes) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          loading='eager'
          src={image}
          fill
          alt='Zdjęcie Hero'
          sizes='(max-width: 440px) 280px, (max-width: 768px) 62.5vw, 480px'
        />
      </div>
      <header className={styles.content}>
        <Markdown.h2>{title}</Markdown.h2>
        <Markdown.p>{subtitle}</Markdown.p>
        <Button href='/blog'>Odkryj Blog</Button>
      </header>
    </section>
  );
}
