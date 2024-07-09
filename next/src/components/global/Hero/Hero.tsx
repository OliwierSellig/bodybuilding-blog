import Image from "next/image";
import styles from "./Hero.module.scss";
import type { HeroTypes } from "./Hero.types";
import Button from "@/components/ui/Button";
import heroImage from "@/public/img/hero.png";

export default function Hero({}: HeroTypes) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={heroImage} alt="Zdjęcie Hero" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Zaawansowana Kulturystyka:{" "}
          <strong>Twoje Źródło Inspiracji i Wiedzy</strong>
        </h1>
        <p>
          Odkryj zaawansowane techniki treningowe, sprawdzone strategie
          dietetyczne i motywacyjne porady, które pomogą Ci osiągnąć szczytowe
          wyniki w kulturystyce. Gotowy na przekroczenie własnych granic?
        </p>
        <Button>Odkryj Blog</Button>
      </div>
    </section>
  );
}