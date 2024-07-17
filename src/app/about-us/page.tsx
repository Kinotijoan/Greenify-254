import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#F6E7FF] to-[#D175FF] bg-opacity-10">
      <div className="container mx-auto pb-48">
        <h1 className="text-center text-5xl font-bold py-8 mb-8 text-pink-600">About Us</h1>
        <div className="bg-opacity-75 text-green-800 py-20 px-20">
          <p className="text-center text-2xl font-extrabold">
            Our innovative web application directly assigns responsibility to the people, waste collectors and Waste producers, aligning with SDG 11 and with the goals of the NEMA Sustainable Waste Management Act of 2022, to connect the people to the recyclers that give waste a second chance at life. Therefore, collectively make a significant difference in protecting our environment and ensuring a healthier future for generations to come.
          </p>
        </div>
        <div className="flex justify-between mt-20">
          <div>
            <Image
              src="/images/bin.png"
              alt="bin image"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              src="/images/leaf.png"
              alt="leaf image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;