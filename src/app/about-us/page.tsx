import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto pb-48">
        <h1 className="text-center text-5xl font-bold mt-8 mb-8 text-purple-600">About Us</h1>
        <div className="bg-cover bg-center rounded-2xl px-10" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
          <div className="bg-opacity-75 text-green py-60 px-60">
            <p className="text-center text-2xl font-extrabold">
              Our innovative web application directly assigns responsibility to the people, waste collectors and Waste producers, aligning with SDG 11 and with the goals of the NEMA Sustainable Waste Management Act of 2022, to connect the people to the recyclers that give waste a second chance at life. Therefore, collectively make a significant difference in protecting our environment and ensuring a healthier future for generations to come.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Aboutus;
