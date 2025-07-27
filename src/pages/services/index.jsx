import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import Breadcrumb from 'components/common/Breadcrumb';
import { getPaginatedAllServicesPosts } from 'lib/posts';

export default function Services({ services }) {
  const isService = true;
  return (
    <Layout>
      <Breadcrumb pageName="Our Services" />

      <section className="pt-[60px] pb-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.length > 0 ? (
              services.map((post) => <PostCard key={post.slug} post={post} isService={isService} />)
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">No services found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedAllServicesPosts({
    queryIncludes: 'archive',
  });

  return {
    props: {
      services: posts,
      pagination: {
        ...pagination,
        basePath: '/services',
      },
    },
    // Optional: Add revalidate for ISR if you want
    // revalidate: 60,
  };
}
