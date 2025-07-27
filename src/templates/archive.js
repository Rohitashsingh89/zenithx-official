import { Helmet } from 'react-helmet';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import Breadcrumb from 'components/common/Breadcrumb';

export default function TemplateArchive({
  title = 'Archive',
  Title,
  posts,
  postOptions = {},
  slug,
  metadata,
  pagination,
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />

      {/* ✅ Header / Breadcrumb Section */}
      <Breadcrumb
        pageName={Title || title}
        description={metadata.description || 'Browse all blog posts and updates.'}
      />
      {/* ✅ Main Grid Section */}
      <section className="pt-[30px] pb-[120px]">
        <div className="text-center text-2xl text-primary pb-5">Out Latest Blogs</div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {Array.isArray(posts) && posts.length > 0 ? (
              <>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  ))}
                </ul>

                {/* ✅ Pagination */}
                {pagination && (
                  <Pagination
                    currentPage={pagination?.currentPage}
                    pagesCount={pagination?.pagesCount}
                    basePath={pagination?.basePath}
                  />
                )}
              </>
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">No posts found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// import { Helmet } from 'react-helmet';

// import { WebpageJsonLd } from 'lib/json-ld';
// import { helmetSettingsFromMetadata } from 'lib/site';
// import useSite from 'hooks/use-site';

// import Layout from 'components/Layout';
// import Header from 'components/Header';
// import Section from 'components/Section';
// import Container from 'components/Container';
// import SectionTitle from 'components/SectionTitle';
// import PostCard from 'components/PostCard';
// import Pagination from 'components/Pagination/Pagination';

// import styles from 'styles/templates/Archive.module.scss';
// import Button from 'components/Button';
// import FeaturedImage from 'components/FeaturedImage';

// const DEFAULT_POST_OPTIONS = {};

// export default function TemplateArchive({
//   title = 'Archive',
//   Title,
//   posts,
//   postOptions = DEFAULT_POST_OPTIONS,
//   slug,
//   metadata,
//   pagination,
// }) {
//   const { metadata: siteMetadata = {} } = useSite();

//   if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
//     metadata.title = `${title} - ${siteMetadata.title}`;
//     metadata.og.title = metadata.title;
//     metadata.twitter.title = metadata.title;
//   }

//   const helmetSettings = helmetSettingsFromMetadata(metadata);

//   return (
//     <Layout>
//       <Helmet {...helmetSettings} />

//       <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />

//       <Header>
//         <Container>
//           <h1>{Title || title}</h1>
//           {metadata.description && (
//             <p
//               className={styles.archiveDescription}
//               dangerouslySetInnerHTML={{
//                 __html: metadata.description,
//               }}
//             />
//           )}
//         </Container>
//       </Header>

//       <Section>
//         <Container>
//           <SectionTitle>Posts</SectionTitle>
//           {Array.isArray(posts) && (
//             <>
//               <ul className={styles.posts}>
//                 {posts.map((post) => {
//                   return (
//                     <li key={post.slug}>
//                       <PostCard post={post} options={postOptions} />
//                     </li>
//                   );
//                 })}
//               </ul>
//               {pagination && (
//                 <Pagination
//                   currentPage={pagination?.currentPage}
//                   pagesCount={pagination?.pagesCount}
//                   basePath={pagination?.basePath}
//                 />
//               )}
//             </>
//           )}
//         </Container>
//       </Section>
//     </Layout>
//   );
// }
