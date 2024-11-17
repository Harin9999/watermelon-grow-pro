import React from 'react';
import { ShoppingBag, Package, Leaf, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const products = [
  {
    id: 1,
    name: 'Black Diamond Watermelon Seeds',
    description: 'Premium heirloom seeds for growing the classic Black Diamond watermelon. Known for exceptional size and sweet, crisp flesh.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 127,
    link: 'https://www.amazon.com/s?k=black+diamond+watermelon+seeds&crid=E6H7UWE8FKII&sprefix=black+diamond+watermelon%2Caps%2C318&linkCode=ll2&tag=mysavingtod0b-20&linkId=3f62dccd1c70456926552eab51a6dd6a&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 2,
    name: 'Organic Growing Kit',
    description: 'Complete watermelon growing kit including organic fertilizer, soil amendments, and growing guides.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 84,
    link: 'https://www.amazon.com/s?k=organic+watermelon+seed+growing+kit&crid=TES426SSTYSF&sprefix=organic+growing+kit%2Caps%2C445&linkCode=ll2&tag=mysavingtod0b-20&linkId=ec5fb35daa440a0a8f00a46cfffb9edc&language=en_US&ref_=as_li_ss_tl'
  }
];

export default function Shop() {
  return (
    <>
      <SEOHead
        title="Shop Premium Watermelon Seeds & Growing Supplies"
        description="Purchase high-quality Black Diamond watermelon seeds and complete growing kits. Everything you need for a successful harvest."
        keywords="black diamond watermelon seeds, watermelon growing kit, organic growing supplies, gardening equipment, watermelon cultivation"
        path="/shop"
      />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Growing Supplies
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality seeds and supplies for growing perfect watermelons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-gray-600">{product.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600">{product.reviews} reviews</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                  >
                    <Leaf className="h-5 w-5 mr-2" />
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              As an Amazon Associate, we earn from qualifying purchases at no additional costs to you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}