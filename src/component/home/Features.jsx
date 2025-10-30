import React, { useState } from "react";

const features = [
  { 
    title: "Job Guarantee", 
    desc: "Practice anytime from anywhere", 
    desc2: "Our programs are designed to make you job-ready with real-world projects. \
We provide complete placement support until you get hired. \
If you don’t get placed, you receive your money back — guaranteed."
  },
  { 
    title: "Expert Mentors", 
    desc: "Learn from top professionals", 
    desc2: "Get guidance from industry experts with years of practical experience. \
Our mentors focus on hands-on learning, not just theory. \
They help you understand how to solve real challenges in the industry."
  },
  { 
    title: "Lab Access", 
    desc: "Become job-ready or your money back", 
    desc2: "24/7 access to our advanced labs so you can practice anytime. \
Work on live projects to build real confidence and skills. \
Practice continuously until you are confident for interviews."
  },
  { 
    title: "Offline/Online Batches", 
    desc: "Attend live sessions daily", 
    desc2: "Choose between online flexibility or offline classroom learning. \
Daily live sessions keep your learning consistent and interactive. \
Get recordings and support so you never miss any topic."
  },
];


export default function Features() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={f.title}
              onClick={() => setSelected(f)} // clicked card set hoga
              className="cursor-pointer bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup/Modal */}
      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setSelected(null)} // overlay pe click se band hoga
        >
          <div
            className="bg-white rounded-lg p-6 w-[400px] shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // content pe click se close na ho
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">{selected.title}</h3>
            <p className="text-gray-700">{selected.desc}</p>
            <p className="mt-4 text-sm text-gray-500">
              {selected.desc2}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
