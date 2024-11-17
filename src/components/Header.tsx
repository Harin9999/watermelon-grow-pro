import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">WatermelonGrowPro</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-green-600 transition">Home</Link>
            <Link to="/growing-guide" className="text-gray-900 hover:text-green-600 transition">Growing Guide</Link>
            <Link to="/varieties" className="text-gray-900 hover:text-green-600 transition">Varieties</Link>
            <Link to="/shop" className="text-gray-900 hover:text-green-600 transition">Shop</Link>
            <Link to="/contact" className="text-gray-900 hover:text-green-600 transition">Contact</Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-900 hover:text-green-600 transition">Home</Link>
              <Link to="/growing-guide" className="text-gray-900 hover:text-green-600 transition">Growing Guide</Link>
              <Link to="/varieties" className="text-gray-900 hover:text-green-600 transition">Varieties</Link>
              <Link to="/shop" className="text-gray-900 hover:text-green-600 transition">Shop</Link>
              <Link to="/contact" className="text-gray-900 hover:text-green-600 transition">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}