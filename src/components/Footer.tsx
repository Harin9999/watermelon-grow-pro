import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/growing-guide') {
      navigate('/growing-guide');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WatermelonGrowPro</h3>
            <p className="text-gray-400">
              Expert guidance for growing the perfect Black Diamond watermelons.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/watermelongrowpro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/watermelongrow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/watermelongrowpro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:connect@watermelongrowpro.com" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Send us an email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/growing-guide" className="text-gray-400 hover:text-white transition">Growing Guide</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleSectionClick('conditions')}
                  className="text-gray-400 hover:text-white transition text-left"
                >
                  Growing Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('problems')}
                  className="text-gray-400 hover:text-white transition text-left"
                >
                  Common Problems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('seasonal')}
                  className="text-gray-400 hover:text-white transition text-left"
                >
                  Seasonal Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('faq')}
                  className="text-gray-400 hover:text-white transition text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">
              <span className="block mb-2">AMAZON AFFILIATE DISCLOSURE</span>
              WatermelonGrowPro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.
            </p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} WatermelonGrowPro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}