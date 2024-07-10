import Components, {
  Components_Query,
  ComponentTypes,
} from "@/components/Components";
import { sanityFetch } from "@/utils/sanity.fetch";

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: `
      *[_type == "Index_Page"][0]{${Components_Query}}
    `,
    tags: ["Index_Page"],
  });
};

export default async function Home() {
  const { content } = await query();
  return <Components data={content} />;
}
