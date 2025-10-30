import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = () => {
  const data = [
    {
      title: "Network Engineer",
      courses: 12,
      image:
        "https://framerusercontent.com/images/mvEv6OeTI9pSoy7yC2NqmnWJI.png",
      link: "/",
    },
    {
      title: "Cloud Computing",
      courses: 8,
      image:
        "https://framerusercontent.com/images/O4UTcUPf3yYEGkBCkAr1m7unZ8.png",
      link: "/",
    },
    {
      title: "Cyber Security",
      courses: 10,
      image:
        "https://framerusercontent.com/images/jiON0KdUiKysDU0vz4A5TkaJMM.png",
      link: "/",
    },
    {
      title: "100% Job Gurnetee",
      courses: 5,
      image:
        "https://framerusercontent.com/images/zbqfPzXJiVqZCnupnr5GxrGtrhY.png",
      link: "/placement",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {data.map((course, index) => (
        <Link
          key={index}
          to={course.link || "#"}
          className="relative block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/5 p-4 hover:scale-[1.02] transition-transform duration-300 hover:bg-gradient-to-br hover:from-white/5 hover:to-gray-600  hover:transition-transform"
        >
          {/* Text + Arrow */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-medium text-gray-200">
                {course.title}
              </h2>
              <p className="text-gray-500 mt-1"> courses</p>
            </div>
            <div className="bg-white/10 p-2 rounded-full">
              <ArrowRight className="text-gray-200 hover:text-gray-900" />
            </div>
          </div>

          {/* Image */}
          <div className="mt-4 rounded-xl overflow-auto  h-50">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 float-img"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;
