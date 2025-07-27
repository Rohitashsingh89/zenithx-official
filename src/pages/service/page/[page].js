import { getAllPaginatedPostsWithoutServices } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';

import TemplateArchive from 'templates/archive';

export default function Posts({ posts, pagination }) {
  const title = `All Posts`;
  const slug = 'posts';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: `Page ${pagination.currentPage}`,
    },
  });

  return <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} />;
}
export async function getStaticProps({ params = {} } = {}) {
  const currentPage = params.page ? Number(params.page) : 1;

  const { posts, pagination } = await getAllPaginatedPostsWithoutServices({
    currentPage,
    queryIncludes: 'archive',
  });

  if (!pagination?.currentPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/services',
      },
    },
    // Optionally, you can add revalidate for ISR
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  // Uncomment and adjust to pre-render pagination pages if needed

  /*
  import { getAllPosts, getPagesCount } from 'lib/posts';

  const { posts } = await getAllPosts({ queryIncludes: 'index' });
  const pagesCount = await getPagesCount(posts);

  const paths = Array.from({ length: pagesCount }, (_, i) => ({
    params: { page: String(i + 1) },
  }));
  */

  return {
    paths: [], // Replace with paths variable if you enable pre-rendering above
    fallback: 'blocking',
  };
}
