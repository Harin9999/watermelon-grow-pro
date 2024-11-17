import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const problems = [
  {
    issue: 'Yellow Leaves',
    cause: 'Nutrient deficiency or overwatering',
    solution: 'Check drainage and adjust fertilization schedule'
  },
  {
    issue: 'Fruit Rot',
    cause: 'Contact with wet soil',
    solution: 'Use mulch or boards under developing fruit'
  },
  {
    issue: 'Poor Fruit Set',
    cause: 'Lack of pollinators or extreme temperatures',
    solution: 'Plant pollinator-attracting flowers nearby'
  },
  {
    issue: 'Cracked Fruit',
    cause: 'Irregular watering',
    solution: 'Maintain consistent soil moisture'
  }
];

export default function Problems() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Problems & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                  <p className="text-gray-600 mb-3">Cause: {problem.cause}</p>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Solution: {problem.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}