import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import { validateRequest } from "@/lib/lucia";
import { redirect, useRouter } from "next/navigation";
import axiosInstance from "../axios";

interface Product {
  src: string;
  title: string;
  price: number;
  description: string;
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
    const user = validateRequest();
    if (!user) {
      router.push("/login"); // Navigate to login page if user is not authenticated
      return;
    }

    axiosInstance
      .get("/products")
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Page;
