import SectionHeader from '@/components/ui/SectionHeader';
import styles from './BlogPageHero.module.scss';
import type { BlogPageHeroTypes } from './BlogPageHero.types';
import Markdown from '@/components/ui/Markdown';
import { dateFormat } from '@/utils/date-format';
import Img from '@/components/ui/image';

export default function BlogPageHero({ title, description, createdAt, image }: BlogPageHeroTypes) {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <Markdown.h1>{title}</Markdown.h1>
        <Markdown.p>{description}</Markdown.p>
      </SectionHeader>
      <p className={styles.date}>{dateFormat(createdAt)}</p>
      <Img data={image} sizes='(max-width: 600px) 92vh, (max-width: 900px) 82vh, 800px' />
    </section>
  );
}
