'use client';

import { useState } from 'react';

import Chevron from './Chevron';
import MainNavbar from './navbar';
import Sidebar from '../Sidebar';

interface SLProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SLProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen">
      <MainNavbar />

      <div className="flex">
        <Chevron setter={setShowSidebar} show={showSidebar} />
        <Sidebar setter={setShowSidebar} show={showSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
