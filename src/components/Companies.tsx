import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";

const CompaniesSection = () => {
  return (
    <div className="mt-20 mb-20">
      <div>
        <h2 className="text-center font-bold text-4xl my-10">2. Find Recyclables</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly text-center gap-10">
        <div>
          <div className="flex justify-center">
            <Image src="/images/PostIcon.png" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-bold text-[#FFB84D] text-2xl">Post what you're recycling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus imperdiet, nulla et <br /> dictum
              interdum, nisi lorem egestas odio, <br />
              vitae scelerisque enim ligula venenatis <br /> dolor.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <Image src="/images/search.png" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-bold text-[#FFB84D] text-2xl">Update your profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus imperdiet, nulla et <br /> dictum
              interdum, nisi lorem egestas odio, <br />
              vitae scelerisque enim ligula venenatis <br /> dolor.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <Image src="/images/event.png" alt="" width={200} height={200} />
          </div>
          <div>
            <h3 className="font-bold text-[#FFB84D] text-2xl">Post an event</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus imperdiet, nulla et <br /> dictum
              interdum, nisi lorem egestas odio, <br />
              vitae scelerisque enim ligula venenatis <br /> dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;