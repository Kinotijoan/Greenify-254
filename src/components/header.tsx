import React from "react";
import NavLinks, { NavLink } from "./UI/Nav-bar";
import Link from "next/link";
import { Button } from "./UI/Button";

const Header: React.FC = () => {
  const links: NavLink[] = [
    { text: "features", href: "/" },
    { text: "about", href: "/about" },
    { text: "contact", href: "/contact" },
  ];
  return (    
    <nav className=" hidden  h-12 md:flex items-center justify-between py-10 container">
      <h1 className=" text-4xl">Wasteless</h1>
      <div className=" flex space-x-6 items-center">
        <NavLinks links={links} />
        <Button className=" bg-gradient-to-r from-purple-500 to-purple-300 rounded-full px-6 mt-4  hover:text-purple-700">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Header;
