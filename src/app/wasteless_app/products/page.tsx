import ProductCard from "@/components/ProductCard";
import React from "react";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

const products = [
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
    contact:"0742374812"
  },
];

const Page = () => {
  const user = validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Page;
