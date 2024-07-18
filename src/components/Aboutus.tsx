import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto pb-0">
        <h1 className="text-center text-5xl font-bold py-8 ">About Us</h1>
        <div className="">
          <p className="text-center text-2xl">
          Our planet is drowning in waste. Every year, millions of tons of trash end up in landfills, polluting our environment and threatening the entire ecosystem. Wasteless was founded with the mission to empower individuals and communities to reduce their environmental footprint by embracing a waste-conscious lifestyle.
          We are here to help you navigate a sustainable lifestyle with ease. We provide resources and tools to reduce waste, reuse what you have, and reimagine a future where less is more. Join us and make a positive impact on the environment, one step at a time!
          </p>
        </div>
        <div className="flex justify-between mt-0">
          <div>
            <Image
              src="/images/bin.png"
              alt="bin image"
              width={200}
              height={400}
              className='flex justify-start'
            />
          </div>
          <div>
            <Image
              src="/images/leaf.png"
              alt="leaf image"
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;