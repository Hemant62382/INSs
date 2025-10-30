// src/components/Hero.jsx
import React from "react";
import CourseCard from "../common/CourseCard";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transforming Careers Since 1998
        </h1>
        <p className="text-lg md:text-2xl">
          Become a Network Engineer, Cloud Engineer, or Security Engineer and
          Get <span className=" text-amber-700"></span>
        </p>
        <p className="text-lg md:text-3xl mb-10 text-amber-700 font-bold ">
          100% Job!
        </p>
        <div>
          <CourseCard />
        </div>
      </div>
      {/* You can place a background image or SVG shapes here */}
    </div>
  );
}
