import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import image from "/public/photos/logo_axtiqg.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">
          <img className="h-12 md:h-14 lg:w-[150px]" src={image} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white px-4 hover:text-orange-500 transition-colors">
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-3 py-2 text-white hover:text-orange-500 transition-colors"
            >
              Courses
              <FaChevronDown
                size={14}
                className={`ml-1 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-50 w-48 border border-gray-200">
                <Link
                  to="/CareerCoursePage"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  onClick={closeAllMenus}
                >
                  Career Courses
                </Link>
                <Link
                  to="/CourseComponent"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  onClick={closeAllMenus}
                >
                  Modular Courses
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="text-white px-4 hover:text-orange-500 transition-colors">
            About
          </Link>
          <Link to="/services" className="text-white px-4 hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-white px-4 hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
