// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Network Kings</h3>
          <p>We provide a one stop training platform for IT professional courses.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p>Email: info@inglobaltech.com</p>
          <p>Phone: +919352748483</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © 2025 Institute of Network Solution. All rights reserved.
      </div>
    </div>
  );
}
