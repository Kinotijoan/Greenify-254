import React from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-row items-center justify-between p-6">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} />
          <div className="text-5xl ml-4 text-[rgba(30,75,0,1)] font-extrabold">
            <h1>Wasteless</h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="relative w-2/5">
            <Image
              src="/images/search 1.png"
              alt="Search Icon"
              width={25}
              height={25}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
            />
            <input
              className="w-full border border-black rounded-full px-4  py-2"
              type="text"
              name="search"
              required
              placeholder="Search"
            />
          </div>
        </div>
        <Image src="/images/pfp.png" alt="profile" width={45} height={45} />
      </div>

      {/* Sidebar */}
      <div className="flex flex-row h-full">
        <div className="flex flex-col text-2xl font-bold mx-16 gap-8 border-r-2 border-black pr-8 py-8 ">
          <div className="flex flex-row gap-4 bg-green-300 py-1 px-16 rounded-lg">
            <Image
              src="/images/Home.png"
              alt="Home icon"
              width={35}
              height={30}
            />
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
            <Image
              src="/images/Events.png"
              alt="Home icon"
              width={35}
              height={30}
            />
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

        {/* Main Content */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HomePage;