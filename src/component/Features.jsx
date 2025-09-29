// src/components/Features.jsx
import React from 'react';

const features = [
  { title: "24×7 Lab Access", desc: "Practice anytime from anywhere" },
  { title: "Premium Mentors", desc: "Learn from top professionals" },
  { title: "Job Guarantee", desc: "Become job-ready or your money back" },
  { title: "Live Batches", desc: "Attend live sessions daily" },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
