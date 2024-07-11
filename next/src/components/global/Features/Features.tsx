import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Features.module.scss';
import type { FeaturesTypes } from './Features.types';
import Image from 'next/image';

export default function Features({ subtitle, title, list }: FeaturesTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </SectionHeader>
      <ul className={styles.list}>
        {list.map(({ title, image, subtitle }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.image}>
              <Image src={image} fill alt='' sizes='(max-width: 610px) 160px, (max-width: 920px) 26vw, 240px' />
            </div>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
