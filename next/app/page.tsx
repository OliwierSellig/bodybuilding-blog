import Components, { Components_Query, ComponentTypes } from '@/components/Components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { sanityFetch } from '@/utils/sanity.fetch';
import { Metadata } from 'next';

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: `
      *[_type == "Index_Page"][0]{${Components_Query}}
    `,
    tags: ['Index_Page'],
  });
};

export const metadata: Metadata = {
  title: {
    absolute: 'Poznaj Zaawansowane Porady i Techniki Treningowe',
  },
};

export default async function Home() {
  const { content } = await query();
  return (
    <>
      <Breadcrumbs visible={false} />
      <Components data={content} />
    </>
  );
}
