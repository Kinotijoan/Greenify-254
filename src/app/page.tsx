
import React from "react";
import Hero from "@/components/HeroSection";
import MakeDifference from "@/components/MakeDifference";
import Features from "@/components/Features";
import Aboutus from "@/components/Aboutus";
import Footer from "@/components/UI/Footer";
import How_It_Works from "@/components/How_It_Works";
import CompaniesSection from "@/components/Companies";

const MyApp: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <How_It_Works/>
      <CompaniesSection/>
      <MakeDifference />
      <Footer />
    </main>
  );
};

export default MyApp;
