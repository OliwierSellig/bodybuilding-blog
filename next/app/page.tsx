import About from "@/components/global/About";
import Features from "@/components/global/Features";
import Hero from "@/components/global/Hero";
import LatestBlogEntries from "@/components/global/LatestBlogEntries";
import heroImage from "@/public/img/hero.png";
import about from "@/public/img/about.png";
import feat1 from "@/public/img/feat1.png";
import feat2 from "@/public/img/feat2.png";
import feat3 from "@/public/img/feat3.png";
import Components, {
  Components_Query,
  ComponentTypes,
} from "@/components/Components";
import { client } from "@/utils/sanity";

const features = [
  {
    image: feat1,
    title: "Profesjonalne Porady i Artykuły",
    subtitle:
      "Nasz zespół składa się z doświadczonych kulturystów i trenerów, którzy dzielą się sprawdzoną wiedzą i praktycznymi poradami.",
  },
  {
    image: feat2,
    title: "Zaawansowane Techniki Treningowe",
    subtitle:
      "Oferujemy szczegółowe artykuły na temat najnowszych i najbardziej efektywnych metod treningowych, które pomogą Ci osiągnąć nowe poziomy siły i masy mięśniowej.",
  },
  {
    image: feat3,
    title: "Motywacyjne Wsparcie",
    subtitle:
      "Dzielimy się inspirującymi historiami sukcesu i technikami motywacyjnymi, które pomogą Ci zachować zaangażowanie w dążeniu do swoich kulturystycznych celów.",
  },
];
const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await client.fetch(`
      *[_type == "Index_Page"][0]{${Components_Query}}
    `);
};

export default async function Home() {
  const { content } = await query();
  console.log(content);
  return (
    // <>
    //   <Hero
    //     title="Zaawansowana Kulturystyka: Twoje Źródło Inspiracji i Wiedzy"
    //     subtitle="Odkryj zaawansowane techniki treningowe, sprawdzone strategie dietetyczne i motywacyjne porady, które pomogą Ci osiągnąć szczytowe wyniki w kulturystyce. Gotowy na przekroczenie własnych granic?"
    //     image={heroImage}
    //   />
    //   <Features
    //     title="Dlaczego Warto Czytać Naszego Bloga?"
    //     subtitle="Zobacz, jak nasz blog może wzbogacić Twoją wiedzę, poprawić wyniki
    //       treningowe i dostarczyć inspiracji na każdym etapie Twojej
    //       kulturystycznej podróży."
    //     features={features}
    //   />
    //   <LatestBlogEntries
    //     title="Świeże wpisy i aktualne porady"
    //     subtitle="Sprawdź nasze najnowsze artykuły pełne aktualnych porad, zaawansowanych technik treningowych i nowinek ze świata kulturystyki."
    //   />
    //   <About
    //     image={about}
    //     title="Poznaj Zespół Ekspertów i Pasjonatów Kulturystyki"
    //     subtitle="Poznaj naszą misję i zespół pasjonatów kulturystyki, którzy dzielą się swoją wiedzą i doświadczeniem, aby pomóc Ci osiągnąć maksymalne wyniki w Twojej sportowej podróży."
    //   />
    // </>
    <Components data={content} />
  );
}
