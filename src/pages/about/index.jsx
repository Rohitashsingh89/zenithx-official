// import AboutSection from 'components/Home/About/AboutSection';
import StAboutSection from 'components/Home/About/StAboutSection';
import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';
import { getPageBySlug } from 'lib/posts';
import AboutFeatures from './AboutFeatures';
import Head from 'next/head';

export default function AboutPage({ page }) {
  if (!page) return <p>Page not found</p>;

  return (
    <Layout>
      <Head>
        <title>About - ZenithX Premium Web Development & Hosting</title>
        <meta
          name="description"
          content="Zenith X helps you build fast, beautiful websites with modern hosting, features, and reliable support."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Breadcrumb pageName="About Us" />
      <AboutFeatures />
      <StAboutSection aboutHtmlContent={page?.content || ''} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { page = null } = await getPageBySlug('about');

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page,
      },
      revalidate: 60, // ISR: page 60 seconds ke baad regenerate hoga
    };
  } catch (error) {
    console.error('Error fetching about page:', error);

    return {
      notFound: true,
    };
  }
}
