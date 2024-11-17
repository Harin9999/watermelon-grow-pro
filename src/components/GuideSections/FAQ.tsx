import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "When is the best time to plant Black Diamond watermelons?",
    answer: "Plant when soil temperatures consistently reach 70°F and all frost danger has passed."
  },
  {
    question: "How can I tell when my watermelon is ready to harvest?",
    answer: "Look for these signs: dried tendril near fruit attachment, cream-colored ground spot, hollow sound when tapped, and hard rind resistant to fingernail scratching."
  },
  {
    question: "What's the optimal spacing between plants?",
    answer: "Space plants 4-6 feet apart in rows that are 6-8 feet apart to allow proper vine growth and development."
  },
  {
    question: "How often should I water my watermelon plants?",
    answer: "Water deeply 1-2 times per week, providing 1-2 inches of water. Adjust based on rainfall and soil conditions."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <HelpCircle className="h-8 w-8 text-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}