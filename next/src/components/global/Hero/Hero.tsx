import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "@/components/ui/Button";
import heroImage from "@/public/img/hero.png";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={heroImage}
          alt="Zdjęcie Hero"
          sizes="(max-width: 440px) 280px, (max-width: 768px) 62.5vw, 480px"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Zaawansowana Kulturystyka:{" "}
          <strong>Twoje Źródło Inspiracji i Wiedzy</strong>
        </h1>
        <p className={styles.paragraph}>
          Odkryj zaawansowane techniki treningowe, sprawdzone strategie
          dietetyczne i motywacyjne porady, które pomogą Ci osiągnąć szczytowe
          wyniki w kulturystyce. Gotowy na przekroczenie własnych granic?
        </p>
        <Button href="/blog">Odkryj Blog</Button>
      </div>
    </section>
  );
}
