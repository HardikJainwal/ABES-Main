import React from 'react';
import amazonLogo from "../../assets/Partners/amazon.jpeg";
import costcoLogo from "../../assets/Partners/costco.png";
import ebayLogo from "../../assets/Partners/ebay.png";
import shopifyLogo from "../../assets/Partners/shopify.svg";
import tiktokLogo from "../../assets/Partners/tiktok.png";
import walmartLogo from "../../assets/Partners/wallmart.png";

const PartnersCarousel = () => {
  const partners = [
    { name: "Amazon", logo: amazonLogo },
    { name: "Walmart", logo: walmartLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "TikTok", logo: tiktokLogo },
    { name: "Costco", logo: costcoLogo }
  ];

  
  const doubledPartners = [...partners, ...partners];

  return (
    <>
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .carousel-wrapper {
          overflow: hidden;
          position: relative;
        }

        .animate-slide {
          display: flex;
          animation: slide 30s linear infinite;
        }

        /* Pause animation when hovered */
        .carousel-wrapper:hover .animate-slide {
          animation-play-state: paused;
        }

        .partner-item {
          flex-shrink: 0;
          margin: 0 20px;
          width: 150px;
          transition: transform 0.3s ease-in-out;
        }

        /* Zoom effect on hover */
        .partner-item:hover {
          transform: scale(1.2);
        }

        .partner-item img {
          width: 100%;
          height: 80px;
          object-fit: contain;
        }
      `}</style>

      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners & Collaborators
            </h2>
            <p className="text-lg text-gray-600">
              Working with leading e-commerce platforms to bring Indian brands to global markets
            </p>
          </div>

          <div className="carousel-wrapper">
            
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            
            <div className="animate-slide">
              {doubledPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="partner-item">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersCarousel;
