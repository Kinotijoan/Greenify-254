import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";

const How_It_Works = () => {
  return (
    <div
      className=""
      id="how-it-works"
    >
      <div className="text-center container">
        <h2 className="font-bold mt-6  text-2xl md:text-3xl md:pt-20 select-none">
          How it works
        </h2>
        <p className="text-lg mt-3 md:text-xl ">
          Wasteless empowers both individuals and companies to embrace a more
          sustainable lifestyle. Learn how our app simplifies waste management
          for everyone:
        </p>
        <h2 className="font-bold text-xl md:text-2xl mt-3 md:my-5">
          1. As a common user you can:
        </h2>
      </div>
      <div className="p-6">
        <div className="flex mb-6 md:gap-10 md:mx-20 md:relative ">
          <div className="my-5">
            <p className="hidden md:block md:text-xl  md:text-[#65FF00] ">
              Learn about the 3R's
            </p>
            <Image
              src="/images/Arrow1.png"
              alt=""
              width={150}
              height={0}
              className="hidden md:block md:absolute md:ml-8"
            />
          </div>
          <Card className="bg-[#FFF8ED] md:py-10 text-center">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Become a Waste Management Pro</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-light md:font-normal md:text-xl">
              <p  className="text-lg font-light md:font-normal md:text-xl">
                Empower yourself with knowledge! Access informative articles,
                tips, and resources to learn about waste reduction, recycling
                best practices, and composting techniques. Take control of your
                waste footprint and make a difference.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex mb-6 md:justify-center md:relative md:mx-20 md:gap-10 md:my-10">
          <Card className="bg-[#D2B8DF] py-10 text-center">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Join the Wasteless Movement</CardTitle>
              </CardHeader>
              <CardContent className="text-xl">
                <p  className="text-lg font-light md:font-normal md:text-xl">
                Connect with like-minded individuals passionate about reducing
                waste! Share experiences, swap tips, and find encouragement
                within our supportive community forum. Together, we can create
                positive change for our planet.
                </p>
              </CardContent>
            </Card>
          <div className="my-5 flex ">
            <Image
              src="/images/Arrow 2.png"
              alt=""
              width={150}
              height={0}
              className="hidden md:block md:rotate-12 md:absolute md:top-0 md:right-12"
            />
          <p className="hidden md:block md:text-xl  md:mt-10 md:text-[#65FF00] md:-right-[70px]"> Community Engagement</p>
        </div>
        </div>
        <div className="flex md:justify-center md:gap-10 ">
            <div className="my-5">
              <Image
                src="/images/Arrow 3.png"
                alt=""
                width={150}
                height={0}
                className="hidden md:block md:absolute ml-16"
              />
              <p className="hidden md:block md:text-xl  md:text-[#65FF00] md:mt-28 ">
                Find recycling places near you
              </p>
            </div>
            <Card className="bg-[#FFF8ED] py-10 text-center">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Make Recycling Effortless</CardTitle>
              </CardHeader>
              <CardContent className="text-xl">
                <p  className="text-lg font-light md:font-normal md:text-xl">
                  Locate recycling companies in your area with a tap! Our app
                  connects you with a network of verified recyclers, simplifying
                  responsible waste disposal. Find the perfect recycling
                  solution for your needs and contribute to a more sustainable
                  future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default How_It_Works;
