import Image from 'next/image';
import styles from './FeatureItem.module.scss';
import type { FeatureItemTypes } from './FeatureItem.types';

export default function FeatureItem({ title, subtitle, image }: FeatureItemTypes) {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image src={image} fill alt='' sizes='(max-width: 610px) 160px, (max-width: 920px) 26vw, 240px' />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </li>
  );
}
