'use client';
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import EventsList from "./_components/EventsList";
import LearnList from "./_components/LearnList";
import { Blog } from "@/lib/types/Types";
import { getBlogs, ScrapeRogue } from "@/webScraping/ScrapeRogue";





export function page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getBlogs();

      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false whether fetch is successful or not
      }
    };

    fetchData();
  }, []); // Fetch data when component mounts
  return (
    <BentoGrid className="max-w-full mx-auto">
      <BentoGridItem
        title="Events you may be interested in"
        description="Take part in waste management initiatives in your community."
        header={<EventsList />}
        // icon="recycled-products"
        className="col-span-2 bg-gray-100"
      />
      <BentoGridItem
        title="Learn"
        description="Read articles to learn more about waste management."
        header={<div className="wrapper">
          {data.map((blog) => (
            <LearnList
              key={blog.title}
              title={blog.title}
              date={blog.date}
              author={blog.author}
              description={blog.description}
              img_url={blog.image}
              link={blog.link}
            />
          ))}
        </div>}
        className="row-span-2 bg-gray-100"
      />
      <BentoGridItem
        title="Recycling guide"
        description="A guide to recycling in your area."
        header="Recycling guide"
        icon="recycling-guide"
        className="col-span-2 bg-gray-100 row-span-2 "
      />
      <BentoGridItem
        title="Maps"
        description="Find a recycling center near you."
        header= {< Skeleton />}
        // icon="recycling-guide"
        className="bg-gray-100"
      />


    </BentoGrid>



  );

}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);






export default page;