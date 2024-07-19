"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export interface NavLink {
  text: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
}
const links: NavLink[] = [
  { text: "Home", href: "#" },
  { text: "Feature", href: "/#features" },
  { text: "About us", href: "/#about-us" },
  { text: "How it works", href: "/#how-it-works" },
  { text: "Contact", href: "/#footer" },
];

const NavLink = () => {
  const [currentLink, setCurrentLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <Menu onClick={() => setIsOpen(!isOpen)} className="z-30 md:hidden ml-4" />

      <ul className="hidden md:flex text-xl font-medium gap-8 justify-between">
        {links.map(({ text, href }, index) => (
          <li
            key={index}
            className="hover:text-green-500"
            onClick={() => setCurrentLink(text)}
          >
            <Link
              href={href}
              className={`${text === currentLink ? "text-green-500" : ""}`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 z-30 bg-gray-50 p-4  text-xl font-medium`}
        >
          {links.map(({ text, href }, index) => (
            <li
              key={index}
              className="hover:text-green-500"
              onClick={() => setCurrentLink(text)}
            >
              <Link
                href={href}
                className={`${text === currentLink ? "text-green-500" : ""}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLink;
