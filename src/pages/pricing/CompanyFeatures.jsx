import { FaServer, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

const CompanyFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Modern, responsive, and high-performance websites tailored for your business using cutting-edge technologies.',
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: 'Hosting Solutions',
      description: 'Reliable, secure, and scalable web hosting services with 24/7 support and 99.9% uptime guarantee.',
      icon: <FaServer />,
    },
    {
      id: 3,
      title: 'Security & Maintenance',
      description:
        'Keep your digital assets protected with real-time monitoring, updates, and robust security protocols.',
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section id="features" className="bg-white dark:bg-black pt-16 md:pt-16 lg:pt-20">
      <div className="container">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Our Core Services</h2>
          <p className="text-base text-body-color max-w-2xl mx-auto">
            We provide top-notch web development, secure hosting, and ongoing support to help your business thrive
            online.
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary text-[28px]">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-base font-medium leading-relaxed text-body-color">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyFeatures;
