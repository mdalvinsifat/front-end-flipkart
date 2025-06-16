import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBox,
  FaTags,
  FaUserShield,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaGift,
  FaUserLock,
  FaEnvelopeOpenText,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const AdminNavber = () => {
  const [openMenus, setOpenMenus] = useState({
    products: false,
    offers: false,
    auth: false,
    categories: false,
    contacts: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Header with Hamburger */}
<header className="md:hidden flex items-center justify-between  bg-blue-900 text-white p-4 shadow-md">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          className="text-2xl focus:outline-none"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          z-50
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:flex md:flex-col md:h-screen
          flex flex-col p-6
        `}
      >
        <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wide hidden md:block">
          Admin Panel
        </h2>

        <nav className="flex flex-col space-y-4 flex-grow">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTachometerAlt size={20} /> Dashboard
          </Link>

          {/* Products */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMenu('products')}
              className="flex items-center justify-between gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold w-full"
              aria-expanded={openMenus.products}
            >
              <div className="flex items-center gap-3">
                <FaBox size={20} />
                Products
              </div>
              {openMenus.products ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            <div
              className={`flex flex-col ml-10 mt-2 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus.products ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link
                to="/admin/product-Create"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Product Create
              </Link>
              <Link
                to="/admin/product-view"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Product View
              </Link>
          
            </div>
          </div>

          {/* Offers */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMenu('offers')}
              className="flex items-center justify-between gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold w-full"
              aria-expanded={openMenus.offers}
            >
              <div className="flex items-center gap-3">
                <FaGift size={20} />
                Offers
              </div>
              {openMenus.offers ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            <div
              className={`flex flex-col ml-10 mt-2 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus.offers ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link
                to="/admin/offer-create"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
    Offer Create              
    </Link>
              <Link
                to="/admin/offers-view"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
    Offer View             
     </Link>
            </div>
          </div>

          {/* Auth */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMenu('auth')}
              className="flex items-center justify-between gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold w-full"
              aria-expanded={openMenus.auth}
            >
              <div className="flex items-center gap-3">
                <FaUserLock size={20} />
                Auth
              </div>
              {openMenus.auth ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            <div
              className={`flex flex-col ml-10 mt-2 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus.auth ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link
                to="/admin/auth-user"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                User List 
              </Link>
              <Link
                to="/admin/auth-role"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Admin Role Controlle
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMenu('categories')}
              className="flex items-center justify-between gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold w-full"
              aria-expanded={openMenus.categories}
            >
              <div className="flex items-center gap-3">
                <FaTags size={20} />
                Categories
              </div>
              {openMenus.categories ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            <div
              className={`flex flex-col ml-10 mt-2 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus.categories ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link
                to="/admin/categories-create"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Category Create
              </Link>
              <Link
                to="/admin/categories-view"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
View Category 
              </Link>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMenu('contacts')}
              className="flex items-center justify-between gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold w-full"
              aria-expanded={openMenus.contacts}
            >
              <div className="flex items-center gap-3">
                <FaEnvelopeOpenText size={20} />
                Contacts
              </div>
              {openMenus.contacts ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            <div
              className={`flex flex-col ml-10 mt-2 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus.contacts ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link
                to="/admin/contacts/inbox"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Inbox
              </Link>
              <Link
                to="/admin/contacts/archived"
                className="hover:text-blue-300 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Archived
              </Link>
            </div>
          </div>

          {/* Users */}
          <Link
            to="/admin/users"
            className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-md transition duration-300 font-semibold"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUserShield size={20} /> Users
          </Link>

          {/* Logout */}
          <Link
            to="/logout"
            className="flex items-center gap-3 hover:bg-red-700 p-3 rounded-md transition duration-300 font-semibold mt-auto"
            onClick={() => setSidebarOpen(false)}
          >
            <FaSignOutAlt size={20} /> Logout
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AdminNavber;
