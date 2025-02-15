import React from 'react';
import { Globe, TrendingUp, Flag, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />, 
      title: "Who We Are", 
      description: "ABES E-COM LLP is a premium e-commerce and market service provider, specializing in helping Indian brands expand into the USA and global markets through a data-driven, investment-backed, and result-oriented approach."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />, 
      title: "Our Philosophy", 
      description: "We believe the future of Indian entrepreneurship lies in global expansion. ABES bridges the gap by providing a one-stop solution for product development, branding, market penetration, logistics, and profitability."
    },
    {
      icon: <Flag className="w-8 h-8 text-blue-600" />, 
      title: "Our Mission", 
      description: "Founded with a vision to make India a global leader in e-commerce exports, ABES enables businesses of all sizes to seamlessly enter international markets."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />, 
      title: "Our Team", 
      description: "Led by seasoned experts in marketplace strategy, brand positioning, digital marketing, logistics, and investment management, our team is committed to transforming Indian businesses into global brands."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
            About ABES E-COM LLP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most powerful e-commerce growth accelerator, dedicated to helping Indian brands expand, scale, and thrive in the USA and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "1000+", label: "Clients Worldwide" },
            { number: "50+", label: "Team Members" },
            { number: "95%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
