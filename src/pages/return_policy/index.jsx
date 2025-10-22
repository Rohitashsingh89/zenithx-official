import Layout from 'components/Layout';
import Breadcrumb from 'components/common/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Privacy Policy" />

      <section className="relative z-10 pt-10 pb-16 md:pt-16 lg:pt-20 bg-white dark:bg-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
            Terms And <span class="text-gradient">Conditions</span>
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
            We offer refund / exchange within first 7 days from the date of your purchase. If 7 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale, then the item may not be eligible for a return / exchange. Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.

You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase. For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further. If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies.

          </p>


        </div>
      </section>
    </Layout>
  );
}
