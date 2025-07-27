import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';

export default function RefundPolicyPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Refund Policy" />
      <section className="relative z-10 pt-10 pb-16 md:pt-16 lg:pt-20 bg-white dark:bg-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
            Refund <span class="text-gradient">Policy</span>
          </h1>
          <p className="mb-8 text-base text-body-color dark:text-gray-300">
            <strong>Effective Date:</strong> February 25, 2025
          </p>

          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            At ZenithX Digital Solutions (&quot;ZenithX&ldquo;, &quot;we&ldquo;, &quot;us&ldquo;, or &quot;our&ldquo;),
            we are committed to delivering high-quality digital services. We understand that circumstances may arise
            where you may seek a refund. This Refund Policy outlines the terms and conditions governing refunds.
          </p>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">1. General Terms</h2>
          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            We strive to ensure our services meet your expectations. If you have concerns, contact us at{' '}
            <a href="mailto:admin@zenithx.in" className="text-primary hover:underline">
              admin@zenithx.in
            </a>
            .
          </p>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">2. Refund Eligibility</h2>
          <ul className="mb-6 list-disc list-inside text-base text-body-color dark:text-gray-300 space-y-2">
            <li>Full refund (minus 10% processing fee) if the project is canceled before commencement.</li>
            <li>Partial refunds available if canceled before milestone completion.</li>
            <li>No refunds once the project is completed and delivered.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">3. Non-Refundable Services</h2>
          <ul className="mb-6 list-disc list-inside text-base text-body-color dark:text-gray-300 space-y-2">
            <li>Digital Marketing Packages</li>
            <li>Hosting Services</li>
            <li>Maintenance Services</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">4. Refund Process</h2>
          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            Email{' '}
            <a href="mailto:info@zenithx.in" className="text-primary hover:underline">
              info@zenithx.in
            </a>{' '}
            with your request. We will review your request and inform you within 10 business days. If approved, refunds
            will be processed within 15 business days.
          </p>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">5. Changes to This Refund Policy</h2>
          <p className="mb-6 text-base text-body-color dark:text-gray-300">
            We reserve the right to modify this Refund Policy at any time. Changes will be effective upon posting.
          </p>

          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">6. Contact Us</h2>
          <p className="mb-2 text-base text-body-color dark:text-gray-300">For any questions, contact us at:</p>
          <ul className="mb-8 list-none space-y-2 text-base text-body-color dark:text-gray-300">
            {/* <li>
              <strong>Phone:</strong> +1 (778) 325-1904
            </li> */}
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
