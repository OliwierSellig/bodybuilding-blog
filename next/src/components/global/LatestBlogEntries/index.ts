import { BlogPostItem_Query } from '@/components/ui/BlogPostItem';
import LatestBlogEntries from './LatestBlogEntries';
export type { LatestBlogEntriesTypes } from './LatestBlogEntries.types';
export default LatestBlogEntries;

export const LatestBlogEntries_Query = `
  _type == "LatestBlogEntries" => {
    title,
    subtitle,
    "posts": *[_type == "BlogPost_Collection"] | order(_createdAt desc) [0...3] {
    ${BlogPostItem_Query}
    },
  },
`;
