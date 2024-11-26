import React, { useState } from 'react';

export const ValuesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const values = [
    {
      image: "https://www.apple.com/v/iphone-16/d/images/overview/media-card/chip__fq1lz7wdahme_xlarge.jpg",
      title: "Colaboración",
      description: "Trabajamos juntos para alcanzar objetivos comunes"
    },
    {
      image: "https://www.apple.com/v/iphone-16/d/images/overview/media-card/highlights_camera_control_endframe__fkyhpzyubp2e_xlarge.jpg",
      title: "Calidad",
      description: "Buscamos la excelencia en todo lo que hacemos"
    },
    {
      image: "https://www.apple.com/v/iphone-16/d/images/overview/media-card/highlights_apple_intelligence_endframe__cb03eqws1r7m_xlarge.jpg",
      title: "Innovación",
      description: "Constantemente buscando nuevas soluciones"
    },
    {
        image: "https://www.apple.com/v/iphone-16/d/images/overview/camera-system/zoom-gallery/ultra_wide__ewqjq6k4vcqe_large.jpg",
        title: "Autonomia",
        description: "Buscamos la excelencia en todo lo que hacemos"
      },
  ];

  const slidesPerView = typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;
  const maxSlides = Math.ceil(values.length / slidesPerView) - 1;

  const nextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] px-4"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[16/9] relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <h3 className="absolute top-6 left-6 text-4xl font-bold text-white">
                    {value.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full transition-colors ${
            currentSlide === 0 
            ? 'bg-white/5 cursor-not-allowed' 
            : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              currentSlide === 0 ? 'text-gray-500' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide >= maxSlides}
          className={`p-3 rounded-full transition-colors ${
            currentSlide >= maxSlides 
            ? 'bg-white/5 cursor-not-allowed' 
            : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              currentSlide >= maxSlides ? 'text-gray-500' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ValuesCarousel;