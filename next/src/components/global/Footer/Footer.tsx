import Link from 'next/link';
import styles from './Footer.module.scss';

const links = [
  { title: 'Polityka Prywatności', href: '/' },
  { title: 'Regulamin', href: '/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} max-width`}>
        <p className={styles.created}>
          Stworzone przez <a href='https://github.com/OliwierSellig'>Oliwier Sellig</a>
        </p>
        <nav className={styles.nav}>
          {links.map(({ title, href }, i) => (
            <Link className={styles.link} href={href} key={i}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
