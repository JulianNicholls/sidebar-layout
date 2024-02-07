import { useState } from 'react';

import Burger from './Burger';
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
        <Burger setter={setShowSidebar} show={showSidebar} />
        <Sidebar show={showSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
