import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}
const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className=" p-5 flex flex-col justify-evenly bg-cardbg border-gray-200 rounded-2xl shadow md:shadow-xl w-[280px] h-[350px] md:w-[300px] md:h-[380px] z-10 bg-opacity-70">
      <a href="#">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
      </a>
      <p className="mb-2 md:text-lg">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-center bg-green-500 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-600"
      >
        CTA
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Card;
