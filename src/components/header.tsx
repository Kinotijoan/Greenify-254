"use client"; 

import React from "react";
import { useRouter } from "next/navigation";
import NavLinks from "./UI/NavBar";
import { Button } from "./UI/Button";

const Header: React.FC = () => {
  const router = useRouter(); 

 
  const handleLoginClick = () => {
    router.push("/signup"); // Navigate to SignUpPage
  };


  return (
    <nav className="fixed top-0 z-20 bg-white shadow md:flex py-4 w-full">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl text-[rgba(30,75,0,1)] font-bold select-none">Greenify-254</h1>
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

