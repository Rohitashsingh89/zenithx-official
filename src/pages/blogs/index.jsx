import useSite from 'hooks/use-site';
import { getAllPaginatedPostsWithoutServices } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';
import BlogList from 'components/Home/Blog/BlogList';
import Head from 'next/head';

export default function BlogPage({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <Head>
        <title>ZenithX Blog – Web Design, Development & Hosting Tips</title>
        <meta
          name="description"
          content="Stay updated with the latest in web design, development, hosting strategies and tech insights with the Zenith X blog."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Zenith X Blog – Web Development & Hosting Articles" />
        <meta property="og:description" content="Insights and tutorials from the Zenith X web team." />
        <meta property="og:url" content="https://www.zenithx.com/blog" />
        <meta property="og:image" content="/images/og-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <WebsiteJsonLd siteTitle={title} />
      <Breadcrumb pageName="Blogs" />
      <BlogList posts={posts} pagination={pagination} />
    </Layout>
  );
}
export async function getStaticProps() {
  try {
    const { posts, pagination } = await getAllPaginatedPostsWithoutServices({
      queryIncludes: 'archive',
    });

    return {
      props: {
        posts,
        pagination: {
          ...pagination,
          basePath: '/posts',
        },
      },
      revalidate: 60, // optional, agar ISR chahiye
    };
  } catch (error) {
    console.error('Error fetching posts:', error);

    return {
      props: {
        posts: [],
        pagination: { currentPage: 1, totalPages: 1, basePath: '/posts' },
      },
    };
  }
}
