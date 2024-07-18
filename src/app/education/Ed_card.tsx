import React from "react";
import { Calendar, BookOpen, ArrowUpRightFromSquare } from "lucide-react";
import { Button } from "@/components/UI/Button";
import Link from "next/link";


interface Ed_cardProps {
  title: string;
  date: string;
  author: string | null;
  description: string;
  img_url: string | null;
  link: string;
}

const Ed_card = ({
  title,
  date,
  author,
  description,
  img_url,
  link,
}: Ed_cardProps) => {
  const defaultImageUrl =
    "../../public/data_scientist.jpeg"
  return (
    <div className="w-1/5 m-2 border-2 border-green-800 rounded-lg shadow-black space-y-4 p-4">
      <h3 className="font-bold text-xl">{title}</h3>
      <div className=" flex space-x-6">
        <div className="flex flex-row items-center space-x-2">
          <Calendar size={20} />
          <span>{date}</span>
        </div>
        <div className="flex flex-row items-center space-x-2 ">
          <BookOpen size={20} />
          {author ? <span>{author}</span> : <span>Anonymous</span>}
        </div>
      </div>
      <div
        className=" w-10/12 rounded-lg "
        style={{
          backgroundImage: `url(${img_url ? img_url : defaultImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="font-light">
        {description}.
      </p>
      <Link href={link}>
      <Button variant="outline" className="ml-44">
        Read more
        <ArrowUpRightFromSquare className="ml-2  h-4 w-4" />
      </Button>
      </Link>
    </div>
  );
};

export default Ed_card;
