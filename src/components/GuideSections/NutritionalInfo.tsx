import React from 'react';
import { Apple } from 'lucide-react';

export default function NutritionalInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Apple className="h-8 w-8 text-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Nutritional Analysis</h2>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-green-100 rounded-tl-lg">Nutrient</th>
                <th className="text-left py-3 px-4 bg-green-100 rounded-tr-lg">Amount per 100g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-3 px-4">Calories</td>
                <td className="border-b py-3 px-4">30</td>
              </tr>
              <tr>
                <td className="border-b py-3 px-4">Carbohydrates</td>
                <td className="border-b py-3 px-4">7.55g</td>
              </tr>
              <tr>
                <td className="border-b py-3 px-4">Fiber</td>
                <td className="border-b py-3 px-4">0.4g</td>
              </tr>
              <tr>
                <td className="border-b py-3 px-4">Protein</td>
                <td className="border-b py-3 px-4">0.61g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}