import { PortableText } from 'next-sanity';
import styles from './BlogPageContent.module.scss';
import type { BlogPageContentTypes } from './BlogPageContent.types';
import Markdown from '@/components/ui/Markdown';

export default function BlogPageContent({ content }: BlogPageContentTypes) {
  return (
    <section className={styles.section}>
      <Markdown>{content}</Markdown>
    </section>
  );
}
