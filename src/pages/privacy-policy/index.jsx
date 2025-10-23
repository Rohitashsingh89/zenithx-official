import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Privacy Policy" />

      <section className="relative z-10 pt-10 pb-16 md:pt-16 lg:pt-20 bg-white dark:bg-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
            Privacy <span className="text-gradient">Policy</span>
          </h2>

          {/* Effective Dates */}
          <div className="mb-8 text-sm text-body-color dark:text-gray-400">
            <p>
              <strong>Effective Date:</strong> June 26, 2025
            </p>
            <p>
              <strong>Last Updated:</strong> June 26, 2025
            </p>
          </div>

          {/* Intro */}
          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            At <strong>ZenithX</strong> (&quot;we&ldquo;, &quot;us&ldquo;, or &quot;our&ldquo;), we are committed to
            protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website or engage with our services.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">1. Information We Collect</h3>
            <ul className="list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number, and company name.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> IP address, browser type, OS, and pages viewed.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">2. Use of Your Information</h3>
            <ul className="list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
              <li>Deliver and maintain our services</li>
              <li>Respond to inquiries and provide support</li>
              <li>Enhance website functionality and experience</li>
              <li>Send marketing materials (opt-out available)</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">3. Sharing Your Information</h3>
            <ul className="list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
              <li>With trusted third-party service providers under confidentiality agreements</li>
              <li>When legally required or requested</li>
              <li>During business mergers or acquisitions</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">4. Data Security</h3>
            <p className="text-body-color dark:text-gray-300">
              We implement reasonable security measures to protect your data. However, no system is completely secure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">5. Your Rights</h3>
            <ul className="list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
              <li>Access, correct, or delete your data</li>
              <li>Object to certain types of data processing</li>
            </ul>
          </div>

          {/* Section 6 */}
          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">6. Cookies & Tracking</h3>
            <p className="text-body-color dark:text-gray-300">
              We use cookies to improve user experience and analyze traffic. You can control cookies through your
              browser settings.
            </p>
          </div> */}

          {/* Section 7 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">6. Third-Party Links</h3>
            <p className="text-body-color dark:text-gray-300">
              Our site may link to third-party websites. We are not responsible for their privacy practices.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">7. Changes to This Policy</h3>
            <p className="text-body-color dark:text-gray-300">
              We may update this policy. Any changes will be posted with an updated effective date.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">8. Contact Us</h3>
            <ul className="text-body-color dark:text-gray-300">
              <li>
                <strong>Phone (IN):</strong> +91 8979454475
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@zenithx.in" className="text-primary hover:underline">
                  support@zenithx.in
                </a>
              </li>
              <li>
                <strong>Address:</strong> Gurugram, Haryana, India
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
