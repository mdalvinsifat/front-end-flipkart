import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-black px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-500">Flipkart</span>
            <br />
          <span className="text-[10px] italic text-gray-300 leading-tight">
            Explore <span className="text-yellow-400">Plus</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-sm  outline-none border-1 bg-gray-100 text-black"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-white text-blue-600 px-4 py-1 rounded-sm">Login</button>
          <span className="cursor-pointer hover:underline">Become a Seller</span>
         
          <span className="flex items-center gap-1 cursor-pointer">
            <FiShoppingCart size={18} /> Cart
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-sm text-black outline-none"
          />
          <button className="w-full  text-white px-4 py-2 rounded-sm bg-blue-700">Login</button>
          <div className="border-t border-white/20 pt-2 space-y-1">
            <p className="hover:underline">Become a Seller</p>
            <p className="flex items-center gap-1">
              <FiShoppingCart size={18} /> Cart
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
