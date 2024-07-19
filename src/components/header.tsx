import React from "react";
import NavLinks, { NavLink } from "./UI/Nav-bar";
import { Button } from "./UI/Button";

const Header: React.FC = () => {
  return (
    <nav className=" hidden fixed top-0 z-20 bg-slate-100 md:flex  py-4 w-full">
      <div className="container flex justify-between items-center">
        <h1 className=" text-4xl select-none">Wasteless</h1>
        <div className=" flex space-x-6 justify-between items-center">
          <NavLinks />
          <Button className=" bg-transparent hover:bg-green-500 hover:text-white hover:outline-1 text-green-500 ring-1 ring-green-500 rounded-full">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
