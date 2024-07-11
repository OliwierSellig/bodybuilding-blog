import Link from 'next/link';
import styles from './Button.module.scss';
import type { ButtonTypes } from './Button.types';

export default function Button({ children, href = '/' }: ButtonTypes) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
