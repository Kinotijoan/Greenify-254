import React from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col text-2xl font-bold mx-16 gap-8 border-r-2 border-black pr-8 py-8 ">
      <div className="flex flex-row gap-4 bg-green-300 py-1 px-16 rounded-lg">
        <Image src="/images/Home.png" alt="Home icon" width={35} height={30} />
        <h1>Home</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Image
          src="/images/Companies.png"
          alt="Home icon"
          width={35}
          height={30}
        />
        <h1>Companies</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Image src="/images/Events.png" alt="Home icon" width={35} height={30} />
        <h1>Events</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Image
          src="/images/Products.png"
          alt="Home icon"
          width={35}
          height={30}
        />
        <h1>Products</h1>
      </div>
      <div className="mx-6 mt-96">
        <button
          className="bg-[rgba(30,75,0,1)] hover:bg-green-800 text-white font-bold py-2 px-8 rounded-full"
          type="submit"
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Sidebar;