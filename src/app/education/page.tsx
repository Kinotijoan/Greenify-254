"use client"
import React, { useEffect, useState } from "react";
import Ed_card from "./Ed_card";
import { scrapeRogue } from "@/webScraping/ScrapeRogue";
import { scrapeBlogs } from "@/webScraping/ScrapeForge";
import { sendBlogs } from "@/webScraping/ScrapeRogue";

type Blog = {
  title: string;
  description: string;
  author: string | null;
  date: string;
  image: string | null;
  link: string;
};

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const url1 = "https://roguedisposal.com/resources/education/p3";
    const url2 =
      "https://www.forgerecycling.co.uk/blog/category/recycling/page/3/";

    const blogsData1 = await scrapeRogue(url1);
    const blogsData2 = await scrapeBlogs(url2);

    const combinedBlogs = [...(blogsData1 || []), ...(blogsData2 || [])];

    if (combinedBlogs) {
      setBlogs(combinedBlogs);
    }
    
    console.log(combinedBlogs);

  };
 

  useEffect(() => {
    fetchBlogs();
    
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      console.log("sending blogs");
      sendBlogs(blogs);
      console.log(blogs);
    }
  }, [blogs]);

 
  return (
    <div>
      <Ed_card  />
      <button >send</button>
    </div>
  );
};

export default Page;
