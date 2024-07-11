import SectionHeader from '@/components/ui/SectionHeader';
import styles from './LatestBlogEntries.module.scss';
import BlogPostItem from '@/components/ui/BlogPostItem';
import { LatestBlogEntriesTypes } from './LatestBlogEntries.types';
import Markdown from '@/components/ui/Markdown';

export default function LatestBlogEntries({ title, subtitle, posts }: LatestBlogEntriesTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <Markdown.h2>{title}</Markdown.h2>
        <Markdown.p>{subtitle}</Markdown.p>
      </SectionHeader>
      <div className='blog-list'>
        {posts.map((entry, i) => (
          <BlogPostItem key={i} {...entry} />
        ))}
      </div>
    </section>
  );
}
