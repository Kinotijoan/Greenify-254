"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export interface NavLink {
  text: string;
  href: string;
}

const links: NavLink[] = [
  { text: "Home", href: "#hero" },
  { text: "Feature", href: "#features" },
  { text: "About us", href: "#about-us" },
  { text: "How it works", href: "#how-it-works" },
  { text: "Contact", href: "#footer" },
];

const NavLinks = () => {
  const [currentLink, setCurrentLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionId = entry.target.getAttribute("id");
          const activeLink = links.find(
            (link) => link.href.substring(1) === activeSectionId
          );
          if (activeLink) {
            setCurrentLink(activeLink.text);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Menu
        onClick={() => setIsOpen(!isOpen)}
        className="z-30 md:hidden ml-4"
      />

      <ul className="hidden md:flex text-xl font-medium gap-8 justify-between">
        {links.map(({ text, href }, index) => (
          <li
            key={index}
            className="nav-link hover:text-green-500"
            onClick={() => setCurrentLink(text)}
          >
            <Link
              href={href}
              className={text === currentLink ? "text-green-500" : ""}
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
          } absolute top-16 z-30 bg-gray-50 p-4 text-xl font-medium`}
        >
          {links.map(({ text, href }, index) => (
            <li
              key={index}
              className="nav-link hover:text-green-500"
              onClick={() => setCurrentLink(text)}
            >
              <Link
                href={href}
                className={text === currentLink ? "text-green-500" : ""}
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

export default NavLinks;
