import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Site Preparation',
    description: 'Choose a sunny location and prepare the soil',
    details: [
      'Select area with 6-8 hours of direct sunlight',
      'Test and amend soil pH to 6.0-7.0',
      'Add organic matter and till to 12 inches deep'
    ]
  },
  {
    title: 'Planting',
    description: 'Plant seeds or transplants at the right time',
    details: [
      'Wait until soil temperature reaches 70°F',
      'Plant seeds 1 inch deep, 3-5 seeds per hill',
      'Space hills 4-6 feet apart'
    ]
  },
  {
    title: 'Care & Maintenance',
    description: 'Regular care for healthy growth',
    details: [
      'Water deeply and consistently',
      'Mulch to retain moisture and control weeds',
      'Fertilize every 3-4 weeks'
    ]
  },
  {
    title: 'Harvest',
    description: 'Know when and how to harvest',
    details: [
      'Check tendril nearest fruit (should be brown)',
      'Listen for hollow sound when tapped',
      'Cut stem with clean, sharp knife'
    ]
  }
];

export default function StepByStep() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Growing Guide</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="h-5 w-5 text-green-500 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}