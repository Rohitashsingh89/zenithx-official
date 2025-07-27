import { getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';

import TemplateArchive from 'templates/archive';
import Title from 'components/Title';

export default function Category({ category, posts }) {
  const { name, description, slug } = category;

  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  return <TemplateArchive title={name} Title={<Title title={name} />} posts={posts} slug={slug} metadata={metadata} />;
}
export async function getStaticProps({ params = {} } = {}) {
  try {
    const { category } = await getCategoryBySlug(params?.slug);

    if (!category) {
      return {
        notFound: true,
      };
    }

    const { posts } = await getPostsByCategoryId({
      categoryId: category.databaseId,
      queryIncludes: 'archive',
    });

    return {
      props: {
        category,
        posts,
      },
      revalidate: 60, // optional, ISR ke liye
    };
  } catch (error) {
    console.error('Error fetching category or posts:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  // Agar aap chahte hain ke categories pre-render hoon, toh neeche wali lines uncomment karen

  // import { getAllCategories } from 'lib/categories';
  // const { categories } = await getAllCategories();

  // const paths = categories.map((category) => ({
  //   params: { slug: category.slug },
  // }));

  return {
    paths: [], // ya agar pre-render karna hai to paths variable use karein
    fallback: 'blocking', // 'blocking' means jo page pehle nahi bana usko request pe bana ke serve karega
  };
}
