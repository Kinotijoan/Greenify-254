import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold mb-8 text-purple-600">About Us</h1>
        <div className="flex items-center justify-center">
          <Image
            src="/images/Aboutus.jpg"
            alt="About Us Image"
            width={1000}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;