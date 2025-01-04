"use-client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const ExpandingButton = ({
  title,
  points,
  className
}: {
  title: string,
  points: string[],
  className: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6">
      <div
        className={`
          relative
          transition-all duration-500 ease-out
          bg-white border border-black/10
          rounded-xl shadow-lg cursor-pointer
          hover:shadow-xl
          origin-top
          ${isHovered ? 'p-3 sm:p-4 shadow-[0_0_15px_rgba(0,0,0,0.2)]' : 'p-2 sm:p-3'}
          w-full
          max-w-[500px]
          min-w-[300px]
          hover:glow-effect
          ${className}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center text-center w-full">
          <h2 className={`
            sm:text-md font-bold text-blue-900    flex items-center gap-1
            ${isHovered ? 'text-green-800' : ''}
          `}>
            {title}
            <ArrowRight
              className={`transition-transform duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}
              size={16}
            />
          </h2>
            <div className={`
            transition-all duration-500 ease-in-out overflow-hidden w-full
            ${isHovered ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
            `}>
            <ul className="text-black/70 text-xs sm:text-sm space-y-2 list-disc px-4">
              {points.map((point, index) => (
              <li key={index} className="text-left pl-2 marker:text-black/70">
                <span className="text-black/90">{point}</span>
              </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
