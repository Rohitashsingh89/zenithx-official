// import { Testimonial } from "@/types/testimonial";
// import Image from 'next/image';

// import CompanyFeatures from './CompanyFeatures';

const ContactFeatures = () => {
  return (
    <section id="pricing" className="relative z-10 pt-8 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="w-full">
          <div className="wow fadeInUp rounded-md bg-white dark:bg-black lg:px-5 xl:px-8" data-wow-delay=".1s">
            <div className={`wow fadeInUp w-full mx-auto text-center`} data-wow-delay=".1s">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Contact Our <span class="text-gradient">Professional</span> Team
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg max-w-4xl mx-auto">
                Our team works hard to create the best web development solutions in the industry. Our goal is to help
                you build and grow your digital presence. Have questions? Feel free to contact us today.
              </p>
            </div>
          </div>
          {/* <CompanyFeatures /> */}
        </div>
      </div>
    </section>
  );
};

export default ContactFeatures;
