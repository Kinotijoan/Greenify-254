import React from "react";
import Image from "next/image";

const Aboutus: React.FC = () => {
  return (
    <div className="container mx-auto pb-0" id="about-us">
      <h2 className="text-center text-2xl md:text-3xl font-bold pt-20 pb-2 ">
        About Us
      </h2>
      <p className="text-center mb-3 text-lg font-light md:font-normal md:text-xl">
        Our innovative web application directly assigns responsibility to the
        people, waste collectors and Waste producers, aligning with SDG 11 and
        with the goals of the NEMA Sustainable Waste Management Act of 2022, to
        connect the people to the recyclers that give waste a second chance at
        life. Therefore, collectively make a significant difference in
        protecting our environment and ensuring a healthier future for
        generations to come.
      </p>
      <div className="flex justify-between mt-0">
        <Image
          src="/images/bin.png"
          alt="bin image"
          width={200}
          height={400}
          className="hidden md:flex justify-start"
        />

        <Image
          src="/images/leaf.png"
          alt="leaf image"
          width={200}
          height={300}
          className="hidden md:flex justify-end"
        />
      </div>
    </div>
  );
};

export default Aboutus;
