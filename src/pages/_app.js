import NextApp from 'next/app';
import './style.css';
import 'keen-slider/keen-slider.min.css';
import { SiteContext, useSiteContext } from 'hooks/use-site';
import { SearchProvider } from 'hooks/use-search';

import { getSiteMetadata } from 'lib/site';
import { getRecentPosts } from 'lib/posts';
import { getCategories } from 'lib/categories';
import NextNProgress from 'nextjs-progressbar';
import { getAllMenus } from 'lib/menus';

// import 'styles/globals.scss';
// import 'styles/wordpress.scss';
import variables from 'styles/_variables.module.scss';
import { ThemeProvider } from 'context/ThemeContext';
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster), {
  ssr: false,
});
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <SiteContext.Provider value={site}>
      <SearchProvider>
        <ThemeProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                zIndex: 99999999,
              },
            }}
          />
          <NextNProgress height={4} color={variables.progressbarColor} />
          <div className={inter.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </SearchProvider>
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { posts: recentPosts } = await getRecentPosts({
    count: 5,
    queryIncludes: 'index',
  });

  const { categories } = await getCategories({
    count: 5,
  });

  const { menus = [] } = await getAllMenus();

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
    recentPosts,
    categories,
    menus,
  };
};

export default App;
