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
      " Increase awareness of your recycling services! Post the materials you accept on our app, attracting new customers and promoting responsible waste management practices. Grow your business and contribute to a circular economy.",
  },
  {
    image: "/images/search.png",
    title: "Update your profile",
    description:
      "Keep your company profile up-to-date! Easily edit your contact details, service offerings, and location information, ensuring users can find you effortlessly. Manage your online presence and connect with eco-conscious customers.",
  },
  {
    image: "/images/event.png",
    title: "Post an event",
    description:
      "Educate and engage your community!  Announce upcoming recycling drives, composting workshops, or other sustainability initiatives through our event posting feature.  Reach new customers, raise awareness of your services, and foster a collaborative approach to waste reduction.",
  },
];

const CompaniesSection = () => {
  return (
    <div className="mt-10 md:mt-20 md:mb-20 container">
      <h2 className="text-center font-bold text-xl md:text-2xl md:my-10">
          2. As a waste management company you can:
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
