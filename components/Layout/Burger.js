// @/components/Layout/Burger.js
import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Burger({ show, setter }) {
  return (
    <nav className="md:hidden z-[202] fixed top-0 left-0 w-[60px] h-[60px] bg-white p-2">
      <button
        className="text-4xl flex text-black"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        {show ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
