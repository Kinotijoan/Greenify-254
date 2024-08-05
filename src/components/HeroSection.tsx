import React from "react";
// import Header from "./Header";
import Link from "next/link";
import { Button } from "./UI/Button";
import Image from "next/image";
import Header from "./Header";

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
          className="hidden md:block absolute left-5 top-8"
        />
        <Image
          src="/recycle.png"
          alt="recycle"
          width={250}
          height={250}
          className="hidden md:block absolute right-10 top-10"
        />
        <div className="  flex flex-col h-full justify-center my-auto md:flex md:flex-col md:justify-center md:items-center md:mt-24 px-5 select-none ">
          <h1 className=" font-bold text-5xl mb-6 text-center md:text-6xl ">
            Turning Trash Into Treasure
          </h1>
          <p className=" italic text-center md:text-2xl mb-16 max-w-[860px] text-lg font-bold">
            Make a difference for our planet, one step at a time. Wasteless
            empowers you to adopt sustainable habits and create a positive
            impact on the environment.
          </p>
          <Button
            asChild
            className=" text-black bg-white rounded-full w-36 mx-auto md:w-64  text-xl hover:bg-green-500 hover:text-white"
          >
            <Link href="/#about-us">Learn more</Link>
          </Button>
        </div>
        <Image
          src="/trash.png"
          alt="trash"
          width={250}
          height={250}
          className="hidden md:block absolute right-10 bottom-0"
        />
      </div>
    </section>
  );
};

export default Hero;
