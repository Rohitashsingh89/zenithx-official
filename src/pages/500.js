import Link from 'next/link';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import { FaBackward } from 'react-icons/fa';
import Image from 'next/image';

export default function Custom500() {
  return (
    <Layout>
      <Helmet>
        <title>500 - Internal Server Error</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Section>
        <Container>
          <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
            <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">500 - Internal Server Error</h1>

            {/* Light theme image */}
            <Image
              src="/images/error/500.svg"
              alt="500 Internal Server Error"
              width={472}
              height={152}
              className="dark:hidden"
            />

            {/* Dark theme image */}
            <Image
              src="/images/error/500-dark.svg"
              alt="500 Internal Server Error Dark"
              width={472}
              height={152}
              className="hidden dark:block"
            />

            <p className="mt-8 text-base text-gray-700 dark:text-gray-400 max-w-xl">
              Something went wrong on our end. We&apos;re working to fix it as soon as possible.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-900 shadow transition-colors duration-300 hover:bg-primary hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
