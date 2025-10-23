import { useEffect, useState } from 'react';
import PricingBox from './PricingBox';
import OfferList from './OfferList';
import SectionTitle from 'components/common/SectionTitle';
import Modal from './Modal';

// function cleanFeatureText(text) {
//   return text
//     .replace(/^no\s+/i, '')
//     .replace(/^not\s+/i, '')
//     .replace(/^without\s+/i, '')
//     .replace(/^false\s+/i, '')
//     .trim();
// }

function extractPricingPlansFromHtml(htmlString) {
  const blocks = htmlString.split('<hr');
  const plans = [];

  const moneyPair = (label, text) => {
    const re = new RegExp(`${label}:\\s*₹?\\s*([\\d,]+)\\s*\\|\\s*₹?\\s*([\\d,]+)`, 'i'); // supports commas
    const m = text.match(re);
    if (!m) return { current: null, old: null };
    const toInt = (s) => parseInt(String(s).replace(/,/g, ''), 10);
    return { current: toInt(m[1]), old: toInt(m[2]) };
  }; // [web:29]

  blocks.forEach((blockHtml) => {
    const temp = document.createElement('div');
    temp.innerHTML = blockHtml;

    const strong = temp.querySelector('strong');
    if (!strong) return;

    const p = temp.querySelector('p');
    const text = temp.innerText || '';
    const title = strong.textContent.trim();

    const monthly = moneyPair('Monthly', text);
    const yearly = moneyPair('Yearly', text); // [web:29]

    let description = '';
    if (p) {
      const parts = p.innerHTML.split('<br>').map((s) => s.replace(/<[^>]+>/g, '').trim());
      description = parts.reverse().find((t) => t && !/^yearly:/i.test(t) && !/^monthly:/i.test(t)) || '';
    } // [web:29]

    const ul = temp.querySelector('ul');
    const neg = /no|not|without|false/i;
    const cleanFeatureText = (t) => t.replace(/^no\s+|^not\s+|^without\s+|^false\s+/i, '').trim(); // [web:29]

    const features = ul
      ? Array.from(ul.querySelectorAll('li')).map((li) => {
          const t = li.textContent.trim();
          return { featureText: cleanFeatureText(t), isActive: !neg.test(t) };
        })
      : [];

    plans.push({
      planName: title,
      monthly, // { current, old }
      yearly, // { current, old }
      currency: 'INR',
      locale: 'en-IN',
      description,
      features,
    });
  });

  return plans;
}

export default function PricingSection({ htmlContent = '', showTitle = true }) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalPlanName, setModalPlanName] = useState('');

  useEffect(() => {
    if (htmlContent) {
      const extracted = extractPricingPlansFromHtml(htmlContent);
      setPricingPlans(extracted);
    }
  }, [htmlContent]);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center text-primary pb-5">Pricing Package</div>
        {showTitle && (
          <SectionTitle
            title="Best Pricing Package For All Web Design Solutions"
            paragraph="Simple, budget-friendly pricing for every web design project."
            center
            width="665px"
          />
        )}

        <div className="w-full mb-8 flex justify-center">
          <span
            onClick={() => setIsMonthly(true)}
            className={`${
              isMonthly ? 'pointer-events-none text-primary' : 'text-dark dark:text-white'
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Monthly
          </span>
          <div onClick={() => setIsMonthly(!isMonthly)} className="flex cursor-pointer items-center">
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isMonthly ? '' : 'translate-x-full'
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsMonthly(false)}
            className={`${
              isMonthly ? 'text-dark dark:text-white' : 'pointer-events-none text-primary'
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingBox
              key={index}
              isPopular={index === 1}
              packageName={plan.planName}
              price={isMonthly ? plan.monthly : plan.yearly} // { current, old }
              duration={isMonthly ? 'mo' : 'yr'}
              subtitle={plan.description}
              showMore={showMore}
              setShowMore={setShowMore}
              setShowModal={setShowModal}
              setModalPlanName={setModalPlanName}
            >
              {plan.features.map((feature, i) => (
                <OfferList key={i} text={feature.featureText} status={feature.isActive ? 'active' : 'inactive'} />
              ))}
            </PricingBox>
          ))}
        </div>

        {/* <div>**Our currency is USD (United States Dollar)</div> */}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} planName={modalPlanName} />
    </section>
  );
}
