// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: "Anuj Tiwari",
    role: "SOC Analyst",
    quote:
      "I am excited to start my cybersecurity career ... thanks to Network Kings.",
  },
  {
    name: "Akshay Kharbe",
    role: "Network Engineer",
    quote:
      "I got placed in Wipro ... The guidance and mentorship were amazing.",
  },
  // more...
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Success Stories
        </h2>
        <div className="space-y-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-4 font-semibold text-gray-900">
                {t.name}, <span className="text-gray-600">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
