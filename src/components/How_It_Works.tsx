import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";

const How_It_Works = () => {
  return (
    <div className="bg-gradient-to-r from-[rgba(255, 255, 255, 0.8)] to-[rgba(117, 255, 247, 0.8)]">
      <div className="text-center">
        <h1 className="font-bold text-5xl py-8">How It Works</h1>
        <p className="text-2xl ">
          Wasteless is your go to site for all things waste management and
          making <br /> our environment cleaner! Whether you want to:
        </p>
        <h2 className="font-bold text-3xl my-5">
          1.Manage your waste effectively
        </h2>
      </div>
      <div className="">
        <div className="flex justify-center gap-10 m-10 relative">
          <div className="my-5">
            <p className="text-2xl font-medium text-[#65FF00]">
              Learn about the 3R's
            </p>
            <Image
              src="/images/Arrow1.png"
              alt=""
              width={180}
              height={0}
              className="absolute ml-24"
            />
          </div>
          <Card className="bg-[#FFF8ED] p-16">
            <CardHeader>
              <CardTitle>hdbhbhjkl</CardTitle>
            </CardHeader>
            <CardContent>
              <p>fbbhjcsdjfbhkhrliekfn nlkdn</p>
            </CardContent>
          </Card>
          <Image
            src="/images/flower.png"
            alt=""
            width={200}
            height={0}
            className="rotate-12 absolute right-[168px]  -bottom-[40px]"
          />
        </div>
        <div className="flex justify-center gap-10 m-10">
          <Image
            src="/images/flower.png"
            alt=""
            width={200}
            height={0}
            className="rotate-45 left-[150px] -bottom-[180px]"
          />
          <Card className="bg-[#D2B8DF] bg-opacity-20 p-16">
            <CardHeader>
              <CardTitle>hdbhbhjkl</CardTitle>
            </CardHeader>
            <CardContent>
              <p>fbbhjcsdjfbhkhrliekfn nlkdn</p>
            </CardContent>
          </Card>
          <div className="my-5">
            <Image
              src="/images/Arrow 2.png"
              alt=""
              width={200}
              height={0}
              className="rotate-12 absolute start"
            />
            <p className="text-2xl font-medium my-16 text-[#65FF00]">
              Community Engagement
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 m-10 relative">
          <div className="my-5">
            <Image
              src="/images/Arrow 3.png"
              alt=""
              width={170}
              height={0}
              className="absolute ml-40"
            />
            <p className="text-2xl font-medium my-28 text-[#65FF00]">
              Recycling places near you
            </p>
          </div>
          <Card className="bg-[#FFF8ED] p-16 ">
            <CardHeader>
              <CardTitle>hdbhbhjkl</CardTitle>
            </CardHeader>
            <CardContent>
              <p>fbbhjcsdjfbhkhrliekfn nlkdn</p>
            </CardContent>
          </Card>
          <Image
            src="/images/flower.png"
            alt=""
            width={200}
            height={0}
            className="rotate-12 absolute right-[140px] -bottom-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default How_It_Works;
