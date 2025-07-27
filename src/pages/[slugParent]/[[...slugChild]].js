import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { getPageByUri, getAllPages, getBreadcrumbsByUri } from 'lib/pages';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Content from 'components/Content';
import Section from 'components/Section';
import Container from 'components/Container';
import FeaturedImage from 'components/FeaturedImage';
import Breadcrumbs from 'components/Breadcrumbs';

import styles from 'styles/pages/Page.module.scss';

export default function Page({ page, breadcrumbs }) {
  const { title, metaTitle, description, slug, content, featuredImage, children } = page;

  const { metadata: siteMetadata = {} } = useSite();

  const { metadata } = usePageMetadata({
    metadata: {
      ...page,
      title: metaTitle,
      description: description || page.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const hasChildren = Array.isArray(children) && children.length > 0;
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />

      <Header>
        {hasBreadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        {featuredImage && (
          <FeaturedImage
            {...featuredImage}
            src={featuredImage.sourceUrl}
            dangerouslySetInnerHTML={featuredImage.caption}
          />
        )}
        <h1 className={styles.title}>{title}</h1>
      </Header>

      <Content>
        <Section>
          <Container>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Container>
        </Section>

        {hasChildren && (
          <Section className={styles.sectionChildren}>
            <Container>
              <aside>
                <p className={styles.childrenHeader}>
                  <strong>{title}</strong>
                </p>
                <ul>
                  {children.map((child) => {
                    return (
                      <li key={child.id}>
                        <Link href={child.uri}>{child.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </Container>
          </Section>
        )}
      </Content>
    </Layout>
  );
}
export async function getStaticProps({ params = {} } = {}) {
  try {
    const { slugParent, slugChild } = params;

    // Construct the page URI from params
    let pageUri = slugParent ? `/${slugParent}/` : '/';

    if (Array.isArray(slugChild) && slugChild.length > 0) {
      pageUri += `${slugChild.join('/')}/`;
    }

    const { page = null } = await getPageByUri(pageUri);

    if (!page) {
      return {
        notFound: true,
      };
    }

    const { pages = [] } = await getAllPages({
      queryIncludes: 'index',
    });

    const breadcrumbs = getBreadcrumbsByUri(pageUri, pages);

    return {
      props: {
        page,
        breadcrumbs,
      },
      revalidate: 60, // optional: ISR, re-generate page every 60s
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
    const { pages = [] } = await getAllPages({
      queryIncludes: 'index',
    });

    const excludedPaths = ['/about', '/services', '/contact', '/blog', '/pricing'];

    const paths = pages
      .filter(({ uri }) => typeof uri === 'string' && uri !== '/' && !excludedPaths.includes(uri.replace(/\/$/, '')))
      .map(({ uri }) => {
        const segments = uri.split('/').filter(Boolean); // removes empty strings

        return {
          params: {
            slugParent: segments.shift(),
            slugChild: segments.length > 0 ? segments : [],
          },
        };
      });

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
