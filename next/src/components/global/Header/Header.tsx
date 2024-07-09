import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/img/logo.png";
import Link from "next/link";

const links = [
  { title: "O nas", href: "/about" },
  { title: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} max-width`}>
        <Link href="/" className={styles.row}>
          <div className={styles.image}>
            <Image
              src={logo}
              alt="Brand Logo"
              fill
              sizes="(max-width: 640px) 62px, (max-width: 768px) 68px, 80px"
            />
          </div>
          <p className={styles.title}>Bodybuilding Blog</p>
        </Link>
        <nav className={styles.nav}>
          {links.map(({ href, title }, i) => (
            <Link className={styles.link} href={href}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
