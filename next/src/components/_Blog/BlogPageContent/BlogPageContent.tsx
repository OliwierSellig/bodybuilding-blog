import styles from './BlogPageContent.module.scss';
import Button from '@/components/ui/Button';
import type { BlogPageContentTypes } from './BlogPageContent.types';
import Markdown from '@/components/ui/Markdown';

export default function BlogPageContent({ content }: BlogPageContentTypes) {
  return (
    <section className={styles.section}>
      <Markdown>{content}</Markdown>
      <nav className={styles.nav}>
        <Button href='/'>Strona główna</Button>
        <Button href='/blog'>Artykuły</Button>
      </nav>
    </section>
  );
}
