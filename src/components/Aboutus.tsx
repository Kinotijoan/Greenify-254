import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto pb-0">
        <h1 className="text-center text-5xl font-bold py-8 ">About Us</h1>
        <div className="">
          <p className="text-center text-2xl">
            Our innovative web application directly assigns responsibility to the people,<br/> waste collectors and Waste producers, aligning with SDG 11 and with the goals <br /> of the NEMA Sustainable Waste Management Act of 2022, to connect <br />the people to the recyclers that give waste a second chance at life. <br />Therefore, collectively make a significant difference in protecting our environment <br /> and ensuring a healthier future for generations to come.
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