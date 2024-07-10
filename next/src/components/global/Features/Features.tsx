import SectionHeader from "@/components/ui/SectionHeader";
import FeatureItem from "./FeatureItem";
import styles from "./Features.module.scss";
import type { FeaturesTypes } from "./Features.types";

export default function Features({ subtitle, title, list }: FeaturesTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionHeader.Title>{title}</SectionHeader.Title>
        <SectionHeader.Subtitle>{subtitle}</SectionHeader.Subtitle>
      </SectionHeader>
      <ul className={styles.list}>
        {list.map((feature, i) => (
          <FeatureItem {...feature} key={i} />
        ))}
      </ul>
    </section>
  );
}
