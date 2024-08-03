import React from "react";
import { Calendar, BookOpen, ArrowUpRightFromSquare } from "lucide-react";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import Image from "next/image";
 


interface Ed_cardProps {
  title: string;
  date: string;
  author: string | null;
  description: string;
  img_url: string | null;
  link: string;
}

function truncateText(text: string, maxWords: number): string {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '..';
  }
  return text;
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
    "/images/3R's.png";

    const truncatedDescription = truncateText(description, 40);
  return (
   <div className="box space-y-3">
  <h3 className="font-bold text-xl">{title}</h3>
  <div className="flex space-x-6">
    <div className="flex flex-row items-center space-x-2">
      <Calendar size={20} />
      <span>{date}</span>
    </div>
    <div className="flex flex-row items-center space-x-2">
      <BookOpen size={20} />
      {author ? <span>{author}</span> : <span>Anonymous</span>}
    </div>
  </div>

  {img_url ? <Image src={img_url} alt={title} width={300} height={100} className="rounded-xl" /> : <Image src={defaultImageUrl} alt={title} width={200} height={150} />}
  
  <p className="font-light">{truncatedDescription}.</p>
  <Link href={link}>
    <Button variant="outline" className="ml-auto">
      Read more
      <ArrowUpRightFromSquare className="ml-2 h-4 w-4" />
    </Button>
  </Link>
</div>
  );
};

export default Ed_card;
