"use client";

// pages/about-us.js
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import AboutDrop, { Abtft } from "./aboutdrop";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView();
  return (
    <>
    
      <div ref={ref}>
        <motion.div
          initial={{ translateY: 200 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto md:px-4 py-20" id="about">
            <h1 className="text-3xl font-semibold mb-4 text-center">
              About Us
            </h1>

            {/* Description */}
            <p className="mb-6 text-center px-4">
              BitFinance is a leading investment platform dedicated to helping
              individuals grow their wealth through strategic investment plans.
              We offer a range of plans tailored to suit various financial goals
              and risk appetites. At BitFinance, we are proud to collaborate with industry-leading organizations to provide you with the best financial solutions. Our esteemed partners include:
            </p>
            <div>
              <li><strong>Bitfinex:</strong> A leading cryptocurrency exchange platform known for its advanced trading features and robust security measures.</li>
              <li><strong>Binance:</strong> The world's largest cryptocurrency exchange by trading volume, offering a wide range of digital assets and innovative financial products.</li>
              <li><strong>Microsoft:</strong> A global technology company renowned for its cutting-edge software solutions and cloud services, supporting our platform with scalable infrastructure.</li>
              <li><strong>OKX:</strong> A trusted cryptocurrency exchange platform offering diverse trading options and advanced financial instruments to meet the needs of both novice and experienced traders.</li>
              <li><strong>Crypto.com</strong> A pioneering cryptocurrency platform empowering users to buy, sell, and store digital assets securely, with a focus on accessibility and user experience.</li>
              <div className="font-semibold">Our partnerships enable us to deliver unparalleled services and ensure that your financial journey with BitFinance is seamless and rewarding.</div>
            </div>
            <div className="text-center font-semibold mt-5 text-2xl">
              <p>We have the best plans for you</p>
            </div>
            {/* Investment Plans */}
            <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-lg font-semibold mb-4 ">Basic Plan</h2>
                <div className="relative bottom-0 left-0 right-80 h-1 gold"></div>
                <p>
                  Start your investment journey with our Basic Plan. It is
                  perfect for those looking to dip their toes into the world of
                  investing. With a low minimum investment requirement,
                  it&apos;s accessible to everyone.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-lg font-semibold mb-4 ">Gold Plan</h2>
                <div className="relative bottom-0 left-0 right-80 h-1 gold"></div>
                <p>
                  Take your investments to the next level with our Gold Plan.
                  This plan offers higher returns and is ideal for investors
                  seeking steady growth over time. It&apos;s suited for those
                  with a moderate risk appetite.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-lg font-semibold mb-4 ">Platinum Plan</h2>
                <div className="relative bottom-0 left-0 right-80 h-1 gold"></div>
                <p>
                  For seasoned investors looking for maximum returns, our
                  Platinum Plan is the way to go. With higher minimum investment
                  requirements, this plan offers premium features and benefits
                  to help you achieve your financial goals faster.
                </p>
              </div>
            </div>

            {/* Why Choose BitFinance */}
            <div className=" lg:px-12 mt-20">
              <h2 className="text-2xl font-semibold mb-4 px-4">
                Why Choose BitFinance?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-lg  p-6">
                  <h1 className="mb-4 font-bold">
                    BitFinance is committed to providing transparent, secure,
                    and user-friendly investment services. Here is why you
                    should choose us
                  </h1>

                  <ul className="list-none pl-8  ">
                 
                    <AboutDrop
                      title="Transparent investment plans"
                      body="Our investment plans are transparent, providing clear information about returns, risks, and terms."
                    />
                  
                 
                    <AboutDrop
                      title="Secure platform with advanced encryption"
                      body="We utilize state-of-the-art encryption technology to ensure the security and privacy of your personal and financial information."
                    />
                  
                 
                    <AboutDrop
                      title="User-friendly interface for easy investing"
                      body="Our platform is designed with simplicity and ease of use in mind, making investing hassle-free for users of all experience levels."
                    />
                  
                 
                    <AboutDrop
                      title="Dedicated customer support"
                      body="We provide dedicated customer support to assist you with any questions, concerns, or issues you may encounter during your investment journey."
                    />
                  
                    
                  </ul>
                </div>
                <div className=" rounded-lg text-center assets ">
                  <h2 className="font-bold text-lg mt-4 text-white shadow">
                    Our Investment Assets
                  </h2>
                  <div className="py-5 px-3 max-md:flex-col flex">
                    <Abtft
                      title="Bitcoin"
                      body=" Decentralized digital currency, limited supply, blockchain technology, peer-to-peer transactions, global network, store of value. "
                    />
                    <Abtft
                      title="Ethereum"
                      body="Decentralized platform, smart contracts, decentralized applications, Ether cryptocurrency, programmable blockchain, developer-friendly ecosystem."
                    />
                    <Abtft
                      title="Gold"
                      body="Precious metal, store of value, Inflation Hedge, Speculative Investments, scarcity, hedge against inflation, physical and digital ownership, enduring investment."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opera text-white flex max-sm:flex-col">
            {/* Operational Information */}
            <div className="mb-8 px-12 pt-16">
              <h2 className="text-4xl font-bold mb-4">
                Operational Information
              </h2>
              <p className="mb-4 text-2xl font-semibold">
                BitFinance has been operating for 8 years. Since our inception.
              </p>
              <p className="mb-4 text-2xl font-semibold">
                With successful 3.7 Million Users Worldwide
              </p>
              <p className="mb-4 text-2xl font-semibold">
                {" "}
                And facilitated investments totaling &#36;2.345 billion.
              </p>
              <p className="mt-8 pb-6">
                Ready to start investing with BitFinance?{" "}
                <Link
                  href="/signup"
                  className="text-blue-500   hover:underline"
                >
                  {" "}
                  Sign up
                </Link>{" "}
                now!
              </p>
            </div>

            <div className="im ">
              <Image
                height={1000}
                width={1000}
                src="/img/btc/pexels-daniel-dan-7708812.jpg"
                className="rounded-full    max-lg:mx-28 max-lg:my-12 my-20 lg:mx-36"
                alt=""
              />
            </div>
          </div>
          </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
