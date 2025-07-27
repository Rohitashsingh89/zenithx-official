// import Link from 'next/link';
// import { Helmet } from 'react-helmet';

// import Layout from 'components/Layout';
// import Section from 'components/Section';
// import Container from 'components/Container';

// import styles from 'styles/pages/Error.module.scss';

// export default function Custom404() {
//   return (
//     <Layout>
//       <Helmet>
//         <title>404 - Page Not Found</title>
//         <meta name="robots" content="noindex, nofollow" />
//       </Helmet>
//       <Section>
//         <Container className={styles.center}>
//           <h1>Page Not Found</h1>
//           <p className={styles.errorCode}>404</p>
//           <p className={styles.errorMessage}>The page you were looking for could not be found.</p>
//           <p>
//             <Link href="/">Go back home</Link>
//           </p>
//         </Container>
//       </Section>
//     </Layout>
//   );
// }

// // Next.js method to ensure a static page gets rendered
// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }

// pages/404.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import { FaBackward } from 'react-icons/fa';

export default function Custom404() {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Section>
        <Container>
          <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
            <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">Page Not Found</h1>

            <Image src="/images/error/404.svg" alt="404 Not Found" width={472} height={152} className="dark:hidden" />
            <Image
              src="/images/error/404-dark.svg"
              alt="404 Not Found"
              width={472}
              height={152}
              className="hidden dark:block"
            />

            <p className="mt-8 text-base text-gray-700 dark:text-gray-400 max-w-xl">
              We couldn’t find the page you were looking for. It may have been moved or deleted.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-900 shadow hover:bg-primary hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-gray-200 transition-colors duration-300"
            >
              <FaBackward className="mr-2" />
              Back to Home
            </Link>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// Static rendering
export async function getStaticProps() {
  return {
    props: {},
  };
}
