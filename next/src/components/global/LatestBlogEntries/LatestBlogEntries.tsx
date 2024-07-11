import SectionHeader from '@/components/ui/SectionHeader';
import styles from './LatestBlogEntries.module.scss';
import art1 from '@/public/img/art1.jpg';
import art2 from '@/public/img/art2.jpg';
import art3 from '@/public/img/art3.jpg';
import BlogPostItem from '@/components/ui/BlogPostItem';
import { LatestBlogEntriesTypes } from './LatestBlogEntries.types';

const latestEntries = [
  {
    title: 'Zaawansowane Techniki Treningowe w Kulturystyce',
    slug: 'zaawansowane-techniki-treningowe-w-kulturystyce',
    description:
      'Poznaj zaawansowane techniki treningowe, które pomogą Ci przekroczyć plateau i osiągnąć nowe poziomy siły i masy mięśniowej.',
    image: art1,
  },
  {
    title: 'Rola Dietoterapii w Zaawansowanej Kulturystyce',
    slug: 'rola-dietoterapii-w-zaawansowanej-kulturystyce',
    description:
      'Dieta jest kluczowym elementem w kulturystyce. Dowiedz się, jakie strategie żywieniowe mogą pomóc zaawansowanym kulturystom w osiągnięciu optymalnych wyników.',
    image: art2,
  },
  {
    title: 'Mentalne Aspekty Kulturystyki: Jak Pozostać Zmotywowanym',
    slug: 'mentalne-aspekty-kulturystyki-jak-pozostac-zmotywowanym',
    description:
      'Motywacja jest kluczowa w kulturystyce. Odkryj sprawdzone strategie, które pomogą Ci utrzymać wysoki poziom zaangażowania i motywacji.',
    image: art3,
  },
];

export default function LatestBlogEntries({ title, subtitle }: LatestBlogEntriesTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </SectionHeader>
      <div className={styles.list}>
        {latestEntries.map((entry, i) => (
          <BlogPostItem key={i} {...entry} />
        ))}
      </div>
    </section>
  );
}
