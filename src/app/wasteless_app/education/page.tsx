"use client";
import React, { useEffect, useState } from "react";
import Ed_card from "./Ed_card";
import { getBlogs, ScrapeRogue } from "@/webScraping/ScrapeRogue";
import { Scrapeblogs } from "@/webScraping/ScrapeForge";
import { sendBlogs } from "@/webScraping/ScrapeRogue";
import SearchForm from "../companies/SearchForm"
import { useSearchParams } from "next/navigation";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Blog } from "@/lib/types/Types";
const Page: React.FC = () => {
  

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || ' ';

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
        const filteredBlogs = blogs.filter((blog) =>
          Object.values(blog).some((value) =>
            String(value).toLowerCase().includes(query.toLowerCase())
          )
        );
        setData(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false whether fetch is successful or not
      }
    };

    fetchData();
  }, [query]); // Fetch data when component mounts



  if (loading) {
    return<div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
  </div>
  }


  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-10">
        Education Resources
      </h1>
      <SearchForm />
      {(data.length === 0) ? (
        <div> Oops, not found</div>
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
