import ProductCard from "@/components/ProductCard";
import React from "react";

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
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Page;
