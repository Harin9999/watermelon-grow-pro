import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SEOHead from '../components/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead
        title="WatermelonGrowPro | Expert Black Diamond Watermelon Growing Guide"
        description="Master the art of growing Black Diamond watermelons with expert tips, proven techniques, and comprehensive guides. Learn everything from planting to harvest."
        keywords="watermelon growing, black diamond watermelon, watermelon care, gardening tips, growing guide, organic gardening"
        path="/"
      />
      <Hero />
      <Features />
    </>
  );
}