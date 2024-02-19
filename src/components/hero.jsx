"use client"

// components/HeroSection.js
import Image from 'next/image'
import { useEffect } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    // GSAP animation to move the image
    gsap.to('.moving-image', {
      x: 'random(-800, -400, 500)', // Move horizontally to a random position within -50 to 50 pixels
      // y: 'random(-1000, 1000)', // Move vertically to a random position within -50 to 50 pixels
      duration: 10, // Animation duration
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
      ease: 'power1.inOut', // Easing function
    });
    gsap.to('.moving-image2', {
      // x: 'random(-500, 500)', // Move horizontally to a random position within -50 to 50 pixels
      y: 'random(-800, 10)', // Move vertically to a random position within -50 to 50 pixels
      duration: 10, // Animation duration
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
      ease: 'power1.inOut', // Easing function
    });
  }, []);


    return (
      <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 hero">
        <div className="hero-item">
          <div className="text-center">
            <div className="flex justify-center">
                <Image height={1000} width={1000} src="/img/btc/pexels-daniel-dan-7708812.jpg" className="rounded-full mb-6" alt="" />
            </div>
            <h1 className="text-4xl max-md:text-2xl font-extrabold tracking-tight leading-tight">
              Welcome to <span className='max-md:text-3xl'>bitFinance</span> Investment Platform
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl">
              Start investing today and build your financial future with us.
            </p>
            <div className="mt-6">
              <a href="/register" className="inline-block text-black  py-3 px-6 font-semibold rounded-full   hover:text-black border border-black gold  transition duration-300">
                Sign Up
              </a>
            </div>      
          </div>
          
        </div>
          
          <Image height={1000} width={1000} src="/img/btc/pexels-daniel-dan-7708812.jpg" className="moving-image2 rounded-full mb-6 w-[50px]" alt="" />
         
        <div className="flex justify-center items-center">
          <div className="flex justify-center moving-image">
            <Image height={1000} width={1000} src="/img/btc/pexels-daniel-dan-7708812.jpg" className="rounded-full mb-6 w-[40px]" alt="" />
          </div>
          <div className="flex justify-center moving-image">
            <Image height={1000} width={1000} src="/img/btc/pexels-daniel-dan-7708812.jpg" className="rounded-full mb-6 w-[40px]" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  