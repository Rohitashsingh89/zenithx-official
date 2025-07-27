// import AboutSection from 'components/Home/About/AboutSection';
// import Brands from 'components/Home/Brands';
import Contact from 'components/Home/Contact';
// import Video from 'components/Home/Video';
import Layout from 'components/Layout';
import ScrollUp from 'components/common/ScrollUp';
import { getAllPaginatedPostsWithoutServices, getPageBySlug } from 'lib/posts';
import BlogList from 'components/Home/Blog/BlogList';
import PricingSection from 'components/Home/Pricing/PricingSection';
import TestimonialsDynamicSection from 'components/Home/Testimonials/TestimonialsSection';
import HeroSection from 'components/Home/Hero/HeroSection';
import About from 'components/Home/About/About';
// import WhatWeDo from 'components/Home/Components/WhatWeDo';
// import Feature from 'components/Home/Features/Feature';
import Head from 'next/head';
import FeaturesSection from 'components/Home/Features/FeatureSection';
import FaqSection from 'components/Home/Faq/FaqSection';

export default function Home({ page, posts, hero, faq, testimonials, features }) {
  return (
    <>
      <Head>
        <title>ZenithX - Premium Web Development & Hosting</title>
        <meta
          name="description"
          content="Zenith X helps you build fast, beautiful websites with modern hosting, features, and reliable support."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <ScrollUp />
        <HeroSection heroHtmlContent={hero?.content || ''} />
        <About />
        {/* <WhatWeDo /> */}
        {/* <Feature /> */}
        <FeaturesSection featuresHtmlContent={features?.content || ''} />
        {/* <Video /> */}
        {/* <Brands /> */}
        {/* <AboutSection aboutHtmlContent={about?.content || ''} /> */}
        <TestimonialsDynamicSection htmlContent={testimonials || ''} />
        <PricingSection htmlContent={page?.content || ''} showTitle={true} />
        <BlogList posts={posts.slice(0, 3)} showTitle={true} />
        <FaqSection faqHtmlContent={faq?.content || ''} />
        <Contact />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { posts = [] } = await getAllPaginatedPostsWithoutServices({
      queryIncludes: 'archive',
    });

    const { page = null } = await getPageBySlug('pricing');
    const { page: about = null } = await getPageBySlug('about');
    const { page: hero = null } = await getPageBySlug('hero');
    const { page: features = null } = await getPageBySlug('features');
    const { page: faq = null } = await getPageBySlug('faq');
    const testimonialResult = await getPageBySlug('testimonials');

    return {
      props: {
        posts,
        page,
        about,
        hero,
        features,
        faq,
        testimonials: testimonialResult?.page?.content || null,
      },
    };
  } catch (error) {
    console.error('Error fetching data in getStaticProps:', error);

    // Return empty or fallback props so that build doesn't fail
    return {
      props: {
        posts: [],
        page: null,
        about: null,
        hero: null,
        features: null,
        faq: null,
        testimonials: null,
      },
    };
  }
}
