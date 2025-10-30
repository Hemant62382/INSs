// src/components/Stats.jsx
import React from 'react';

const stats = [
  { label: "Years of Experience", value: "27+" },
  { label: "Placement", value: "10,000+" },
  { label: "Hiring Partners ", value: "200+" },
  { label: "Support 24x7", value: "Yes" },
];

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-gray-900">{s.value}</div>
            <div className="mt-2 text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
