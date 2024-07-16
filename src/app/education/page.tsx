"use client"
import React, { useEffect, useState } from "react";
import Ed_card from "./Ed_card";
import { scrapeBlogs } from "@/webScraping/ScrapeForge";

type Blog = {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  link: string;
};

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await scrapeBlogs(
        "https://www.forgerecycling.co.uk/blog/category/recycling/page/2/"
      ).then();
      if (blogsData) {
        setBlogs(blogsData);
      }
    };

    fetchBlogs();
    close
  }, []);
  return <Ed_card />;
};

export default Page;
