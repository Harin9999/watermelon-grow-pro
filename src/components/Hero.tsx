import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden bg-white">
      <img 
        src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        alt="Watermelon field"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Grow the Perfect <br />
            <span className="text-green-400">Watermelon</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expert tips, proven techniques, and everything you need to grow sweet, juicy watermelons in your garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg flex items-center justify-center transition group"
            >
              Start Growing Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/growing-guide" 
              className="border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-3 rounded-lg transition text-center"
            >
              View Growing Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}