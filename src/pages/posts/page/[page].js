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
        basePath: '/posts',
      },
    },
  };
}

export async function getStaticPaths() {
  // Uncomment and use the code below if you want to pre-render pagination pages

  /*
  import { getAllPosts, getPagesCount } from 'lib/posts';

  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });

  const pagesCount = await getPagesCount(posts);

  const paths = Array.from({ length: pagesCount }, (_, i) => ({
    params: { page: String(i + 1) },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
  */

  // By default, don't pre-render any pagination pages
  return {
    paths: [],
    fallback: 'blocking',
  };
}
