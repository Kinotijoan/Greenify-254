import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./Nav-bar";
import { url } from "inspector";
import { Button } from "./Button";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  const links: NavLink[] = [
    {
      text: "Home",
      href: "/#hero",
    },
    {
      text: "Feature",
      href: "/#features",
    },
    {
      text: "About us",
      href: "/#about-us",
    },
    {
      text: "How it works",
      href: "/#how-it-works",
    },
  ];

  return (
    <footer
      className="bg-cover bg-no-repeat bg-center bottom-0 w-full"
      style={{ backgroundImage: `url("/images/Rectangle.jpg")` }}
    >
      <section
        className="bg-opacity-75 text-white h-full flex flex-col container justify-between"
        id="footer"
      >
        <h3 className="text-2xl font-bold text-center my-3">WASTELESS</h3>
        <div className="container flex flex-col items-start sm:flex-row sm:justify-between gap-3 mt-6">
          <div className="mb-6 sm:mb-0">
            <p className="text-lg font-semibold md:text-xl">Links</p>
            <ul className="">
              {links.map((link, index) => (
                <li key={index} className="mb-2 hover:scale-105 ">
                  <Link className="font-normal text-lg" href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Reach out to us</h2>
            {/* <div className="hover:scale-105 transition-transform duration-300 flex items-center mb-4 font-normal text-sm ">
              <Image
                src="/icons/github(1).png"
                alt="GitHub Link"
                width={25}
                height={25}
                className="mr-2"
              />
              <a
                href="https://github.com/Kinotijoan/wasteless"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg lg:text-xl"
              >
                GitHub
              </a>
            </div> */}
            <div className="hover:scale-105 transition-transform duration-300 flex items-center mb-4">
              <Image
                src="/icons/phone.png"
                alt="Phone Number"
                width={25}
                height={25}
                className="mr-2"
              />
              <span className="text-lg">0712345678</span>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 flex items-center">
              <Image
                src="/icons/mail.png"
                alt="Email Address"
                width={25}
                height={25}
                className="mr-2"
              />
              <a href="mailto:wasteless2024@gmail.com" className="text-lg">
                wasteless2024@gmail.com
              </a>
            </div>
          </div>
          <div className="md:max-w-[290px]">
            <h3 className="text-xl font-bold mb-4">Send us a message</h3>
            <input
              type="text"
              placeholder="Your Name"
              maxLength={50}
              className="bg-transparent border-b border-white text-white mb-4 w-full focus:outline-none  md:text-lg"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent border-b border-white text-white mb-4 w-full focus:outline-none  md:text-lg"
            />
            <textarea
              placeholder="Your Message"
              maxLength={200}
              rows={3}
              className="bg-transparent border-b border-white text-white  w-full focus:outline-none  md:text-lg "
            ></textarea>
            <Button className="bg-green-500 text-black rounded-full flex mx-auto hover:text-white hover:bg-transparent ring-green-500 hover:ring mt-3">
              Submit
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <div className="flex items-center md:border-t md:border-white px-4 sm:px-64 py-2">
            <p className="mr-3 md:text-lg">Copyright</p>
            <Image
              src="/icons/copyright.png"
              alt="Copyright Icon"
              width={20}
              height={20}
              className="mr-1"
            />
            <p className="md:text-lg ">2024 All rights reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
