import React from 'react';
import { Sprout } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const varieties = [
  {
    name: "Black Diamond",
    description: "A classic heirloom variety known for its large size (up to 50 pounds) and sweet, bright red flesh. The dark green to black rind makes it a striking addition to any garden.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "90-100 days",
    size: "35-50 pounds",
    features: ["Heat Resistant", "High Yield", "Storage Friendly", "Sweet Flesh"]
  },
  {
    name: "Jubilee",
    description: "Developed in 1963 in Florida, it's one of the best-selling varieties worldwide. Known for its distinctive light green stripes and excellent shipping qualities.",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "95-100 days",
    size: "25-40 pounds",
    features: ["Disease Resistant", "Long Shelf Life", "Commercial Favorite"]
  },
  {
    name: "Charleston Gray",
    description: "Created in 1954, this variety is in the lineage of about 95% of watermelons grown globally. Its light gray-green rind and long shape are distinctive.",
    image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "85-95 days",
    size: "28-35 pounds",
    features: ["Wilt Resistant", "Good Shipper", "Adaptable"]
  },
  {
    name: "Crimson Sweet",
    description: "Developed at Kansas State University in 1963, this variety is prized for its high sugar content and excellent disease resistance.",
    image: "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "85 days",
    size: "20-30 pounds",
    features: ["Disease Resistant", "High Sugar Content", "Popular Choice"]
  },
  {
    name: "Sugar Baby",
    description: "A popular personal-sized or 'icebox' watermelon introduced in 1969. Perfect for small gardens and individual servings.",
    image: "https://images.unsplash.com/photo-1598025362874-49480e049c76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "75-80 days",
    size: "8-12 pounds",
    features: ["Compact Size", "Early Maturity", "Space Efficient"]
  },
  {
    name: "Georgia Rattlesnake",
    description: "One of the oldest heirloom varieties, developed in Georgia around the 1830s. Known for its distinctive striped pattern and sweet flavor.",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "90-100 days",
    size: "25-30 pounds",
    features: ["Heat Tolerant", "Historic Variety", "Sweet Taste"]
  },
  {
    name: "Allsweet",
    description: "An open-pollinated variety popular in commercial production. Known for its reliable performance and excellent flavor.",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "90-95 days",
    size: "25-30 pounds",
    features: ["Commercial Grade", "Reliable Yield", "Good Flavor"]
  },
  {
    name: "Sangria",
    description: "A hybrid variety known for its exceptional sweetness and deep red flesh. Popular in commercial production across multiple states.",
    image: "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "85-90 days",
    size: "20-25 pounds",
    features: ["Hybrid Vigor", "Sweet Flesh", "Wide Adaptation"]
  },
  {
    name: "Tri-X-313",
    description: "The most popular seedless variety as of 2000, grown in ten states. Perfect for those who prefer seedless watermelons.",
    image: "https://images.unsplash.com/photo-1598025362874-49480e049c76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "85-90 days",
    size: "15-20 pounds",
    features: ["Seedless", "Commercial Favorite", "Easy to Eat"]
  },
  {
    name: "Summer Sweet 5244",
    description: "A popular seedless variety grown in nine states. Known for its consistent quality and excellent shelf life.",
    image: "https://images.unsplash.com/photo-1598025362874-49480e049c76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    growingTime: "83-87 days",
    size: "16-20 pounds",
    features: ["Seedless", "Long Shelf Life", "Uniform Size"]
  }
];

// Rest of the component remains unchanged
export default function Varieties() {
  return (
    <>
      <SEOHead
        title="Watermelon Varieties Guide | Types of Watermelons"
        description="Explore different watermelon varieties including Black Diamond, Jubilee, Charleston Gray, and more. Learn about their characteristics and growing requirements."
        keywords="watermelon varieties, black diamond watermelon, jubilee watermelon, charleston gray, watermelon types, growing watermelons"
        path="/varieties"
      />
      
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Watermelon Varieties
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the unique characteristics of different watermelon varieties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {varieties.map((variety, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={variety.image}
                    alt={`${variety.name} watermelon`}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{variety.name}</h2>
                  <p className="text-gray-600 mb-4">{variety.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Growing Time</span>
                      <p className="text-gray-900">{variety.growingTime}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Size</span>
                      <p className="text-gray-900">{variety.size}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {variety.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}