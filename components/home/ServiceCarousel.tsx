  import React, { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { ServicesGrid } from './ServiceGrid';

  const ServiceCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [LandingCarouselData] = useState([
      {
        header: "Seamless Development Across All Platforms.",
        info: [
          "Revolutionize Your Applications with Qt's Cross-Platform Framework.",
          "Expert insights from PthinkS.",
          "Innovation at every step."
        ]
      },
      {
        header: "Advanced Technology Solutions.",
        info: [
          "Harness the power of modern frameworks.",
          "Expert insights from PthinkS.",
          "Cutting-edge solutions for all industries."
        ]
      },
      {
        header: "Future-Proof Your Applications.",
        info: [
          "Stay ahead with the latest tech advancements.",
          "Expert insights from PthinkS.",
          "Building tomorrow's technology today."
        ]
      },
      {
        header: "Custom Solutions for Your Needs.",
        info: [
          "Tailored strategies to meet your business goals.",
          "Expert insights from PthinkS.",
          "Personalized support and service."
        ]
      },
      {
        header: "Empower Your Business with Technology.",
        info: [
          "Leverage innovative tech to drive success.",
          "Expert insights from PthinkS.",
          "Empowering your team with the right tools."
        ]
      }
    ]);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % LandingCarouselData.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [LandingCarouselData.length]);

    const slide = {
      enter: { opacity: 0, x: 20 },
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: -20 }
    };


    return (
        <div className="bg-white bg-opacity-50 pt-3 sm:pt-8 pb-0 sm:pb-4 rounded-xl w-full shadow-lg px-2 sm:px-4">
          <div className="relative min-h-[150px] sm:min-h-[200px] md:min-h-[250px] overflow-hidden w-full">
            <AnimatePresence mode="wait">
          <motion.div
              key={current}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-0 sm:p-4"
          >
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-0 sm:mb-4 text-left">
              {LandingCarouselData[current].header}
            </h2>
            <div className="space-y-1 sm:space-y-2 text-left">
              {LandingCarouselData[current].info.map((text, idx) => (
              <li key={idx} className="text-sm sm:text-base md:text-2xl text-gray-900">
                {text}
              </li>
              ))}
            </div>
          </motion.div>
            </AnimatePresence>
          </div>
          <ServicesGrid />

          <div className="flex justify-center gap- sm:gap-2  sm:mt-4">
            {LandingCarouselData.map((_, idx) => (
            <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 hover:scale-110 transform ${
                idx === current ? 'w-6 sm:w-8 bg-black' : 'bg-gray-800 hover:bg-gray-600'
            }`}
            />
            ))}
          </div>




        </div>
    );
  };

  export default ServiceCarousel;