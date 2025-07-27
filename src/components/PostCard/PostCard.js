import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa';
import Image from 'next/image';

import { postPathBySlug, sanitizeExcerpt, servicePathBySlug } from 'lib/posts';
// import Metadata from 'components/Metadata';

const PostCard = ({ post, options = {}, isService }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false, featuredImage } = post || {};
  const { excludeMetadata = [] } = options;

  const metadata = {};
  if (!excludeMetadata.includes('author')) metadata.author = author;
  if (!excludeMetadata.includes('date')) metadata.date = date;
  if (!excludeMetadata.includes('categories')) metadata.categories = categories;

  const imageUrl = featuredImage?.sourceUrl || '/images/blogs/blog-01/image-02.jpg';

  return (
    <div className="wow fadeInUp flex flex-col h-full overflow-hidden shadow-default relative" data-wow-delay=".1s">
      {isSticky && (
        <div className="absolute top-3 right-3 text-primary dark:text-primary" title="Sticky Post">
          <FaMapPin />
        </div>
      )}
      {/* <Link href="/" className="relative block h-[220px] w-full">
        <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white"> */}
      {/* {tags[0]} */}
      {/* </span>
      </Link> */}
      {/* <Image src={image} alt="image" fill /> */}
      {/* Image */}
      <div className="relative w-full h-48 shrink-0">
        <Link href={isService ? servicePathBySlug(slug || '') : postPathBySlug(slug || '')}>
          <Image src={imageUrl} alt="Blog 1" fill className="object-cover" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <Link href={isService ? servicePathBySlug(slug || '') : postPathBySlug(slug || '')}>
          <h3
            className="text-xl font-bold text-dark dark:text-white line-clamp-2 min-h-[3.5rem] leading-snug md:text-2xl"
            dangerouslySetInnerHTML={{ __html: title || 'Untitled' }}
          />
        </Link>

        {/* Metadata */}
        {/* <div className="text-sm text-gray-500 dark:text-gray-400 my-2">
          <Metadata {...metadata} />
        </div> */}

        {/* Excerpt */}
        {excerpt && (
          <div
            className="text-lg text-gray-800 dark:text-gray-200 line-clamp-3 mb-2 mt-3 font-normal font-sans"
            dangerouslySetInnerHTML={{ __html: sanitizeExcerpt(excerpt) }}
          />
        )}

        {/* Spacer + Read More link to push it to bottom */}
        <div className="mt-auto pt-4 pb-2">
          <Link
            href={isService ? servicePathBySlug(slug || '') : postPathBySlug(slug || '')}
            className="text-primary dark:text-primary text-lg"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
