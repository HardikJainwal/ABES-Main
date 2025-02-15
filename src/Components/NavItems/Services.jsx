import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Database, 
  LineChart,
  ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies. We create responsive, scalable solutions tailored to your business needs.",
      features: ["Frontend Development", "Backend Systems", "API Integration",]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications. Reach your users on any device with intuitive, high-performance apps.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "Mobile UI/UX"]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security solutions. We ensure your systems and data remain safe and compliant.",
      features: ["Security Audits", "Threat Protection", "Compliance Management", "Security Training"]
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services. Modernize your operations with reliable, efficient cloud computing solutions.",
      features: ["Cloud Migration", "AWS/Azure Services", "Cloud Architecture", "DevOps"]
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights. We help you make data-driven decisions to drive business growth.",
      features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Real-time Analytics"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-blue-50 rounded-full inline-block">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        
        <div className="mt-20 text-center bg-blue-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;