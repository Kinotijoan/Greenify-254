"use client";
import React, { useEffect, useState } from "react";
import Ed_card from "./Ed_card";
import { getBlogs, scrapeRogue } from "@/webScraping/ScrapeRogue";
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
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // const fetchBlogs = async () => {
  //   const url1 = "https://roguedisposal.com/resources/education/p3";
  //   const url2 =
  //     "https://www.forgerecycling.co.uk/blog/category/recycling/page/3/";

  //   const blogsData1 = await scrapeRogue(url1);
  //   const blogsData2 = await scrapeBlogs(url2);

  //   const combinedBlogs = [...(blogsData1 || []), ...(blogsData2 || [])];

  //   if (combinedBlogs) {
  //     setBlogs(combinedBlogs);
  //   }

  //   console.log(combinedBlogs);
  // };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // useEffect(() => {
  //   if (blogs.length > 0) {
  //     console.log("sending blogs");
  //     sendBlogs(blogs);
  //     console.log(blogs);
  //   }
  // }, [blogs]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getBlogs();
        setData(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false whether fetch is successful or not
      }
    };

    fetchData();
  }, []); // Fetch data when component mounts



  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  

  return (
    <div>
      <h1 className="text-5xl text-center font-bold pt-10">
        Education Resources
      </h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="wrapper">
          {data.map((blog) => (
            <Ed_card
              key={blog.title}
              title={blog.title}
              date={blog.date}
              author={blog.author}
              description={blog.description}
              img_url={blog.image}
              link={blog.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
