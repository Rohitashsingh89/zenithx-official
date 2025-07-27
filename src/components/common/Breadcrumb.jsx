import Link from 'next/link';
// import { useRouter } from 'next/router';
import { HiArrowCircleLeft } from 'react-icons/hi';

const Breadcrumb = ({ pageName, description }) => {
  // const router = useRouter();

  const formatSlug = (slug) => {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[2rem] lg:pt-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex">
              {/* <Link href="/" className="flex items-center text-body-color hover:text-primary text-xl mr-2">
                <HiArrowCircleLeft className="text-2xl" />
              </Link> */}
              <div className="text-end">
                <ul className="flex">
                  <li className="flex items-center">
                    <Link href="/" className="flex pr-1 text-base font-medium text-body-color hover:text-primary">
                      <HiArrowCircleLeft className="text-2xl mr-1" /> <span>Home</span>
                    </Link>
                  </li>
                  <li className="mx-2 text-body-color">/</li>
                  {!description ? (
                    <li className="text-base font-medium text-primary">{pageName}</li>
                  ) : (
                    <>
                      <li className="flex items-center">
                        <Link
                          href={`/${pageName.toLowerCase()}`}
                          className="pr-1 text-base font-medium text-body-color hover:text-primary"
                        >
                          {pageName}
                        </Link>
                      </li>
                      <li className="mx-2 text-body-color">/</li>
                      <li className="text-base font-medium text-primary">{formatSlug(description)}</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111:578)" />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#17b3ac" />
                  <stop offset="1" stopColor="#17b3ac" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {/* <span className="absolute right-0 top-0 z-[-1]">
            <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span> */}
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
