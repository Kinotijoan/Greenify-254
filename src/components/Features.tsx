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
    title: "Education Platform",
    description: "Learn about waste reduction, recycling techniques, and composting through informative articles and engaging resources.",
    href: "#",
  },
  {
    title: "Discover Recyclers",
    description: "Our app connects you with a network of trusted recyclers, making responsible waste disposal a breeze. Simply browse our directory and find the perfect recycling solution for your needs.",
    href: "#",
  },
  {
    title: "Discover Recycling Events",
    description: "Never miss out on a local recycling event again! We keep you informed about upcoming waste collection drives and other sustainability initiatives happening in your community.",
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
        <div className="flex flex-col items-center lg:flex lg:absolute justify-center gap-10 w-full">
          {myFeatures.map(({ title, description, href }, index) => (
            <Card title={title} description={description} href={href} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
