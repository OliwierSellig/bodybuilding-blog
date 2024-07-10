import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "@/components/ui/Button";
import { HeroTypes } from "./Hero.types";

export default function Hero({ title, subtitle, image }: HeroTypes) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          loading="eager"
          src={image}
          alt="Zdjęcie Hero"
          sizes="(max-width: 440px) 280px, (max-width: 768px) 62.5vw, 480px"
        />
      </div>
      <header className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button href="/blog">Odkryj Blog</Button>
      </header>
    </section>
  );
}
