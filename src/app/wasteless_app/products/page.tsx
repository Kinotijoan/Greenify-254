"use client";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import { validateRequest } from "@/lib/lucia";
import { redirect, useRouter } from "next/navigation";
import axiosInstance from "../axios";

interface Product {
  imageUrl: string;
  title: string;
  productPrice: number;
  content: string;
  contact: string;
}
// products = [
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
//   {
//     src: "/download.jpeg",
//     title: "Canvas Image",
//     price: 250,
//     description: "Made from paper art",
//     contact: "0742374812",
//   },
// ];

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => {
        console.log("new response", response);

        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold pt-10">
        Available Products
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
