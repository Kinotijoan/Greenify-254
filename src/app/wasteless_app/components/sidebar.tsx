'use client'
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "lucia";
import UserDialog from "../posts/_components/UserDialog";
import PostsDialog from "../posts/_components/PostsDialog";

interface SidebarProps {
  user : any;
}

const Sidebar = ({user}: SidebarProps) => {

  const router = useRouter()

  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    // Add any additional logic you want to execute when a section is clicked
    router.push(`/wasteless_app/${section}`);
  };


  return (
    <div className="flex flex-col text-2xl font-bold mx-16 gap-8 border-r-2 border-black pr-8 py-8 ">
      <button
        className={`flex flex-row gap-4 py-1 px-16 rounded-lg ${
          selectedSection === "education"
            ? "bg-green-300"
            : "hover:bg-gray-200 transition-colors"
        }`}
        onClick={() => handleSectionClick("education")}
      >
        <Image src="/images/Home.png" alt="Home icon" width={35} height={30} />
        <h1>Home</h1>
      </button>
      <button
        className={`flex flex-row gap-4 py-1 px-16 rounded-lg ${
          selectedSection === "companies"
            ? "bg-green-300"
            : "hover:bg-gray-200 transition-colors"
        }`}
        onClick={() => handleSectionClick("companies")}
      >
        <Image
          src="/images/Companies.png"
          alt="Home icon"
          width={35}
          height={30}
        />
        <h1>Companies</h1>
      </button>
      <button
        className={`flex flex-row gap-4 py-1 px-16 rounded-lg ${
          selectedSection === "events"
            ? "bg-green-300"
            : "hover:bg-gray-200 transition-colors"
        }`}
        onClick={() => handleSectionClick("events")}
      >
        <Image src="/images/Events.png" alt="Home icon" width={35} height={30} />
        <h1>Events</h1>
      </button>
      <button
        className={`flex flex-row gap-4 py-1 px-16 rounded-lg ${
          selectedSection === "products"
            ? "bg-green-300"
            : "hover:bg-gray-200 transition-colors"
        }`}
        onClick={() => handleSectionClick("products")}
      >
        <Image
          src="/images/Products.png"
          alt="Home icon"
          width={35}
          height={30}
        />
        <h1>Products</h1>
      </button>
      {/* <div className="mx-6 mt-96">
        <button
          className="bg-[rgba(30,75,0,1)] hover:bg-green-800 text-white font-bold py-2 px-8 rounded-full"
          type="submit"
          onClick={() => handlePostNavigation()}
        >
          POST
        </button>
      </div> */}

      {
        user ? (
          <UserDialog/>
        ) : (<PostsDialog/>)
      }
    </div>
  );
};

export default Sidebar;