import React from "react";
import Card from "./Card";
import Image from "next/image";

type FeaturesType = {
  title: string;
  description: string;
  href: string;
};
const myFeatures: FeaturesType[] = [
  {
    title: "Feature 1",
    description: "Description 1",
    href: "#",
  },
  {
    title: "Feature 2",
    description: "Description 2",
    href: "#",
  },
  {
    title: "Feature 3",
    description: "Description 3",
    href: "#",
  },
];

const Features = () => {
  return (
    <>
      <div className="flex">
        <Image
          src="/flower.svg"
          alt="flower"
          width={300}
          height={300}
          className="hidden md:block left-0 "
        />
        <div className=" flex absolute justify-center gap-10 w-full">
          {myFeatures.map(({ title, description, href }, index) => (
            <Card title={title} description={description} href={href} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
