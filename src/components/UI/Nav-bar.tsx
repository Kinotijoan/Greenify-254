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
    <ul className='flex text-xl font-medium gap-8 justify-between pt-4'>
        {links.map((link, index) => (
            <li key={index} className="hover:text-green-500">
                <Link href={link.href}>
                {link.text}
                </Link>
            </li>
        ))}
    </ul>
  );
}

export default NavLink;
