import Image from 'next/image';
import styles from './About.module.scss';
import Button from '@/components/ui/Button';
import { AboutTypes } from './About.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/image';

export default function About({ title, subtitle, img }: AboutTypes) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Img data={img} sizes='(max-width: 760px) 95vw, (max-width: 1280px) 46vw, 584px' />
      </div>
      <header className={styles.header}>
        <Markdown.h2>{title}</Markdown.h2>
        <Markdown.p>{subtitle}</Markdown.p>
        <Button href='/about'>Więcej o nas</Button>
      </header>
    </section>
  );
}
