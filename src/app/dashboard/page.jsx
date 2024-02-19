import React from 'react';

import Sidebar from '@/components/sidebar';
import MainContent from '@/secondcomponents/dashcontent';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <MainContent/>
    </div>
  );
};

export default Dashboard;
