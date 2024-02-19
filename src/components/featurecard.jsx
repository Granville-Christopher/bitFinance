// components/FeatureCard.js

import Link from 'next/link';

const FeatureCard = ({ title, plan, minInvestment, maxInvestment, interestRate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="relative bottom-0 left-0 right-80 h-1 gold"></div>
      <p className="mb-2">{plan}</p>
      <div>
        <p className="mb-2">Minimum Investment: ${minInvestment}</p>
        <p className="mb-2">Maximum Investment: ${maxInvestment}</p>
        <p>Interest Rate: {interestRate}% every 96 hours</p>
      </div>
      <div className="mt-6">
      <Link href="/signup" className="text-white gold1  font-semibold  px-3 py-3 rounded-full transition duration-300 hover:text-black" >
            Create Plan
          </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
