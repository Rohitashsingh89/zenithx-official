import Link from 'next/link';

import config from '../../../package.json';
import { Helmet } from 'react-helmet';

import { GrPrevious as PreviousIcon, GrNext as NextIcon } from 'react-icons/gr';
import { HiOutlineDotsHorizontal as Dots } from 'react-icons/hi';
// import styles from './Pagination.module.scss';

const MAX_NUM_PAGES = 2;

const { homepage = '' } = config;

const Pagination = ({ pagesCount, currentPage, basePath, addCanonical = true }) => {
  const path = `${basePath}/page/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  let hasPrevDots = false;
  let hasNextDots = false;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    // If the number of pages exceeds the max
    if (pagesCount > MAX_NUM_PAGES) {
      // Set number of pages to the max
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      hasNextDots = !isTail;
      // If the current page is at the head, the start variable remains 0
      if (!isHead) {
        hasPrevDots = true;
        // If the current page is at the tail, the start variable is set to
        // the last chunk. Otherwise the start variable will place the current
        // page at the middle
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

  return (
    <>
      <Helmet>
        {addCanonical && !hasPreviousPage && <link rel="canonical" href={`${homepage}${basePath}`} />}
        {hasPreviousPage && <link rel="prev" href={`${homepage}${path}${currentPage - 1}`} />}
        {hasNextPage && <link rel="next" href={`${homepage}${path}${currentPage + 1}`} />}
      </Helmet>
      {/* 
      <nav className={styles.nav} role="navigation" aria-label="Pagination Navigation">
        {hasPreviousPage && (
          <Link className={styles.prev} href={`${path}${currentPage - 1}`} aria-label="Goto Previous Page">
            <PreviousIcon /> Previous
          </Link>
        )}

        <ul className={styles.pages}>
          {hasPrevDots && (
            <li className={styles.dots}>
              <Dots aria-label={`Navigation to pages 1-${pages[0] - 1} hidden`} />
            </li>
          )}
          {pages.map((page) => {
            const active = page === currentPage;
            return active ? (
              <li key={page}>
                <span className={styles.active} aria-label={`Current Page, Page ${page}`} aria-current="true">
                  {page}
                </span>
              </li>
            ) : (
              <li key={page}>
                <Link href={`${path}${page}`} aria-label={`Goto Page ${page}`}>
                  <span>{page}</span>
                </Link>
              </li>
            );
          })}
          {hasNextDots && (
            <li className={styles.dots}>
              <Dots aria-label={`Navigation to pages ${pages[pages.length - 1] + 1}-${pagesCount} hidden`} />
            </li>
          )}
        </ul>

        {hasNextPage && (
          <Link className={styles.next} href={`${path}${currentPage + 1}`} aria-label="Goto Next Page">
            Next <NextIcon />
          </Link>
        )}
      </nav> */}

      <nav className="mt-10 flex justify-center items-center" aria-label="Pagination Navigation">
        <ul className="inline-flex items-center space-x-1 text-sm">
          {hasPreviousPage && (
            <li>
              <Link
                href={`${path}${currentPage - 1}`}
                className="px-3 h-8 flex items-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05] rounded"
                aria-label="Previous Page"
              >
                <PreviousIcon className="mr-1" /> Prev
              </Link>
            </li>
          )}

          {hasPrevDots && (
            <li className="px-3 h-8 flex items-center justify-center text-gray-400">
              <Dots />
            </li>
          )}

          {pages.map((page) => {
            const isActive = page === currentPage;
            return (
              <li key={page}>
                <Link
                  href={`${path}${page}`}
                  className={`px-3 h-8 flex items-center justify-center border ${
                    isActive
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-gray-600 dark:text-gray-400 dark:bg-gray-900 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/[0.05]'
                  } rounded`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {page}
                </Link>
              </li>
            );
          })}

          {hasNextDots && (
            <li className="px-3 h-8 flex items-center justify-center text-gray-400">
              <Dots />
            </li>
          )}

          {hasNextPage && (
            <li>
              <Link
                href={`${path}${currentPage + 1}`}
                className="px-3 h-8 flex items-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05] rounded"
                aria-label="Next Page"
              >
                Next <NextIcon className="ml-1" />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
