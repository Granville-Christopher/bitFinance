// "use client"
// // components/Navbar.js

// import Link from 'next/link';
// import { FaBars } from "react-icons/fa6";
// import { useState } from "react";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
    
//     <>
//     <nav className="bg-black p-4 fixed top-0 right-0 left-0 z-30 md:px-20 py-5 overflow-x-hidden w-full">
//       <div className="mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-2xl">
//             BitFinance
//             <div className="relative bottom-0 left-0 right-0 h-1 gold"></div>
//         </div>
//         <ul className="flex space-x-4 max-md:hidden">
//         </ul>
//         <div className=' max-md:hidden'>
//           <Link href="/login"  className="text-white gold font-semibold px-3 py-2 rounded-full transition duration-300 hover:text-black mr-2 text-sm " >
//             Login
//           </Link>
//           <Link href="/signup" className="text-white  font-semibold gold px-3 py-2 rounded-full transition duration-300 hover:text-black text-sm" >
//             Sign Up
//           </Link>
//         </div>
        
//       <button onClick={toggleSidebar} className="md:hidden text-white">
//         <FaBars />
//       </button>
//       </div>
//     </nav>
    
    

//     </>
//   );
// };

"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
    <header className="flex items-center justify-between px-5 md:px-20 py-5 bg-black shadow">
  <Link href="/">
    <h1 className="font-bold text-white text-2xl">BitFinance</h1>
    <div className="relative bottom-0 left-0 right-0 h-1 gold"></div>
  </Link>
  <nav className="flex max-md:hidden flex-grow justify-center gap-5 md:gap-0">
    <div className="flex space-x-4">
      <Link href="/" className="text-white hover:text-gray-400 shadow "> Home</Link>
      <Link href="/#about" className="text-white hover:text-gray-400 shadow "> About</Link>
      <Link href="/#services" className="text-white hover:text-gray-400 shadow"> Services</Link>
      <Link href="/contact" className="text-white hover:text-gray-400 shadow"> Contact</Link>
    </div>
  </nav>
  <div className='flex gap-2 max-md:hidden'>
    <Link href="/login" className="text-white gold font-semibold px-3 py-2 rounded-full transition duration-300 hover:text-black text-sm">
      Login
    </Link>
    <Link href="/register" className="text-white font-semibold gold px-3 py-2 rounded-full transition duration-300 hover:text-black text-sm">
      Sign Up
    </Link>
  </div>
  <button onClick={toggleSidebar} className="md:hidden text-white">
    <FaBars />
  </button>
</header>


    <aside className={`z-30 fixed text-white top-0  w-[80%] h-full md:hidden ${isOpen ? 'left-0' : '-left-[110%]'}`}>
      <div onClick={toggleSidebar}  className="h-full w-full bg-[#000000d6]"></div>
      
      <div className="w-80 bg-light shadow-md flex flex-col gap-5 p-5 h-full absolute top-0 left-0 items-start">
          <Link href="/">
            <h1 className="font-bold text-white text-2xl">BitFinance</h1>
            <div className="relative bottom-0 left-0 right-0 h-1 gold"></div>
          </Link>
          <Link className=" hover:text-gray-400 shadow" href="/"> Home</Link>
          <Link className=" hover:text-gray-400 shadow" href="#about ">About</Link>
          <Link href="#services" className=" hover:text-gray-400 shadow"> Services</Link>
          <Link href="/contact" className=" hover:text-gray-400 shadow mb-40" > Contact</Link>
         
        <div className="border-t w-full">
          <div className="flex gap-6 mt-6">
            <div>
              <Link className="gold px-3 py-1.5 rounded-full" href="/login"> Login</Link>
            </div>
            <div>
              <Link className="gold px-3 py-1.5 rounded-full" href="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      
    </aside>
    </>
  );
}
;

