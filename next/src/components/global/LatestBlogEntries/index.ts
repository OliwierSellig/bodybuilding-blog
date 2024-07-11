import LatestBlogEntries from './LatestBlogEntries';
export type { LatestBlogEntriesTypes } from './LatestBlogEntries.types';
export default LatestBlogEntries;

export const LatestBlogEntries_Query = `
  _type == "LatestBlogEntries" => {
    title,
    subtitle
  },
`;
