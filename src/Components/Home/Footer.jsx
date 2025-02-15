import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Career', href: '#' }
  ];

  const services = [
    { name: 'Amazon Marketing', href: '#' },
    { name: 'Brand Development', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'Business Consulting', href: '#' },
    { name: 'Market Research', href: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ABES E-COM LLP</h3>
            <p className="text-sm mb-4">
              Helping Indian brands scale globally through strategic partnerships and
              performance-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center group hover:opacity-80 transition-opacity"
                    style={{ color: 'white' }} 
                  >
                    <ChevronRight size={16} className="mr-2 text-white group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="flex items-center group hover:opacity-80 transition-opacity"
                    style={{ color: 'white' }} 
                  >
                    <ChevronRight size={16} className="mr-2 text-white group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-white" />
                <p className="text-sm">123 Business Avenue, Tech Park, Noida, Uttar Pradesh, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-white" />
                <p className="text-sm">+91 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-white" />
                <p className="text-sm">contact@abesecom.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ABES E-COM LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-80 transition-opacity"  style={{ color: 'white' }}>
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'white' }}>
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'white' }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
