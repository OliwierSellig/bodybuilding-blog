import Components, {
  Components_Query,
  ComponentTypes,
} from "@/components/Components";
import { client } from "@/utils/sanity";

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await client.fetch(`
      *[_type == "Index_Page"][0]{${Components_Query}}
    `);
};

export default async function Home() {
  const { content } = await query();
  return <Components data={content} />;
}
