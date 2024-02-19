// Sidebar.jsx
import React from 'react';
import Link from 'next/link';


const Sidebar = () => {
  return (
    <div className="dash-sidebar text-black w-1/6">
      <div className='mx-5 my-6font-semi-bold text-2xl'>
      <Link href="/Dashboard" >Dashboard</Link>
      {/* <Link >Analytics</Link>
      <Link>sign out</Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
