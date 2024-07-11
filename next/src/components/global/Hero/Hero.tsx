import styles from './Hero.module.scss';
import Button from '@/components/ui/Button';
import { HeroTypes } from './Hero.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/image';

export default function Hero({ title, subtitle, img }: HeroTypes) {
  return (
    <section className={styles.section}>
      <Img data={img} sizes='(max-width: 440px) 280px, (max-width: 768px) 62.5vw, 480px' priority />
      <header className={styles.content}>
        <Markdown.h2>{title}</Markdown.h2>
        <Markdown.p>{subtitle}</Markdown.p>
        <Button href='/blog'>Odkryj Blog</Button>
      </header>
    </section>
  );
}
