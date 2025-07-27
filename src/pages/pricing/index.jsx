import PricingSection from 'components/Home/Pricing/PricingSection';
import Layout from 'components/Layout';
import { getPageBySlug } from 'lib/posts';
import FeaturedSection from './FeaturedSection';
import Breadcrumb from 'components/common/Breadcrumb';
import Head from 'next/head';

export default function PricingPage({ page }) {
  return (
    <Layout>
      <Head>
        <title>ZenithX Pricing - Affordable Plans for Web Design & Hosting</title>
        <meta
          name="description"
          content="Choose from affordable and scalable pricing plans at Zenith X. Get premium website development and reliable hosting to suit any business size."
        />
        <meta name="robots" content="index, follow" />

        {/* Optional Open Graph tags */}
        <meta property="og:title" content="Zenith X Pricing - Web Design & Hosting Plans" />
        <meta
          property="og:description"
          content="Explore pricing for custom web design, development & lightning-fast hosting."
        />
        <meta property="og:url" content="https://www.zenithx.com/pricing" />
        <meta property="og:image" content="/images/og-pricing.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Breadcrumb pageName="Pricing" />
      <FeaturedSection />
      <PricingSection htmlContent={page?.content || ''} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { page } = await getPageBySlug('pricing');

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
    revalidate: 60, // ISR optional
  };
}
