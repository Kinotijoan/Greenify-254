import React from "react";
import Header from "./header";
import Link from "next/link";
import { Button } from "./UI/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[90vh]" id="hero">
      <div>
        <Header />
      </div>
      <div className="h-[105vh] hero-bg w-full absolute"></div>
      <div className=" flex justify-evenly h-full relative">
        <Image
          src="/world.png"
          alt="world"
          width={350}
          height={350}
          className="hidden md:block absolute left-5 top-0"
        />
        <Image
          src="/recycle.png"
          alt="recycle"
          width={250}
          height={250}
          className="hidden md:block absolute right-20 top-8"
        />
        <div className="  flex flex-col items-center my-auto md:justify-center px-5 select-none ">
          <h1 className=" font-bold text-5xl mb-6 text-center md:text-6xl ">
            Turning Trash Into Treasure
          </h1>
          <p className=" text-center text-2xl mb-16 max-w-[860px]">
            Make a difference for our planet, one step at a time. Wasteless
            empowers you to adopt sustainable habits and create a positive
            impact on the environment.
          </p>
          <Button
            asChild
            className=" text-black bg-white rounded-full  text-xl hover:bg-green-500 hover:text-white"
          >
            <Link href="/#about-us">Learn more</Link>
          </Button>
        </div>
        <Image
          src="/trash.png"
          alt="trash"
          width={250}
          height={250}
          className="hidden md:block absolute right-10 bottom-20"
        />
      </div>
    </section>
  );
};

export default Hero;
