import React from 'react';
import { Trophy, DollarSign, Lightbulb, Building } from 'lucide-react';

const Challenge = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-10 shadow-md">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 font-serif text-gray-900">Challenge</h1>
        <p className="text-xl text-gray-700 font-medium">
          ABES is launching India's largest challenge for D2C startups & product-based brands looking to scale in the USA
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-gradient-to-br from-white to-yellow-50 p-5 shadow-lg flex items-start space-x-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[150px]">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-lg shadow-md">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1 text-yellow-800">Total Prize Pool</h3>
            <p className="text-2xl font-bold text-yellow-600">₹10 Crores+</p>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-white to-green-50 p-5 shadow-lg flex items-start space-x-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[150px]">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-lg shadow-md">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1 text-green-800">Grand Prize</h3>
            <p className="text-2xl font-bold text-green-600">₹5 Crores</p>
            <p className="text-sm text-green-700">for the top-performing brand</p>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-white to-purple-50 p-5 shadow-lg flex items-start space-x-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[150px]">
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-lg shadow-md">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1 text-purple-800">Guaranteed Funding</h3>
            <p className="text-sm text-purple-700">Investment Opportunities for the best brands</p>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-white to-blue-50 p-5 shadow-lg flex items-start space-x-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[150px]">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg shadow-md">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1 text-blue-800">Platform Access</h3>
            <p className="text-sm text-blue-700">
              Access to Amazon USA, Walmart, and TikTok Shop Expansion Programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;   