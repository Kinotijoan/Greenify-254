import React from "react";
import { Calendar, BookOpen, ArrowUpRightFromSquare } from "lucide-react";
import { Button } from "@/components/UI/Button";

interface Ed_cardProps {
  title: string;
  date: string;
  author: string;
  description: string;
  img_urel: string;
}

const Ed_card = () => {
  return (
    <div className="w-1/5 m-2 border-2 border-green-800 rounded-lg shadow-black space-y-4 p-4">
      <h3 className="font-bold text-xl">Modern Web App Design Patterns</h3>
      <div className=" flex space-x-6">
        <div className="flex flex-row items-center space-x-2">
          <Calendar size={20} />
          <span>13 April 2024</span>
        </div>
        <div className="flex flex-row items-center space-x-2 ">
          <BookOpen size={20} />
          <span>Joan Kinoti</span>
        </div>
      </div>
      <div className="background w-10/12 rounded-lg"></div>
      <p className="font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quo
        dolores, nulla reiciendis tenetur, illum eum architecto beatae
        perferendis esse sapiente unde iste cupiditate nisi temporibus.
        Cupiditate qui deleniti nam.
      </p>
      <Button variant="outline" className="ml-44">
        Read more
        <ArrowUpRightFromSquare className="ml-2  h-4 w-4" />
      </Button>
    </div>
  );
};

export default Ed_card;
