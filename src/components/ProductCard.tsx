import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductImageProps {
  websiteLink?: string;
  src: string;
  title: string;
  price: number;
  description: string;
  contact: string;
}

const ProductCard = ({
  websiteLink,
  src,
  title,
  price,
  description,
  contact,
}: ProductImageProps) => (
  <div className="shadow w-[200px] p-3">
    <Link href={websiteLink || ""}>
      <Image src={src} width={300} height={0} alt={title} className="h-auto" />
      <h3 className="text-lg">{title}</h3>
      <p className="font-bold text-xl">Ksh:{price}</p>
      <p className="text-sm">{description}</p>
      <p className="text-sm"><span className="font-bold">Contact:</span> {contact}</p>
    </Link>
  </div>
);

export default ProductCard;
