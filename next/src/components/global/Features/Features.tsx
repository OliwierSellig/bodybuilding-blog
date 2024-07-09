import FeatureItem from "./FeatureItem";
import styles from "./Features.module.scss";
import type { FeaturesTypes } from "./Features.types";
import feat1 from "@/public/img/feat1.png";
import feat2 from "@/public/img/feat2.png";
import feat3 from "@/public/img/feat3.png";

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

export default function Features({}: FeaturesTypes) {
  return (
    <div className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Dlaczego Warto Czytać <strong>Naszego Bloga?</strong>
        </h2>
        <p className={styles.subtitle}>
          Zobacz, jak nasz blog może wzbogacić Twoją wiedzę, poprawić wyniki
          treningowe i dostarczyć inspiracji na każdym etapie Twojej
          kulturystycznej podróży.
        </p>
      </header>
      <ul className={styles.list}>
        {features.map((feature, i) => (
          <FeatureItem {...feature} />
        ))}
      </ul>
    </div>
  );
}
