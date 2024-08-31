'use client'
import { Recycle } from 'lucide-react';
import React from 'react';

const ScrollingText: React.FC = () => {
  const content = (
    <>
      <p>Making a difference for our planet, one step at a time.</p>
      <Recycle />
    </>
  );

  return (
    <div className="w-full h-12 bg-green-400 transform rotate-[-2deg] overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-scroll flex flex-row gap-2">
        {/* Repeat content to create a continuous effect */}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move half of the content width */
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;