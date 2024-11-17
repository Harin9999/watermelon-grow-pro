import React from 'react';
import { Sun, Droplets, Thermometer, Sprout } from 'lucide-react';

const conditions = [
  {
    icon: Sun,
    title: 'Sunlight',
    description: 'Full sun, 6-8 hours daily',
    details: [
      'Morning sun is ideal',
      'Protect from intense afternoon heat',
      'Ensure proper spacing for light penetration'
    ]
  },
  {
    icon: Thermometer,
    title: 'Temperature',
    description: '70-85°F (21-29°C)',
    details: [
      'Soil temperature above 70°F for planting',
      'Night temperatures above 60°F',
      'Use row covers for temperature management'
    ]
  },
  {
    icon: Droplets,
    title: 'Water',
    description: '1-2 inches per week',
    details: [
      'Deep watering preferred',
      'Reduce near harvest',
      'Maintain consistent moisture'
    ]
  },
  {
    icon: Sprout,
    title: 'Soil',
    description: 'Well-draining, pH 6.0-7.0',
    details: [
      'Rich in organic matter',
      'Sandy loam preferred',
      'Regular fertilization needed'
    ]
  }
];

export default function GrowingConditions() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Optimal Growing Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <condition.icon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{condition.title}</h3>
              </div>
              <p className="text-green-600 font-medium mb-4">{condition.description}</p>
              <ul className="space-y-2 text-gray-600">
                {condition.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-6 w-6 text-green-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}