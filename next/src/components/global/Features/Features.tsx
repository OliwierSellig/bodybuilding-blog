import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Features.module.scss';
import type { FeaturesTypes } from './Features.types';
import Image from 'next/image';
import Markdown from '@/components/ui/Markdown';

export default function Features({ subtitle, title, list }: FeaturesTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <Markdown.h2>{title}</Markdown.h2>
        <Markdown.p>{subtitle}</Markdown.p>
      </SectionHeader>
      <ul className={styles.list}>
        {list.map(({ title, image, subtitle }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.image}>
              <Image src={image} fill alt='' sizes='(max-width: 610px) 160px, (max-width: 920px) 26vw, 240px' />
            </div>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <Markdown.p>{subtitle}</Markdown.p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
