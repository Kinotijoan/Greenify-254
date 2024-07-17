import React from "react";
import Hero from "@/components/HeroSection";
import MakeDifference from "@/components/MakeDifference";
import Features from "@/components/Features";
import Aboutus from "./about-us/page";
import Footer from "@/components/UI/Footer";

const MyApp: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <MakeDifference />
      <Aboutus />
      <Footer />
    </main>
  );
};

export default MyApp;
