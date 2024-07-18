import React from "react";
import Image from "next/image";

const Aboutus: React.FC = () => {
  return (
    <div className="container mx-auto pb-0" id="about-us">
      <h2 className="text-center text-3xl font-bold py-8 ">About Us</h2>
      <p className="text-center text-2xl">
        Our innovative web application directly assigns responsibility to the
        people,
        <br /> waste collectors and Waste producers, aligning with SDG 11 and
        with the goals <br /> of the NEMA Sustainable Waste Management Act of
        2022, to connect <br />
        the people to the recyclers that give waste a second chance at life.{" "}
        <br />
        Therefore, collectively make a significant difference in protecting our
        environment <br /> and ensuring a healthier future for generations to
        come.
      </p>
      <div className="flex justify-between mt-0">
        <Image
          src="/images/bin.png"
          alt="bin image"
          width={200}
          height={400}
          className="flex justify-start"
        />

        <Image
          src="/images/leaf.png"
          alt="leaf image"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
};

export default Aboutus;
