import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white py-12 ">
        
      <div className="container mx-auto">
            <div className="relative bottom-0 w-[170px] just  m-auto h-1 gold justify-center items-center"></div>
            <h1 className='text-white-500 font-semibold text-3xl text-center mb-5 text-sm'> Our Partners</h1>
            <div className="relative bottom-3 w-[170px] just  m-auto h-1 gold justify-center items-center"></div>


        {/* Partners */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="partner-logo mr-6 mb-4 max-md:w-[100px]">
            <img src="/bitfinex-logo.svg"  alt="Bitfinex" />
          </div>
          <div className="partner-logo mr-6 mb-4 max-md:w-[100px]">
            <img src="/binance.svg" alt="Binance" />
          </div>
          <div className="partner-logo mr-6 mb-4 max-md:w-[100px]">
            <img src="/okx.png" alt="OKX" />
          </div>
          <div className="partner-logo mr-6 mb-4 max-md:w-[100px]">
            <img src="/microsoft.png" alt="microsoft" />
          </div>
          <div className="partner-logo mr-6 mb-4">
            <img src="/cdc_logo.svg" alt="Crypto" />
          </div>
          
          {/* Add more partner logos here */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center mb-8  border-b">
          <a href="#about" className="mr-6 mb-4">About Us</a>
          <a href="#contact" className="mr-6 mb-4">Give a Feedback</a>
          <a href="/terms" className="mr-6 mb-4">Terms of Service</a>
          <a href="/privacy" className="mr-6 mb-4">Privacy Policy</a>
         
        </div>

        {/* Copyright */}
        <marquee behavior="" direction="left">
            <div className="text-center">
              <p>&copy; 2024 BitFinance. All rights reserved.</p>
            </div>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;
