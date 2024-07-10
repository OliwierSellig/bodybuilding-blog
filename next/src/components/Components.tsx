import About, { About_Query, AboutTypes } from "./global/About";
import Features, { Features_Query, FeaturesTypes } from "./global/Features";
import Hero, { Hero_Query, HeroTypes } from "./global/Hero";
import LatestBlogEntries, {
  LatestBlogEntries_Query,
  LatestBlogEntriesTypes,
} from "./global/LatestBlogEntries";

type componentsMapTypes = {
  Hero: HeroTypes;
  Features: FeaturesTypes;
  LatestBlogArticles: LatestBlogEntriesTypes;
  About: AboutTypes;
};

export type ComponentTypes = componentsMapTypes[keyof componentsMapTypes] & {
  _type: string;
};

export default function Components({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, i) => {
    const componentType = item._type as keyof componentsMapTypes;
    const componentsMapTypes: Record<string, React.ReactNode> = {
      Hero: <Hero {...(item as HeroTypes)} />,
      Features: <Features {...(item as FeaturesTypes)} />,
      About: <About {...(item as AboutTypes)} />,
      LatestBlogEntries: (
        <LatestBlogEntries {...(item as LatestBlogEntriesTypes)} />
      ),
    };
    const DynamicComponent = componentsMapTypes[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
}

export const Components_Query = /* groq */ `
  content[]{
    _type,
    ${Hero_Query}
    ${Features_Query}
    ${About_Query}
    ${LatestBlogEntries_Query}
  },
`;
