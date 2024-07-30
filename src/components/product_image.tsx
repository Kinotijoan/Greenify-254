import Image from "next/image";
import React from "react";

interface ProductImageProps {
  src: string;
  title: string;
  price: number;
  description: string;
}

const ProductCard = ({
  src,
  title,
  price,
  description,
}: ProductImageProps) => {
  return (
    <div className="shadow w-[200px] p-3">
      <Image src={src} width={300} height={0} alt={title} className="h-auto"/>
      <h3 className=" text-lg">{title}</h3>
      <p className="font-bold text-xl">Ksh:{price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ProductCard;
