import { Fragment } from 'react';
import styles from './Breadcrumbs.module.scss';
import type { BreadcrumbsTypes } from './Breadcrumbs.types';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

export default function Breadcrumbs({ data = [], visible = true }: BreadcrumbsTypes) {
  data = [
    {
      name: 'Strona główna',
      path: '/',
    },
    ...data,
  ];
  return (
    <>
      <BreadcrumbsSchema data={data} />
      {visible && data.length >= 2 && (
        <nav className={styles.nav}>
          {data.map(({ name, path }, i) => {
            const isLastItem = i === data.length - 1;
            return (
              <Fragment key={i}>
                {!isLastItem ? (
                  <Link href={path} className={styles.item}>
                    {name}
                  </Link>
                ) : (
                  <span className={styles.item}>{name}</span>
                )}
                {!isLastItem && <ChevronRightIcon />}
              </Fragment>
            );
          })}
        </nav>
      )}
    </>
  );
}
