import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { URLAPI } from '../Consent/UrlApi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await axios.post(`${URLAPI}/auth/logout`);
      // You might also want to clear auth state from Redux here
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="text-black px-4 py-2 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-blue-500">Flipkart</span>
          <span className="text-[10px] italic text-gray-400">
            Explore <span className="text-yellow-400">Plus</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-sm bg-gray-100 text-black border border-gray-300 outline-none"
          />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center gap-2">
              <span>{user.fullName}</span>
              <Link to="/login">
              <button
                onClick={logOutHandler}
                className="bg-white text-blue-600 px-4 py-1 rounded-sm cursor-pointer"
                >
                Logout
              </button>
                </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="bg-white text-blue-600 px-4 py-1 rounded-sm">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white text-blue-600 px-4 py-1 rounded-sm">
                  Register
                </button>
              </Link>
            </div>
          )}

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
            className="w-full px-4 py-2 rounded-sm text-black outline-none bg-gray-100"
          />
          {!user ? (
            <>
              <Link to="/login">
                <button
                  className="w-full text-white px-4 py-2 rounded-sm bg-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className="w-full text-white px-4 py-2 rounded-sm bg-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </button>
              </Link>
            </>
          ) : (
           <button
  onClick={logOutHandler}
  className="bg-white text-blue-600 px-4 py-1 rounded-sm"
>
  <Link to="/login">Logout</Link>
</button>

          )}
          <div className="border-t border-gray-300 pt-2 space-y-1">
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
