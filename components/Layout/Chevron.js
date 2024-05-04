// @/components/Layout/Burger.js
import React from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

export default function Chevron({ show, setter }) {
  return (
    <nav
      className={`lg:hidden z-[202] fixed top-20 ${
        show ? 'left-[222px]' : 'left-0'
      } w-[28px] h-[28px] bg-white p-1 transition-all`}
    >
      <button
        className="text-xl flex text-black"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        {show ? <FiChevronsLeft /> : <FiChevronsRight />}
      </button>
    </nav>
  );
}
