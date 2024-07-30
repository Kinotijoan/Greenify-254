import React from "react";
import ProductCard from "./product_image";

const products = [
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
  {
    src: "/download.jpeg",
    title: "Canvas Image",
    price: 250,
    description: "Made from paper art",
  },
];

const ProductList = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
