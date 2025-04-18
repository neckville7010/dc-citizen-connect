
import React from "react";
import DCLogo from "./DCLogo";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <DCLogo className="mr-2" />
              <span className="sr-only">DC Citizen Connect</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dc-navy hover:text-dc-red font-medium transition-colors">
              Home
            </Link>
            <Link to="/departments" className="text-dc-navy hover:text-dc-red font-medium transition-colors">
              Departments
            </Link>
            <Link to="/services" className="text-dc-navy hover:text-dc-red font-medium transition-colors">
              Services
            </Link>
            <Link to="/news" className="text-dc-navy hover:text-dc-red font-medium transition-colors">
              News
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
