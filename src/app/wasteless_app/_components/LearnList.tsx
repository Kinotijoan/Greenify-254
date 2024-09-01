import React from "react";
import { Calendar, BookOpen, ArrowUpRightFromSquare } from "lucide-react";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import Image from "next/image";

 


interface LearnListProps {
  title: string;
  date: string;
  author: string | null;
  description: string;
  img_url: string | null;
  link: string;
}



const LearnList = ({
  title,
  date,
  author,
  description,
  img_url,
  link,
}: LearnListProps) => {
  const defaultImageUrl =
    "/images/3R's.png";

  return (
    <div className="flex hover:bg-gray-100  items-center justify-center w-full p-4 space-x-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    {/* Image Section */}
    <div className="flex-shrink-0">
      {img_url ? (
        <Image
          src={img_url}
          alt={title}
          width={100} // Adjust width for a smaller image
          height={100}
          className="rounded-lg"
        />
      ) : (
        <Image
          src={defaultImageUrl}
          alt={title}
          width={100} // Adjust width for a smaller image
          height={100}
          className="rounded-lg"
        />
      )}
    </div>
  
    {/* Text Section */}
    <div className="flex-1">
      <h3 className="font-semibold text-md">{title}</h3>
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <BookOpen size={20} />
          {author ? <span>{author}</span> : <span>Anonymous</span>}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default LearnList;

