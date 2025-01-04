"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
                                       testimonials,
                                       autoplay = true, // Default autoplay enabled
                                     }: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length); // Cycle through testimonials
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Handle cycling backward
  };

  useEffect(() => {
    // Only enable autoplay if `autoplay` is true
    if (autoplay) {
      const interval = setInterval(handleNext, 3000); // Set interval to 3 seconds
      return () => clearInterval(interval); // Clean up the interval
    }
  }, [autoplay, handleNext]);

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
      <div className="max-w-md md:max-w-5xl mx-auto antialiased font-sans px-6 md:px-10 lg:px-16 py-24">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-36">
          <div>
            <div className="relative h-96 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.src}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          z: -100,
                          rotate: randomRotateY(),
                        }}
                        animate={{
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : randomRotateY(),
                          zIndex: isActive(index)
                              ? 999
                              : testimonials.length + 2 - index,
                          y: isActive(index) ? [0, -80, 0] : 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          z: 100,
                          rotate: randomRotateY(),
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 origin-bottom"
                    >
                      <Image
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={600}
                          height={600}
                          draggable={false}
                          className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-6">
            <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
            >
              <h3 className="text-3xl font-bold dark:text-white text-black">
                {testimonials[active].name}
              </h3>
              <p className="text-lg text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-xl text-gray-500 mt-10 dark:text-neutral-300 leading-relaxed">
                {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-6 pt-16">
              <button
                  onClick={handlePrev}
                  className="h-12 w-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                  onClick={handleNext}
                  className="h-12 w-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};