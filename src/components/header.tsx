"use client"; 

import React from "react";
import { useRouter } from "next/navigation";
import NavLinks from "./UI/NavBar";
import { Button } from "./UI/Button";
import Image from "next/image";

const Header: React.FC = () => {
  const router = useRouter(); 

 
  const handleLoginClick = () => {
    router.push("/signup"); // Navigate to SignUpPage
  };


  return (
    <nav className="fixed top-0 z-20 bg-white shadow md:flex py-4 w-full">
      <div className="container flex justify-between items-center">
      <Image
              src="/landing-page-logo.png"
              alt="greenify-254"
              width={300}
              height={40}
              className="my-5"
            />
        <div className="flex space-x-2 md:space-x-6 justify-between items-center">
          <NavLinks />
          <Button
            className="bg-transparent hover:bg-green-500 hover:text-white hover:outline-1 text-green-500 ring-1 ring-green-500 font-bold rounded-full"
            onClick={handleLoginClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

