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
    description:
      "Learn about waste reduction, recycling techniques, and composting through informative articles and engaging resources.",
    href: "#",
  },
  {
    title: "Discover Recyclers",
    description:
      "Our app connects you with a network of trusted recyclers, making responsible waste disposal a breeze. Simply browse our directory and find the perfect recycling solution for your needs.",
    href: "#",
  },
  {
    title: "Discover Recycling Events",
    description:
      "Never miss out on a local recycling event again! We keep you informed about upcoming waste collection drives and other sustainability initiatives happening in your community.",
    href: "#",
  },
];

const Features = () => {
  return (
    <>
      <section className="flex container " id="features">
        {/* <Image
          src="/flower.svg"
          alt="flower"
          width={250}
          height={250}
          className="hidden md:block md:left-0 select-none  "
        /> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-full mt-10">
          {myFeatures.map(({ title, description, href }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
