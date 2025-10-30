import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "/public/photos/ChatGPT Image Sep 30, 2025, 02_44_50 PM.png";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/0 p-4">
      <div className="relative container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <img className="h-20 md:h-[100px] lg:w-[150px]" src={image} alt="" />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="cursor-pointer md:hidden text-6xl text-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "×" : "☰"}
        </div>

        {/* Menu */}
        <div
          className={`flex flex-col md:flex-row gap-5 absolute md:static bg-black md:bg-transparent z-50
          w-full md:w-auto left-0 top-24 md:top-auto p-5 md:p-0 transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}
        `}
        >
          {/* Nav Links */}
          {[
            { to: "/", label: "Home" },
            { to: "/CareerCoursePage", label: "Courses" },
            { to: "/placement", label: "Placement" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={() => setIsOpen(false)} // IMPORTANT
              className="
              w-full md:w-auto
              relative md:px-4 md:py-2 lg:px-6 lg:py-3 px-6 py-3 text-white font-medium 
              bg-gradient-to-r from-purple-700/40 to-purple-500/30
              rounded-xl
              shadow-[0_0_15px_rgba(168,85,247,0.7)]
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(168,85,247,1)]
              hover:bg-transparent
              hover:border hover:border-purple-500/80
              flex items-center group
            "
            >
              {item.label}
              <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={18} />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
