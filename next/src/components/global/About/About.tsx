import Image from 'next/image';
import styles from './About.module.scss';
import Button from '@/components/ui/Button';
import { AboutTypes } from './About.types';

export default function About({ title, subtitle, image }: AboutTypes) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={image} fill alt='Nasz zespół' sizes='(max-width: 760px) 95vw, (max-width: 1280px) 46vw, 584px' />
      </div>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button href='/about'>Więcej o nas</Button>
      </header>
    </section>
  );
}
