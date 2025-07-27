import { Helmet } from 'react-helmet';
import Image from 'next/image';
import Link from 'next/link';

// import { helmetSettingsFromMetadata } from 'lib/site';
import { getPostBySlug, getRelatedPosts, getRecentPosts, fetchRecentPostsWithoutServices } from 'lib/posts';
import { ArticleJsonLd } from 'lib/json-ld';
import useSite from 'hooks/use-site';
// import usePageMetadata from 'hooks/use-page-metadata';

import Layout from 'components/Layout';
import TagButton from 'components/Home/Blog/TagButton';
import SharePost from 'components/Home/Blog/SharePost';
import PostCard from 'components/PostCard';
import ContentRenderer from 'components/Home/ContentRenderer';
import Breadcrumb from 'components/common/Breadcrumb';

export default function Post({ post, socialImage, related }) {
  const { title, content, categories, featuredImage, metaTitle, description, slug } = post;

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!post.og) post.og = {};
  post.og.imageUrl = `${homepage}${socialImage}`;

  // const { metadata } = usePageMetadata({
  //   metadata: {
  //     ...post,
  //     title: metaTitle,
  //     description: description || `Read more about ${title}`,
  //   },
  // });

  // const helmetSettings = helmetSettingsFromMetadata(metadata);

  const isService = false;

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-semibold text-red-500">Post not found</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The blog post you’re looking for does not exist or was removed.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* <Helmet {...helmetSettings} /> */}
      <Helmet>
        <title>{metaTitle || `${title} | ${siteMetadata.title}`}</title>
        <meta name="description" content={description || `Read more about ${title} on ${siteMetadata.title}`} />
        <meta property="og:title" content={metaTitle || title} />
        <meta property="og:description" content={description || ''} />
        <meta property="og:image" content={`${homepage}${socialImage}`} />
        <meta property="og:url" content={`${homepage}/blogs/${slug}`} />
      </Helmet>

      <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />

      <Breadcrumb pageName="Blogs" description={slug} />
      <section className="pt-[40px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-9/12">
              <div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title}
                </h2>

                {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-300">
                  By {author?.name} on {formatDate(date)}
                </p> */}
                <div>
                  {/* <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10"> */}
                  {/* <div className="flex flex-wrap items-center"> */}
                  {/* <div className="mr-10 mb-5 flex items-center">
                      {author?.avatar?.url && (
                        <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={author.avatar.url || '/images/blog/author-02.png'}
                              alt="author"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}

                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          By <span>{author?.name}</span>
                        </h4>
                      </div>
                    </div> */}
                  {/* <div className="mb-5 flex items-center"> */}
                  {/* <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        {momentFormatDate(date)}
                      </p> */}
                  {/* <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="18" height="13" viewBox="0 0 18 13" className="fill-current">
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                            <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                            <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                          </svg>
                        </span>
                        50
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="20" height="12" viewBox="0 0 20 12" className="fill-current">
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        35
                      </p> */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                    >
                      Design
                    </a>
                  </div> */}
                </div>

                {/* Featured Image */}
                {featuredImage?.sourceUrl && (
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={featuredImage.sourceUrl}
                        alt={featuredImage.altText || title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                {/* Post Content */}
                {/* <div
                  className="prose dark:prose-invert max-w-none mb-8 font-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }}
                /> */}
                <ContentRenderer content={content} />

                {/* <div className="items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color">Popular Tags :</h5>
                    <div className="flex items-center">
                      <TagButton text="Design" />
                      <TagButton text="Development" />
                      <TagButton text="Info" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">Share this post :</h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div> */}
                {/* Footer: Tags & Share */}
                <div className="mt-12 items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-10 sm:flex">
                  {categories?.length > 0 ? (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-black dark:text-white">Categories:</h5>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <TagButton key={cat.slug} text={cat.name} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-black dark:text-white">Categories:</h5>
                      <div className="flex flex-wrap gap-2">
                        <TagButton text="Uncategorized" />
                      </div>
                    </div>
                  )}
                  {/* {tags?.length > 0 ? (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color">Tags:</h5>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((cat) => (
                          <TagButton key={cat.slug} text={cat.name} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color">No Tags</h5>
                    </div>
                  )} */}
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-black dark:text-white sm:text-right">
                      Share this post:
                    </h5>
                    <div className="flex items-center sm:justify-end text-black dark:text-white">
                      <SharePost />
                    </div>
                  </div>
                </div>

                {/* <p className="mt-10 text-sm text-gray-500">Last updated on {formatDate(modified)}</p> */}
              </div>
            </div>

            {/* <div className="w-full px-4 lg:w-4/12 mt-12 lg:mt-0">
              <div className="sticky top-[100px] space-y-8"> */}
            {/* Recent Posts */}
            {/* {recentPosts?.length > 0 && (
                  <aside>
                    <h4 className="mb-4 text-2xl pb-3 font-semibold text-black dark:text-white">
                      Explore these too...
                    </h4>
                    <ul className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <li key={recentPost.slug} className="flex gap-3">
                          <div className="relative w-20 h-20 shrink-0">
                            <Image
                              src={recentPost?.featuredImage?.sourceUrl || '/images/blogs/blog-01/image-02.jpg'}
                              alt="Blog 1"
                              fill
                              className="object-cover shadow-one rounded"
                            />
                          </div>
                          <div>
                            <Link
                              href={postPathBySlug(recentPost.slug)}
                              className="hover:underline font-medium text-lg text-black dark:text-white hover:text-primary line-clamp-1"
                            >
                              {recentPost.title}
                            </Link>
                            {recentPost.excerpt && (
                              <div
                                className="text-base text-gray-700 dark:text-gray-300 line-clamp-2 mb-3"
                                dangerouslySetInnerHTML={{ __html: sanitizeExcerpt(recentPost.excerpt) }}
                              />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </aside>
                )} */}
            {/* </div>
            </div> */}
          </div>

          {/* Related Posts */}
          {related?.posts?.length > 0 && (
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h4 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                  Relevant Blog Posts
                  {/* {related?.title?.name ? (
                          <Link href={related.title.link} className="text-primary underline">
                            {related.title.name}
                          </Link>
                        ) : (
                          'More Posts'
                        )} */}
                </h4>
                <Link href="/posts/page/1" className="text-lg text-gray-800 dark:text-gray-200 underline text-primary">
                  View All
                </Link>
              </div>
              {/* <ul className="list-disc pl-5 text-body-color">
                      {related.posts.map((relatedPost) => (
                        <li key={relatedPost.slug}>
                          <Link href={postPathBySlug(relatedPost.slug)} className="hover:underline">
                            <li key={relatedPost.slug} className="flex items-start gap-3 mb-4">
                              {relatedPost.featuredImage?.sourceUrl && (
                                <img
                                  src={relatedPost.featuredImage.sourceUrl}
                                  alt={relatedPost.featuredImage?.altText || relatedPost.title}
                                  className="w-16 h-16 object-cover rounded"
                                />
                              )}
                              <div>
                                <Link
                                  href={postPathBySlug(relatedPost.slug)}
                                  className="text-primary hover:underline font-medium"
                                >
                                  {relatedPost.title}
                                </Link>
                                <p
                                  className="text-sm text-gray-600 line-clamp-2"
                                  dangerouslySetInnerHTML={{ __html: relatedPost.excerpt }}
                                />
                              </div>
                            </li>
                          </Link>
                        </li>
                      ))}
                    </ul> */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-8">
                {related?.posts.slice(0, 3).map((relatedPost) => (
                  <li key={relatedPost.slug} className="mb-8">
                    <PostCard post={relatedPost} isService={isService} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* </div> */}
        </div>
        {/* </div> */}
      </section>
    </Layout>
  );
}
export async function getStaticProps({ params = {} }) {
  try {
    const { post } = await getPostBySlug(params.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    const { categories, tags, databaseId: postId, slug } = post;

    const props = {
      post,
      socialImage: `${process.env.OG_IMAGE_DIRECTORY || ''}/${params.slug}.png`,
    };

    const related = await getRelatedPosts(categories ?? [], tags ?? [], postId);
    if (related?.category && Array.isArray(related.posts)) {
      props.related = {
        posts: related.posts.filter((p) => p.slug !== post.slug),
        title: {
          name: related.category.name || null,
          link: `/category/${related.category.slug}`,
        },
      };
    }

    // ✅ Use the reusable fetchRecentPosts
    const recent = await fetchRecentPostsWithoutServices();
    props.recentPosts = recent.filter((p) => p.slug !== slug);

    return {
      props,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const { posts } = await getRecentPosts({ count: 10, queryIncludes: 'index' });

    const paths = posts.map(({ slug }) => ({
      params: { slug },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

// import Link from 'next/link';
// import { Helmet } from 'react-helmet';

// import { getPostBySlug, getRecentPosts, getRelatedPosts, postPathBySlug } from 'lib/posts';
// import { categoryPathBySlug } from 'lib/categories';
// import { formatDate } from 'lib/datetime';
// import { ArticleJsonLd } from 'lib/json-ld';
// import { helmetSettingsFromMetadata } from 'lib/site';
// import useSite from 'hooks/use-site';
// import usePageMetadata from 'hooks/use-page-metadata';

// import Layout from 'components/Layout';
// import Header from 'components/Header';
// import Section from 'components/Section';
// import Container from 'components/Container';
// import Content from 'components/Content';
// import Metadata from 'components/Metadata';
// import FeaturedImage from 'components/FeaturedImage';

// import styles from 'styles/pages/Post.module.scss';

// export default function Post({ post, socialImage, related }) {
//   const {
//     title,
//     metaTitle,
//     description,
//     content,
//     date,
//     author,
//     categories,
//     modified,
//     featuredImage,
//     isSticky = false,
//   } = post;

//   const { metadata: siteMetadata = {}, homepage } = useSite();

//   if (!post.og) {
//     post.og = {};
//   }

//   post.og.imageUrl = `${homepage}${socialImage}`;
//   post.og.imageSecureUrl = post.og.imageUrl;
//   post.og.imageWidth = 2000;
//   post.og.imageHeight = 1000;

//   const { metadata } = usePageMetadata({
//     metadata: {
//       ...post,
//       title: metaTitle,
//       description: description || post.og?.description || `Read more about ${title}`,
//     },
//   });

//   if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
//     metadata.title = `${title} - ${siteMetadata.title}`;
//     metadata.og.title = metadata.title;
//     metadata.twitter.title = metadata.title;
//   }

//   const metadataOptions = {
//     compactCategories: false,
//   };

//   const { posts: relatedPostsList, title: relatedPostsTitle } = related || {};

//   const helmetSettings = helmetSettingsFromMetadata(metadata);

//   return (
//     <Layout>
//       <Helmet {...helmetSettings} />

//       <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />

//       <Header>
//         {featuredImage && (
//           <FeaturedImage
//             {...featuredImage}
//             src={featuredImage.sourceUrl}
//             dangerouslySetInnerHTML={featuredImage.caption}
//           />
//         )}
//         <h1
//           className={styles.title}
//           dangerouslySetInnerHTML={{
//             __html: title,
//           }}
//         />
//         <Metadata
//           className={styles.postMetadata}
//           date={date}
//           author={author}
//           categories={categories}
//           options={metadataOptions}
//           isSticky={isSticky}
//         />
//       </Header>

//       <Content>
//         <Section>
//           <Container>
//             <div
//               className={styles.content}
//               dangerouslySetInnerHTML={{
//                 __html: content,
//               }}
//             />
//           </Container>
//         </Section>
//       </Content>

//       <Section className={styles.postFooter}>
//         <Container>
//           <p className={styles.postModified}>Last updated on {formatDate(modified)}.</p>
//           {Array.isArray(relatedPostsList) && relatedPostsList.length > 0 && (
//             <div className={styles.relatedPosts}>
//               {relatedPostsTitle.name ? (
//                 <span>
//                   More from <Link href={relatedPostsTitle.link}>{relatedPostsTitle.name}</Link>
//                 </span>
//               ) : (
//                 <span>More Posts</span>
//               )}
//               <ul>
//                 {relatedPostsList.map((post) => (
//                   <li key={post.title}>
//                     <Link href={postPathBySlug(post.slug)}>{post.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </Container>
//       </Section>
//     </Layout>
//   );
// }

// export async function getStaticProps({ params = {} } = {}) {
//   const { post } = await getPostBySlug(params?.slug);

//   if (!post) {
//     return {
//       props: {},
//       notFound: true,
//     };
//   }

//   const { categories, databaseId: postId } = post;

//   const props = {
//     post,
//     socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`,
//   };

//   const { category: relatedCategory, posts: relatedPosts } = (await getRelatedPosts(categories, postId)) || {};
//   const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

//   if (hasRelated) {
//     props.related = {
//       posts: relatedPosts,
//       title: {
//         name: relatedCategory.name || null,
//         link: categoryPathBySlug(relatedCategory.slug),
//       },
//     };
//   }

//   return {
//     props,
//   };
// }

// export async function getStaticPaths() {
//   // Only render the most recent posts to avoid spending unecessary time
//   // querying every single post from WordPress

//   // Tip: this can be customized to use data or analytitcs to determine the
//   // most popular posts and render those instead

//   const { posts } = await getRecentPosts({
//     count: process.env.POSTS_PRERENDER_COUNT, // Update this value in next.config.js!
//     queryIncludes: 'index',
//   });

//   const paths = posts
//     .filter(({ slug }) => typeof slug === 'string')
//     .map(({ slug }) => ({
//       params: {
//         slug,
//       },
//     }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }
