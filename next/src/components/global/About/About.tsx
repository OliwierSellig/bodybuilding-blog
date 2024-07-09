import Image from "next/image";
import styles from "./About.module.scss";
import about from "@/public/img/about.png";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={about}
          fill
          alt="Nasz zespół"
          sizes="(max-width: 760px) 95vw, (max-width: 1280px) 46vw, 584px"
        />
      </div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Poznaj Zespół <strong>Ekspertów i Pasjonatów</strong> Kulturystyki
        </h2>
        <p className={styles.subtitle}>
          Poznaj naszą misję i zespół pasjonatów kulturystyki, którzy dzielą się
          swoją wiedzą i doświadczeniem, aby pomóc Ci osiągnąć maksymalne wyniki
          w Twojej sportowej podróży.
        </p>
        <Button href="/about">Więcej o nas</Button>
      </header>
    </section>
  );
}
