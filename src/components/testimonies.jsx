// Testimonies.js
'use client'

import React, { useLayoutEffect, useState } from 'react';
import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const testimonies = [
    {
      id: 1,
      image: '/img/ppl/pexels-anderson-guerra-1197132.jpg',
      name: "Alice Johnson",
      testimony: "I've been investing with BitFinance for years, and their platform has consistently delivered great returns. Highly recommended!",
    },
    {
      id: 2,
      image:"/img/ppl/pexels-mostafa-sannad-868113.jpg",
      name: "David Smith",
      testimony: "BitFinance's investment plans are straightforward and transparent. I appreciate the clarity and ease of use.",
    },
    {
      id: 3,
      image: "/img/ppl/pexels-andrea-piacquadio-712513.jpg",
      name: "Sophia Lee",
      testimony: "BitFinance has helped me grow my wealth steadily over time. Their Gold Plan is perfect for long-term investors like me.",
    },
    {
      id: 4,
      image: "/img/ppl/pexels-stefan-stefancik-91227.jpg",
      name: "Michael Brown",
      testimony: "I'm impressed by BitFinance's dedication to security. I feel confident knowing my investments are protected.",
    },
    {
      id: 5,
      image: "/img/ppl/pexels-vinicius-wiesehofer-1130626.jpg",
      name: "Emma Wilson",
      testimony: "BitFinance's customer support team is fantastic! They're always available to answer my questions and provide assistance.",
    },
    {
      id: 6,
      image: "/img/ppl/pexels-andrea-piacquadio-874158.jpg",
      name: "James Miller",
      testimony: "I started with BitFinance's Basic Plan and have seen steady growth in my investments. It's a great platform for beginners.",
    },
    {
      id: 7,
      image: "/img/ppl/pexels-andrea-piacquadio-774909.jpg",
      name: "Olivia Martinez",
      testimony: "BitFinance's Platinum Plan offers impressive returns. I've been able to achieve my financial goals faster thanks to their premium features.",
    },
    {
      id: 8,
      image: "/img/ppl/pexels-jeffrey-czum-2120084.jpg",
      name: "William Taylor",
      testimony: "BitFinance makes investing easy and accessible. Their user-friendly interface is perfect for both beginners and experienced investors.",
    },
    {
      id: 9,
      image: "/img/ppl/pexels-daniel-xavier-1239291.jpg",
      name: "Emily Harris",
      testimony: "I've tried other investment platforms, but BitFinance stands out for its reliability and professionalism. I'm a loyal customer!",
    },
    {
      id: 10,
      image: "/img/ppl/pexels-andrea-piacquadio-3778611.jpg",
      name: "Michael Dee",
      testimony: "I'm impressed with the level of transparency and professionalism at BitFinance. Their customer support is top-notch!",
    },
    
  
  ];
  

const Testimonies = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useLayoutEffect(()=>{
    function handleScroll() {
      const w = window.innerWidth;
      if(w > 1200) setSlidesPerView(4);
      else if(w > 900) setSlidesPerView(3);
      else if(w > 600) setSlidesPerView(2);
      else setSlidesPerView(1);
    }
    window.addEventListener('resize', handleScroll)
    return ()=>window.removeEventListener('resize', handleScroll)
  },[]);

  return (
    <div className="container mx-auto px-4 py-8" id='testimonies'>
      <h2 className="text-3xl font-semibold mb-4 text-center">Testimonies</h2>
      <Swiper
      // install Swiper modules
      modules={[Navigation, ]}
      slidesPerView={slidesPerView}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-6"> */}
        {testimonies.map(testimony => (
          <SwiperSlide key={testimony.id} className='max-md:pb-8'>
          <div className="p-5 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 h-80 w-full">
            <div className="mb-4">
              <Image width={1000} height={1000} src={testimony.image} alt='' className="w-20 h-20 rounded-full mx-auto" />
            </div>
            <p className="mb-4">{testimony.testimony}</p>
            <p className="text-gray-600 font-semibold">{testimony.name}</p>
          </div>
          </div>
          </SwiperSlide>
        ))}
      {/* </div> */}
    </Swiper>
      
    </div>
  );
};

export default Testimonies;
