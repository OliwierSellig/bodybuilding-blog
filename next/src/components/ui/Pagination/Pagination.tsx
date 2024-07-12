import Link from 'next/link';
import styles from './Pagination.module.scss';
import type { PaginationTypes } from './Pagination.types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// -------- To jest bardzo prosta paginacja, po prostu miała działać na tyle, żeby dało się zmieniać strony i blokować dalsze przejścia jeżeli będzie taka potrzeba.

export default function Pagination({ page, numPosts, postsPerPage }: PaginationTypes) {
  const curPage =
    page && !Number.isNaN(page) && parseInt(page) > 0 && numPosts > postsPerPage * (parseInt(page) - 1)
      ? parseInt(page)
      : 1;
  const canGoPrev = curPage > 1;
  const canGoNext = curPage * postsPerPage < numPosts;

  return (
    <nav className={styles.pagination}>
      {canGoPrev ? (
        <Link className={styles.link} aria-label={`Odwiedź stronę ${curPage - 1}`} href={`/blog?page=${curPage - 1}`}>
          <ChevronLeftIcon />
        </Link>
      ) : (
        <ChevronLeftIcon className={styles.disabled} />
      )}

      {curPage}
      {canGoNext ? (
        <Link className={styles.link} aria-label={`Odwiedź stronę ${curPage + 1}`} href={`/blog?page=${curPage + 1}`}>
          <ChevronRightIcon />
        </Link>
      ) : (
        <ChevronRightIcon className={styles.disabled} />
      )}
    </nav>
  );
}
