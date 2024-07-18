import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto pb-0">
        <h1 className="text-center font-bold text-3xl lg:text-5xl lg:font-bold py-8 ">About Us</h1>
        <div className="">
          <p className="text-center lg:text-2xl">
          Our planet is drowning in waste. Every year, millions of tons of trash end up in landfills, polluting our environment and threatening the entire ecosystem. Wasteless was founded with the mission to empower individuals and communities to reduce their environmental footprint by embracing a waste-conscious lifestyle.
          We are here to help you navigate a sustainable lifestyle with ease. We provide resources and tools to reduce waste, reuse what you have, and reimagine a future where less is more. Join us and make a positive impact on the environment, one step at a time!
          </p>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <Image
              src="/images/bin.png"
              alt="bin image"
              layout='responsive'
              width={300}
              height={400}
              className='flex justify-start w-full h-auto'
            />
          </div>
          <div>
            <Image
              src="/images/leaf.png"
              alt="leaf image"
              layout='responsive'
              width={200}
              height={200}
              className='w-full h-auto mx-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;