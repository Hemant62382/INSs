// src/components/Testimonials.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import pic from "/public/photos/2.jpg";

export default function Testimonials() {
  const [imgData, setImgData] = useState(null);

  const testimonialsData = [
    {
      id: 1,
      name: "Anuj Tiwari",
      role: "SOC Analyst | DLP Analyst | Cloud Security Analyst",
      message:
        "I am excited to start my cybersecurity career, as SOC analyst L-1 in Connectwise LLP. I want to thank Atul Sharma for his remarkable teaching skills, support, and guidance. My overall learning experience at Network Kings was amazing.",
      image:
        "https://framerusercontent.com/images/SbRBXzUp4CEw6zcZnXUPOypAxdk.jpg",
    },
    {
      name: "Hemant Rawat",
      role: "Full Stack Web Developer | MERN Stack Enthusiast | AI & ML Learner",
      message:
        "I am passionate about creating impactful projects, solving real-world problems, and constantly learning new technologies. My journey in web development and AI has been full of challenges, but also growth and excitement. I aim to secure a good role in a company where I can contribute and grow further.",
      image: `${pic}`, // yahan tum apni image ka URL laga sakte ho
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Cloud Security Analyst",
      message:
        "Thanks to the amazing guidance and mentorship, I was able to land a great opportunity in cloud security.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Priya Verma",
      role: "SOC Analyst",
      message:
        "The hands-on training and real-world case studies helped me build my confidence and skills.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Amit Kumar",
      role: "Cybersecurity Enthusiast",
      message:
        "Learning here was an amazing journey, I’m truly grateful for the mentorship I received.",
      image: "https://via.placeholder.com/150",
    },
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 cursor-pointer text-gray-800 hover:text-blue-600"
        onClick={onClick}
      >
        <FaArrowRight size={35} />
      </div>
    );
  }

  // Custom Prev Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 cursor-pointer text-gray-800 hover:text-blue-600"
        onClick={onClick}
      >
        <FaArrowLeft size={35} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, // next & prev button
  };

  return (
    <div className="bg-black py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-200 mb-12">
        Success Stories
      </h2>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Slider {...settings}>
          {testimonialsData.map((t) => (
            <div key={t.id}>
              <div className="border border-gray-500 bg-transparent rounded-3xl shadow-lg p-8 w-full">
                {/* Profile Image */}
                <div className="w-full h-24 mx-auto rounded-full text-center mb-4 overflow-hidden ">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-full rounded-2xl cursor-pointer "
                    onClick={() => setImgData(t)}
                  />
                </div>

                {/* Message */}
                <p className="text-gray-200 italic mb-4">“{t.message}”</p>

                {/* Name & Role */}
                <div className="w-full h-25 flex flex-col justify-center items-start px-4">
                  <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {imgData && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setImgData(null)} // overlay pe click se band hoga
        >
          <div
            className="bg-white rounded-lg p-6 w-[500px] h-[500px] shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // content pe click se close na ho
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setImgData(null)}
            >
              ✕
            </button>
            <div className="h-[400px] flex items-center justify-center flex-col mt-10">
            <h3 className="text-xl font-bold mb-4">{imgData.name}</h3>

            <img src={imgData.image} alt="" className="h-full w-full " />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
