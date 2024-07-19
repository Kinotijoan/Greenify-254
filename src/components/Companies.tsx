import Image from "next/image";
import React from "react";

interface CompaniesCardProps {
  image: string;
  title: string;
  description: string;
}

const CompaniesCard = ({ image, title, description }: CompaniesCardProps) => {
  return (
    <div className="mx-auto mb-6">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold md:font-medium text-[#FFB84D] text-2xl mb-3">{title}</h3>
        <p className="max-w-[400px] text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
};

const CompaniesCardArray: CompaniesCardProps[] = [
  {
    image: "/images/PostIcon.png",
    title: "Post what you're recycling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  },
  {
    image: "/images/search.png",
    title: "Update your profile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  },
  {
    image: "/images/event.png",
    title: "Post an event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  },
];

const CompaniesSection = () => {
  return (
    <div className="mt-10 md:mt-20 md:mb-20 container">
      <h2 className="text-center font-bold text-xl md:text-2xl md:my-10">
        2.Find Recyclables
      </h2>
      <div className="md:flex justify-center md:text-xl text-center md:gap-4">
        {CompaniesCardArray.map(({ image, title, description }, index) => (
          <CompaniesCard
            key={index}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
