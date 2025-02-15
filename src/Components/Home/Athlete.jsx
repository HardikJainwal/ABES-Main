import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const AthletesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const athletes = [
    { id: 1, name: "John Smith", sport: "Basketball", image: "/api/placeholder/300/400", instagram: "https://instagram.com/johnsmith", achievements: "2x Olympic Gold Medalist" },
    { id: 2, name: "Sarah Johnson", sport: "Swimming", image: "/api/placeholder/300/400", instagram: "https://instagram.com/sarahjohnson", achievements: "World Record Holder" },
    { id: 3, name: "Mike Williams", sport: "Football", image: "/api/placeholder/300/400", instagram: "https://instagram.com/mikewilliams", achievements: "MVP 2023" },
    { id: 4, name: "Emma Davis", sport: "Tennis", image: "/api/placeholder/300/400", instagram: "https://instagram.com/emmadavis", achievements: "Grand Slam Champion" },
    { id: 5, name: "David Brown", sport: "Athletics", image: "/api/placeholder/300/400", instagram: "https://instagram.com/davidbrown", achievements: "Olympic Gold Medalist" },
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const totalSlides = athletes.length;
  const maxIndex = totalSlides - visibleSlides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Athletes</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
                width: `${(totalSlides * 100) / visibleSlides}%`,
              }}
            >
              {athletes.map((athlete) => (
                <div key={athlete.id} className="px-2" style={{ width: `${100 / visibleSlides}%` }}>
                  <div
                    className="bg-white shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105 h-full"
                    onClick={() => window.open(athlete.instagram, "_blank")}
                  >
                    <div className="relative group">
                      <img src={athlete.image} alt={athlete.name} className="w-full h-80 object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                        <Instagram className="text-white opacity-0 group-hover:opacity-100 w-12 h-12" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">{athlete.name}</h3>
                      <p className="text-gray-600">{athlete.sport}</p>
                      <p className="text-sm text-gray-500 mt-2">{athlete.achievements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transform -translate-x-1/2 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transform translate-x-1/2 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AthletesCarousel;
