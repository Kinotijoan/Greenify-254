import React from "react";
import Image from "next/image";

const Aboutus: React.FC = () => {
  return (
    <section className="container mx-auto pb-0" id="about-us">
     
      <p className="text-center mb-3 text-lg font-light lg:font-normal lg:text-xl">
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
          width={300}
          height={200}
          className="hidden lg:flex justify-start"
        />

        <Image
          src="/images/leaf.png"
          alt="leaf image"
          width={200}
          height={200}
          className="hidden lg:flex justify-end"
        />
      </div>
    </section>
  );
};

export default Aboutus;
