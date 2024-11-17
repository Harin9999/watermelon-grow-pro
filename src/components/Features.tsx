import React from 'react';
import { Droplets, Sun, Thermometer, Clock } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: 'Sunlight Requirements',
    description: 'Learn the optimal sunlight conditions for maximum growth and sweetness.',
  },
  {
    icon: Droplets,
    title: 'Watering Schedule',
    description: 'Master the art of proper watering for juicy, perfectly grown watermelons.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Control',
    description: 'Understand ideal temperature ranges for different growth stages.',
  },
  {
    icon: Clock,
    title: 'Growth Timeline',
    description: 'Follow our detailed timeline from seed to harvest for best results.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive guide covers all aspects of watermelon growing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition">
                <feature.icon className="w-6 h-6 text-green-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}