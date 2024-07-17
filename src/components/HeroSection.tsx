import React from "react";
import Header from "./header";
import Link from "next/link";
import { Button } from "./UI/Button";
import Image from "next/image";
import Features from "./Features";

const Hero = () => {
  return (
    <section className="w-full h-[90vh]">
      <div>
        <Header />
      </div>
      <div className="w-screen h-[150vh] hero-bg absolute"></div>
      <div className=" flex justify-evenly h-full relative">
        <Image
          src="/world.png"
          alt="world"
          width={350}
          height={350}
          className="hidden md:block absolute left-20 -top-10"
        />
        <Image
          src="/recycle.png"
          alt="recycle"
          width={250}
          height={250}
          className="hidden md:block absolute right-20 -top-7 "
        />
        <div className="  flex flex-col items-center justify-center p-20">
          <h1 className=" font-bold text-6xl">Turning trash to treasure</h1>
          <p className=" text-center text-2xl mt-3 max-w-[860px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor
          </p>
          <Button
            asChild
            className=" text-black bg-white rounded-full mt-3 text-xl hover:bg-purple-400"
          >
            <Link href="/about">Learn more</Link>
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
