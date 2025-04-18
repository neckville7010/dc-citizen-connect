
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        className="p-2 rounded-md text-dc-navy hover:text-dc-red focus:outline-none" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-20 border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dc-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/departments" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dc-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Departments
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dc-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dc-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              News
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
