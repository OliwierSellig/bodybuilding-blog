import SectionHeader from '@/components/ui/SectionHeader';
import styles from './BlogList.module.scss';
import type { BlogListTypes } from './BlogList.types';
import Markdown from '@/components/ui/Markdown';
import { sanityFetch } from '@/utils/sanity.fetch';
import BlogPostItem, { BlogPostItem_Query, BlogPostItemTypes } from '@/components/ui/BlogPostItem';
import Pagination from '@/components/ui/Pagination';

const POSTS_PER_PAGE = 6;

const query = async (page: number): Promise<{ posts: BlogPostItemTypes[]; numPosts: number }> => {
  return await sanityFetch({
    query: `
      {"posts": *[_type == "BlogPost_Collection"] | order(_createdAt desc) [${POSTS_PER_PAGE * (page - 1)}...${POSTS_PER_PAGE * page}]{
      ${BlogPostItem_Query}
      },
      "numPosts": count(*[_type == "BlogPost_Collection"])}
    `,
    tags: ['BlogPost_Collection'],
  });
};

export default async function BlogList({ title, subtitle, params }: BlogListTypes) {
  const { posts, numPosts } = await query(parseInt(params['page']) || 1);
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
      <Pagination page={params['page']} postsPerPage={POSTS_PER_PAGE} numPosts={numPosts} />
    </section>
  );
}
