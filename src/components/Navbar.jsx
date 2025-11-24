import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) => {
  const navItems = ['Home', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-amber-500 flex items-center gap-2">
            <svg viewBox="0 0 60 40" className="w-10 h-7">
              <ellipse cx="30" cy="20" rx="20" ry="12" fill="#F4D03F"/>
              <circle cx="35" cy="16" r="3" fill="#7DBADB"/>
              <path d="M 10 20 L 0 12 L 5 20 L 0 28 Z" fill="#F4D03F"/>
            </svg>
            <span className="text-gray-800">DevFish</span>
          </div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  currentPage === item
                    ? 'bg-amber-400 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-amber-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-amber-100"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-slideDown">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                  currentPage === item
                    ? 'bg-amber-400 text-white'
                    : 'text-gray-700 hover:bg-amber-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;