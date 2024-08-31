'use client';

import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import { CardSpotlight } from './ui/card-spotlight';
import { HoverEffect } from './ui/card-hover-effect';
import "@/app/globals.css";


type FeaturesType = {
  title: string;
  description: string;
  href: string;
  requiresSignIn: boolean;
};

const myFeatures: { title: string; description: string; link: string; requiresSignIn: boolean; }[] = [
  {
    title: "Education Platform",
    description:
      "Learn about waste reduction, recycling techniques, and composting through informative articles and engaging resources to contribute to a sustainable future.",
    link: "/education", // Leads directly to the education page.
    requiresSignIn: false, // No sign-in required for this card.
  },
  {
    title: "Discover Recyclers",
    description:
      "Our app connects you with a network of trusted recyclers, making responsible waste disposal a breeze. Simply browse our directory and find the perfect recycling solution for your needs.",
    link: "/signup", // Leads to sign-up page.
    requiresSignIn: true, // Sign-in required.
  },
  {
    title: "Discover Recycling Events",
    description:
      "Never miss out on a local recycling event again! We keep you informed about upcoming waste collection drives and other sustainability initiatives happening in your community.",
    link: "/signup", // Leads to sign-up page.
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
    <div className=" lg:mt-20 lg:pt-64 lg:pb-32 ">
      <section className="container mx-auto pb-0" id="features">
        <p className="text-center mb-3 text-lg font-light lg:font-light lg:text-7xl lg:bg-gradient-to-r lg:from-black lg:to-green-500 lg:bg-clip-text lg:text-transparent">
          Protect our environment today for a healthier tomorrow.
        </p>
      </section>
      <section className="flex container" id="features">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-full mt-10">
          <HoverEffect items={myFeatures} className='custom-card-bg'/>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default Features;
