import React from 'react';
import { Sun, Cloud, Snowflake, Leaf } from 'lucide-react';

const seasons = [
  {
    icon: Sun,
    name: 'Summer',
    tips: [
      'Water deeply in early morning',
      'Monitor for signs of heat stress',
      'Provide afternoon shade if needed',
      'Continue pest monitoring'
    ]
  },
  {
    icon: Leaf,
    name: 'Fall',
    tips: [
      'Harvest before first frost',
      'Clean up plant debris',
      'Save seeds for next season',
      'Prepare soil for winter'
    ]
  },
  {
    icon: Snowflake,
    name: 'Winter',
    tips: [
      'Plan next season\'s garden',
      'Order seeds early',
      'Maintain tools',
      'Study growing techniques'
    ]
  },
  {
    icon: Cloud,
    name: 'Spring',
    tips: [
      'Prepare soil when workable',
      'Start seeds indoors',
      'Install irrigation systems',
      'Monitor soil temperature'
    ]
  }
];

export default function SeasonalCare() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Seasonal Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <season.icon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{season.name}</h3>
              </div>
              <ul className="space-y-3">
                {season.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="h-5 w-5 text-green-500 mr-2">•</span>
                    {tip}
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