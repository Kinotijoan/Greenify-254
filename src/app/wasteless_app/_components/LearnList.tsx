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
   <div className="box space-y-3">
  {/* <Link href={link}> */}
    
  <h3 className="font-bold text-xl">{title}</h3>
  {/* </Link> */}
  <div className="flex space-x-6">
    <div className="flex flex-row items-center space-x-2">
      <BookOpen size={20} />
      {author ? <span>{author}</span> : <span>Anonymous</span>}
    </div>
  </div>
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  {img_url ? <Image src={img_url} alt={title} width={300} height={100} className="rounded-xl" /> : <Image src={defaultImageUrl} alt={title} width={200} height={150} />}
  
</div>
  );
};

export default LearnList;

