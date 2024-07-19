import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";

const CompaniesSection = () => {
  return (
    <div className="mt-20 mb-20">
      <div>
        <h2 className="text-center font-bold text-4xl my-10">
          2.As a waste management company you can:
        </h2>
      </div>
      <div className="flex-col lg:flex justify-evenly text-center">
        <div>
          <div className="flex justify-center">
            <Image src="/trash.png" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-medium text-[#FFB84D] text-2xl">
              Market recycled products
            </h3>
            <p className="">
            Increase awareness of your recycling services! Post the materials you accept on our app, attracting new customers and promoting responsible waste management practices. Grow your business and contribute to a circular economy.
            </p>
          </div>
        </div>
        <div className="mx-10">
          <div className="flex justify-center mb-10">
            <Image src="/images/profile.jpg" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-bold text-[#FFB84D] text-2xl">
              Update your profile
            </h3>
            <p className="">
            Keep your company profile up-to-date! Easily edit your contact details, service offerings, and location information, ensuring users can find you effortlessly. Manage your online presence and connect with eco-conscious customers.
            </p>
          </div>
        </div>
        <div className="mx-10">
          <div className="flex justify-center">
            <Image src="/images/event-sketch.png" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-bold text-[#FFB84D] text-2xl">
              Post an event
            </h3>
            <p className="">
            Educate and engage your community!  Announce upcoming recycling drives, composting workshops, or other sustainability initiatives through our event posting feature.  Reach new customers, raise awareness of your services, and foster a collaborative approach to waste reduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
