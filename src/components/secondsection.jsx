"use client"

// components/Body.js

import FeatureCard from './FeatureCard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondSection = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <div ref={ref}>
      <motion.div
        initial={{ translateY: 200 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div id='services'  className='border-b border-lg border-black'>
          {/* Investment Plans Section */}
          <div className=" lg:px-20 px-2 py-16 max-md:mt-5">
            <h2 className="text-3xl font-semibold mb-1 text-center">Investment Plans</h2>
            <p className=" font-900 text-center">
              Welcome to our investment platform! We offer a range of investment plans tailored to suit your financial goals and preferences. Whether you are a beginner or an experienced investor, we have options designed to help you grow your wealth efficiently.
            </p>
          </div>
          
          {/* Plans Section */}
          <div className=" px-4 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
             initial={{ translateY: 200 }}
             whileInView={{ translateY: 0 }}
             transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Basic Plan"
                minInvestment="2000"
                maxInvestment="8000"
                interestRate="4.5"
              />
            </motion.div>
            <motion.div
             initial={{ translateY: 200 }}
             whileInView={{ translateY: 0 }}
             transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Premium Plan" 
                minInvestment="8000"
                maxInvestment="20000"
                interestRate="7"
              />
            </motion.div>
            <motion.div
             initial={{ translateY: 200 }}
             whileInView={{ translateY: 0 }}
             transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Gold Plan"
                minInvestment="20000"
                maxInvestment="100000"
                interestRate="10"
              />
            </motion.div>
              
            </div>
          </div>
          
          {/* Additional Information */}
          <div className=" px-16 py-12 ">
            <p className="mb-6">
              <strong>Transparent and Secure</strong>
            </p>
            <p className="mb-6">
              At our platform, transparency and security are our top priorities. We provide detailed information about each plan, including minimum and maximum investment amounts, as well as the rate of interest earned every 96 hours. Rest assured, your investments are safe and secure with us.
            </p>
            <p>
              <strong>Start Investing Today</strong>
            </p>
            <p className="mb-6">
              Ready to start building your wealth? Choose the plan that best aligns with your investment goals and get started today. With our user-friendly platform and dedicated support team, investing has never been easier.
            </p>
          </div>
        </div>

      </motion.div>

    </div>
    </>
    
  );
};

export default SecondSection;
