import { Helmet } from 'react-helmet';
import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from 'lib/datetime';
// import { helmetSettingsFromMetadata } from 'lib/site';
import {
  getPostBySlug,
  getRelatedPosts,
  sanitizeExcerpt,
  getRecentServicesPosts,
  fetchRecentServicesPosts,
  servicePathBySlug,
} from 'lib/posts';
import { ArticleJsonLd } from 'lib/json-ld';
import useSite from 'hooks/use-site';
// import usePageMetadata from 'hooks/use-page-metadata';

import Layout from 'components/Layout';
import TagButton from 'components/Home/Blog/TagButton';
import SharePost from 'components/Home/Blog/SharePost';
import PostCard from 'components/PostCard';
import ContentRenderer from 'components/Home/ContentRenderer';
import Breadcrumb from 'components/common/Breadcrumb';

export default function Post({ post, socialImage, related, recentPosts }) {
  const { title, content, categories, modified, featuredImage, metaTitle, description, slug } = post;

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

  const isService = true;

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

      <Breadcrumb pageName="Services" description={slug} />
      <section className="pt-[40px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title}
                </h2>

                {/* <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
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
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
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
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Featured Image */}
                {featuredImage?.sourceUrl && (
                  <div className="mb-10 w-full overflow-hidden">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={featuredImage?.sourceUrl ?? '/images/blogs/blog-01/image-02.jpg'}
                        alt={featuredImage?.altText ?? title}
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                <ContentRenderer content={content} />

                {/* Footer: Tags & Share */}
                <div className="mt-12 items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-10 sm:flex">
                  {categories?.length > 0 ? (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color">Categories:</h5>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <TagButton key={cat.slug} text={cat.name} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color">Categories:</h5>
                      <div className="flex flex-wrap gap-2">
                        <TagButton text="Uncategorized" />
                      </div>
                    </div>
                  )}
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">Share this post:</h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>

                <p className="mt-10 text-sm text-gray-500">Last updated on {formatDate(modified)}</p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12 mt-12 lg:mt-0">
              <div className="sticky top-[100px] space-y-8">
                {/* Recent Posts */}
                {recentPosts?.length > 0 && (
                  <aside>
                    <h4 className="mb-4 text-2xl pb-3 font-semibold text-black dark:text-white">
                      Explore these too...
                    </h4>
                    <ul className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <li key={recentPost.slug} className="flex gap-3">
                          <div className="relative w-20 h-20 shrink-0">
                            <Image
                              src={recentPost?.featuredImage?.sourceUrl ?? '/images/blogs/blog-01/image-02.jpg'}
                              alt="Blog 1"
                              fill
                              className="object-cover shadow-one rounded"
                            />
                          </div>
                          <div>
                            <Link
                              href={servicePathBySlug(recentPost.slug)}
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
                )}
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {related?.posts?.length > 0 && (
            <div className="mt-10">
              <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">You might also like...</h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                {related?.posts.slice(0, 3).map((relatedPost) => (
                  <li key={relatedPost.slug} className="w-full mb-8">
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
  const { post } = await getPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const { categories, tags, databaseId: postId, slug } = post;

  const props = {
    post,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${slug}.png`,
  };

  const related = await getRelatedPosts(categories, tags, postId);
  if (related?.category && Array.isArray(related.posts)) {
    props.related = {
      posts: related.posts.filter((p) => p.slug !== slug),
      title: {
        name: related.category.name || null,
        link: `/category/${related.category.slug}`,
      },
    };
  }

  // Use the reusable fetchRecentServicesPosts (you had fetchRecentPosts before, now fetchRecentServicesPosts)
  const recent = await fetchRecentServicesPosts();
  props.recentPosts = recent.filter((p) => p.slug !== slug);

  return {
    props,
  };
}

export async function getStaticPaths() {
  const { posts } = await getRecentServicesPosts({ count: 10, queryIncludes: 'index' });

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
