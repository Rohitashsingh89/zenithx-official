import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Terms & Conditions" />
      <section className="relative z-10 pt-10 pb-16 md:pt-16 lg:pt-20 bg-white dark:bg-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
            Terms and <span className="text-gradient">Conditions</span>
          </h1>

          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            Welcome to ZenithX! By accessing and using our website and services, you agree to comply with the following
            terms and conditions. Please read them carefully.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">1. Acceptance of Terms</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            By using our website and services, you accept and agree to be bound by these Terms and Conditions, as well
            as our Privacy Policy.
          </p>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">2. Services</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            ZenithX offers digital marketing, web development, SEO, design, content creation, and other related
            services. The scope of work, timelines, and deliverables will be agreed upon in advance and detailed in a
            separate agreement.
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">3. User Responsibilities</h2>
          <ul className="mb-6 list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
            <li>Provide accurate and complete information required for service delivery.</li>
            <li>Not use our services for unlawful or unethical purposes.</li>
            <li>Ensure compliance with applicable laws, rules, and regulations.</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">4. Intellectual Property</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            All content, designs, and deliverables remain our intellectual property until full payment is received.
            Unauthorized use is prohibited.
          </p>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">5. Payment Terms</h2>
          <ul className="mb-6 list-disc list-inside text-body-color dark:text-gray-300 space-y-2">
            <li>Payments must follow the agreed schedule.</li>
            <li>Late payments may result in delays or additional charges.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">6. Confidentiality</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            Both parties agree to maintain the confidentiality of any sensitive information exchanged.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">7. Limitation of Liability</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            ZenithX is not liable for indirect or consequential damages resulting from service use.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">8. Amendments to Terms</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            We reserve the right to modify these Terms and Conditions at any time.
          </p>

          {/* Section 9 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">9. Termination of Services</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            Services may be terminated due to non-compliance or non-payment.
          </p>

          {/* Section 10 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">10. Governing Law</h2>
          <p className="mb-6 text-body-color dark:text-gray-300">
            These terms are governed by the laws of <strong>India</strong>.
          </p>

          {/* Section 11 */}
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">11. Contact Us</h2>
          <p className="mb-2 text-body-color dark:text-gray-300">For any questions, contact us at:</p>
          <ul className="mb-8 list-none text-body-color dark:text-gray-300 space-y-2">
            <li>
              <strong>Name:</strong> Rohitash Singh
            </li>
            <li>
              <strong>Phone:</strong> +91 89794 54475
            </li>
            {/* <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:admin@zenithx.in" className="text-primary hover:underline">
                admin@zenithx.in
              </a>
            </li> */}
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:zenithx.in@gmail.com" className="text-primary hover:underline">
                zenithx.in@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
