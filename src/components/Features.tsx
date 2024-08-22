'use client';

import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

type FeaturesType = {
  title: string;
  description: string;
  href: string;
  requiresSignIn: boolean;
};

const myFeatures: FeaturesType[] = [
  {
    title: "Education Platform",
    description:
      "Learn about waste reduction, recycling techniques, and composting through informative articles and engaging resources to contribute to a sustainable future.",
    href: "/education", // Leads directly to the education page.
    requiresSignIn: false, // No sign-in required for this card.
  },
  {
    title: "Discover Recyclers",
    description:
      "Our app connects you with a network of trusted recyclers, making responsible waste disposal a breeze. Simply browse our directory and find the perfect recycling solution for your needs.",
    href: "/signup", // Leads to sign-up page.
    requiresSignIn: true, // Sign-in required.
  },
  {
    title: "Discover Recycling Events",
    description:
      "Never miss out on a local recycling event again! We keep you informed about upcoming waste collection drives and other sustainability initiatives happening in your community.",
    href: "/signup", // Leads to sign-up page.
    requiresSignIn: true, // Sign-in required.
  },
];

const Features = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState<string>('');

  const handleExploreClick = (index: number, requiresSignIn: boolean, href: string) => {
    if (requiresSignIn) {
      setRedirectTo(href);
      setModalOpen(true);
    } else {
      window.location.href = href;
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSignIn = () => {
    window.location.href = redirectTo;
  };

  return (
    <>
      <section className="flex container" id="features">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-full mt-10">
          {myFeatures.map(({ title, description, href, requiresSignIn }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              href={href}
              onClick={() => handleExploreClick(index, requiresSignIn, href)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSignIn={handleSignIn}
      />
    </>
  );
};

export default Features;
