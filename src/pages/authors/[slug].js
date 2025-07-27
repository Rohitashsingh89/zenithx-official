import { getUserByNameSlug } from 'lib/users';
import { getPostsByAuthorSlug } from 'lib/posts';
import { AuthorJsonLd } from 'lib/json-ld';
import usePageMetadata from 'hooks/use-page-metadata';

import TemplateArchive from 'templates/archive';
import Title from 'components/Title';

export default function Author({ user, posts }) {
  const { title, name, avatar, description, slug } = user;

  const { metadata } = usePageMetadata({
    metadata: {
      ...user,
      title,
      description: description || user.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  const postOptions = {
    excludeMetadata: ['author'],
  };

  return (
    <>
      <AuthorJsonLd author={user} />
      <TemplateArchive
        title={name}
        Title={<Title title={name} thumbnail={avatar} />}
        posts={posts}
        postOptions={postOptions}
        slug={slug}
        metadata={metadata}
      />
    </>
  );
}
export async function getStaticProps({ params = {} } = {}) {
  try {
    const { user } = await getUserByNameSlug(params?.slug);

    if (!user) {
      return {
        notFound: true,
      };
    }

    const { posts } = await getPostsByAuthorSlug({
      slug: user.slug,
      queryIncludes: 'archive',
    });

    return {
      props: {
        user,
        posts,
      },
      revalidate: 60, // ISR agar chahiye to
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  // Agar aap authors ko pre-render karna chahte hain to niche comment wala code use kar sakte hain:

  // import { getAllAuthors, userSlugByName } from 'lib/users';
  // const { authors } = await getAllAuthors();

  // const paths = authors.map((author) => ({
  //   params: {
  //     slug: userSlugByName(author.name),
  //   },
  // }));

  // return {
  //   paths,
  //   fallback: 'blocking',
  // };

  // Filhal koi author pages pre-render nahi kar rahe to empty array rakhte hain
  return {
    paths: [],
    fallback: 'blocking', // fallback blocking means agar page nahi mila to server se generate karega
  };
}
