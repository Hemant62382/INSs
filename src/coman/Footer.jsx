// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">
            Insitute Of Network Solution
          </h3>
          <p>
            We provide a one stop training platform for IT professional courses.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p>Email: info@insglobaltech.com</p>
          <p>Phone: +919352748483</p>
          <div className=" flex gap-8 mt-4 space-x-4">
            <a
              href="https://www.youtube.com/@jjakhar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="hover:text-red-500 transition" />
            </a>
            <a
              href="https://www.instagram.com/ins.globaltech.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-pink-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/institute-of-network-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-blue-600 transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © 2025 Institute of Network Solution. All rights reserved.
      </div>
    </div>
  );
}
