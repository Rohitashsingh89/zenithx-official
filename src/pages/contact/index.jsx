import Contact from 'components/Home/Contact';
import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';
import { getPageBySlug } from 'lib/posts';
import ContactFeatures from './ContactFeatures';
import Head from 'next/head';

export default function ContactPage({ page }) {
  if (!page) return <p>Page not found</p>;

  return (
    <Layout>
      <Head>
        <title>Contact ZenithX – Let’s Build Your Website</title>
        <meta
          name="description"
          content="Have questions or want to get started? Contact Zenith X for premium web development, hosting, and digital solutions."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) / Social Sharing */}
        <meta property="og:title" content="Contact Zenith X – Let’s Build Your Website" />
        <meta property="og:description" content="Get in touch with the Zenith X team for your next digital project." />
        <meta property="og:url" content="https://www.zenithx.com/contact" />
        <meta property="og:image" content="/images/og-contact.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical (optional but good) */}
        <link rel="canonical" href="https://www.zenithx.com/contact" />
      </Head>
      <Breadcrumb pageName="Contact" />
      <ContactFeatures />

      <Contact />
      {/* <Breadcrumb pageName={page.title} description="Learn more about us." /> */}

      {/* <section className="pt-[60px] pb-[120px]">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6 text-center text-dark dark:text-white">{page.title}</h1>
          <div
            className="prose dark:prose-invert max-w-none mb-8 font-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section> */}
    </Layout>
  );
}
export async function getStaticProps() {
  try {
    const { page } = await getPageBySlug('contact');

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: { page },
      revalidate: 60, // ISR optional
    };
  } catch (error) {
    console.error('Error fetching contact page:', error);
    return {
      notFound: true,
    };
  }
}
