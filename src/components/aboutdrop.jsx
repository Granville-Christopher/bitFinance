// pages/about-us.js
'use client'

import { useState } from 'react';
import {FaChevronDown} from 'react-icons/fa6'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const AboutDrop = ({title, body}) => {
  const [dropdown1, setDropdown1] = useState(false);

  const toggleDropdown = () => {
      setDropdown1(!dropdown1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, translateY: 0 }}
      whileInView={{ opacity: 1, scale: 1,  translateY: 23 }}
      transition={{ duration: 0.9 }}
    >
      <div className='rounded p-2 mb-2 bg-black text-white'>
        <li className="mb-2 cursor-pointer flex justify-between" onClick={() => toggleDropdown()}>{title} <FaChevronDown /> </li>
        {dropdown1 && (
          <>
            <div className="relative bottom-0 left-0 right-0 h-1 gold"></div>
            <div className="ml-6  border-t-2 border-black">
              <p className="mb-2">{body}</p>
            </div>
          </>
        )}
    </div>
    </motion.div>
    
  );
};
export default AboutDrop;

export const Abtft = ({title, body}) => {
  const { ref, inView } = useInView();
  return (
     <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0, translateY: 0 }}
          whileInView={{ opacity: 1, scale: 1,  translateY: 23 }}
          transition={{ duration: 0.9 }}
        >
          <div className='rounded p-2 mb-2  m-1 about-sec '>
            <div className="mb-2 cursor-pointer flex justify-between font-bold  ">{title} </div>
            <div>
              {/* <div className="relative bottom-0 left-0 right-0 h-1 gold"></div> */}
              <div className=" border-t-2 border-white text-sm shadow text-white ">
                <p className="mb-2">{body}</p>
              </div>
            </div>
          </div> 

        </motion.div>
      </div>
  );
};

  


