// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We are Network Solution
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Expert IT Training for Become a Network Engineer, Cloud Engineer, or Security Engineer and Get 100% Job!
        </p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
            Explore Courses
          </button>
          <button className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg">
            Talk to Counselor
          </button>
        </div>
      </div>
      {/* You can place a background image or SVG shapes here */}
    </div>
  );
}
