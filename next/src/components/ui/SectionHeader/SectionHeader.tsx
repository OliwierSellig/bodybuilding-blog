import styles from './SectionHeader.module.scss';
import type { SectionHeaderTypes } from './SectionHeader.types';

export default function SectionHeader({ children }: SectionHeaderTypes) {
  return <header className={styles.header}>{children}</header>;
}
