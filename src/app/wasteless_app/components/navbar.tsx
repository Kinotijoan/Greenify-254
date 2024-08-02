import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
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
            className="w-full border border-black rounded-full px-4 py-2"
            type="text"
            name="search"
            required
            placeholder="Search"
          />
        </div>
      </div>
      <Image src="/images/pfp.png" alt="profile" width={45} height={45} />
    </div>
  );
};

export default Navbar;