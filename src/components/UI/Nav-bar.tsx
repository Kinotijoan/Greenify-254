"use client";
import React, { useState } from "react";
import Link from "next/link";

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
  return (
    <ul className="flex text-xl font-medium gap-8 justify-between">
      {links.map(({text,href}, index) => (
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
  );
};

export default NavLink;
