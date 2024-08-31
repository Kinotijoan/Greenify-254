import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";
import StackingCards from "./ScrollCard";
import ScrollingText from "./Scrollingtext";

const How_It_Works = () => {
  return (
    <section
      className=""
      id="how-it-works"
    >
      <div className="flex flex-col items-center justify-center ">
        <ScrollingText />
      </div>
      <div className="flex flex-col items-center justify-center md:px-40">
        <StackingCards />
      </div>

        
      </section>
  );
};

export default How_It_Works;
