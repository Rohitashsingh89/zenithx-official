// import { Testimonial } from "@/types/testimonial";
// import Image from 'next/image';

import CompanyFeatures from './CompanyFeatures';

const FeaturedSection = () => {
  return (
    <section id="pricing" className="relative z-10 pt-8 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="w-full">
          <div
            className="wow fadeInUp rounded-md bg-white shadow-one dark:bg-black lg:px-5 xl:px-8"
            data-wow-delay=".1s"
          >
            <div className={`wow fadeInUp w-full mx-auto text-center`} data-wow-delay=".1s">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Empower Your Online Presence{' '}
                <div>
                  {' '}
                  with <span className="text-gradient">Scalable Web Solutions</span>
                </div>
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg max-w-4xl mx-auto">
                ZenithX: The only web development partner where you get high-performance websites on demand, without
                long-term contracts — at a fraction of the cost compared to others. Our performance-first approach and
                dedicated support ensure your online success by paying only for what you need.
              </p>
            </div>
          </div>
          <CompanyFeatures />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
