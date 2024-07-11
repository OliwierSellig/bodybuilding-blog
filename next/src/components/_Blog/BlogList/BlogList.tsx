import SectionHeader from '@/components/ui/SectionHeader';
import styles from './BlogList.module.scss';
import type { BlogListTypes } from './BlogList.types';
import Markdown from '@/components/ui/Markdown';
import { sanityFetch } from '@/utils/sanity.fetch';
import BlogPostItem, { BlogPostItem_Query, BlogPostItemTypes } from '@/components/ui/BlogPostItem';

const query = async (): Promise<BlogPostItemTypes[]> => {
  return await sanityFetch({
    query: `
      *[_type == "BlogPost_Collection"] | order(_createdAt desc) [0...6]{
    ${BlogPostItem_Query}
  }
    `,
    tags: ['BlogPost_Collection'],
  });
};

export default async function BlogList({ title, subtitle }: BlogListTypes) {
  const posts = await query();
  console.log(posts);
  return (
    <section className={styles.section}>
      <SectionHeader>
        <Markdown.h1>{title}</Markdown.h1>
        <Markdown.p>{subtitle}</Markdown.p>
      </SectionHeader>
      <div className='blog-list'>
        {posts.map((post, i) => (
          <BlogPostItem {...post} key={i} />
        ))}
      </div>
    </section>
  );
}
