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
import { getBlogs } from "@/webScraping/ScrapeRogue";
import CompanyAccountList from "./_components/companyAccountList";
import { MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";





export function page() {
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleSectionClick = (section: string) => {

    router.push(`/wasteless_app/${section}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getBlogs();
        // const filteredBlogs = blogs.filter((blog) =>
        //   Object.values(blog).some((value) =>
        //     String(value).toLowerCase().includes(query.toLowerCase())
        //   )
        // );
        setData(blogs);
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
      <button
      onClick={() => handleSectionClick("events")}>
      
      <BentoGridItem
        header="Events"
        title="Take part in waste management initiatives in your community."
        description={<EventsList />}
        // icon="recycled-products"
        className="col-span-2 w-full bg-gray-100"
        />
      </button>

      <button
        onClick={() => handleSectionClick("education")}>
      

        <BentoGridItem
          header="Learn"
          title="Read articles to learn more about waste management."
          description={<div className="flex flex-col overflow-auto p-2 gap-2">
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
          className="row-span-2 overflow-auto bg-gray-100"
        />
      </button>


      <button
        onClick={() => handleSectionClick("companies")}>


        <BentoGridItem
          header="Waste Management Facilities"
          title="Find waste management facilitites within our app"
          description={<CompanyAccountList />}
          // icon="recycling-guide"
          className="col-span-2 bg-gray-100 row-span-2 "
        />
      </button>

      <button
        onClick={() => handleSectionClick("map")}>

        <BentoGridItem

          header={< Maps />}
          // icon="recycling-guide"
          className="bg-gray-100"
        />
      </button>


    </BentoGrid >



  );

}


const Maps = () => (
  <div className="relative group " >
    <Image
      src="/images/locate.png"
      alt="image"
      width={300}
      height={50}
      className="object-cover w-full h-full transition-all duration-300 ease-in-out"
    />
    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      <span><MapPinned /></span>
      <span className="text-white text-xl font-bold">Visit Maps</span>
    </div>
  </div>

);






export default page;