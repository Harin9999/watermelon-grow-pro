import React from 'react';
import SEOHead from '../components/SEOHead';
import GrowingConditions from '../components/GuideSections/GrowingConditions';
import StepByStep from '../components/GuideSections/StepByStep';
import Problems from '../components/GuideSections/Problems';
import SeasonalCare from '../components/GuideSections/SeasonalCare';
import NutritionalInfo from '../components/GuideSections/NutritionalInfo';
import FAQ from '../components/GuideSections/FAQ';
import { BookOpen } from 'lucide-react';

export default function GrowingGuide() {
  return (
    <>
      <SEOHead
        title="Black Diamond Watermelon Guide | Expert Growing Tips"
        description="Learn how to grow Black Diamond watermelons with our comprehensive guide. Expert tips on soil preparation, watering, seasonal care, and harvesting this heirloom variety."
        keywords="black diamond watermelon guide, watermelon growing tips, watermelon care, soil preparation, watering guide, seasonal care, harvesting watermelons"
        path="/growing-guide"
        type="article"
      />
      
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Black Diamond Watermelon
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Growing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about growing Black Diamond watermelons successfully
            </p>
          </div>
        </div>
      </div>

      <div id="conditions">
        <GrowingConditions />
      </div>

      <div id="steps">
        <StepByStep />
      </div>

      <div id="problems">
        <Problems />
      </div>

      <div id="seasonal">
        <SeasonalCare />
      </div>

      <div id="nutrition">
        <NutritionalInfo />
      </div>

      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}