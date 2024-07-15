import React from "react";
import Link from "next/link";

export interface NavLink {
  text: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
}

const NavLink = ({ links }: NavProps) => {
  return (
    <ul className='flex text-sm font-bold lg:w-96 gap-2 lg:gap-0 justify-between pl-10 pt-4'>
        {links.map((link, index) => (
            <li key={index} className="hover:text-blue-500">
                <Link href={link.href}>
                {link.text}
                </Link>
            </li>
        ))}
    </ul>
  );
}

export default NavLink;
