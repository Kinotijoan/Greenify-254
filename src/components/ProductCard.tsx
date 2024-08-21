import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductImageProps {
  websiteLink?: string;
  imageUrl: string;
  title: string;
  productPrice: number;
  content: string;
  contact: string;
}

const ProductCard = ({
  websiteLink,
  imageUrl,
  title,
  productPrice,
  content,
  contact,
}: ProductImageProps) => (
  <div className="shadow w-[200px] p-3">
    <Link href={websiteLink || ""}>
      <Image src={imageUrl} width={300} height={0} alt={title} className="h-auto" />
      <h3 className="text-lg">{title}</h3>
      <p className="font-bold text-xl">Ksh:{productPrice}</p>
      <p className="text-sm">{content}</p>
      <p className="text-sm"><span className="font-bold">Contact:</span> {contact}</p>
    </Link>
  </div>
);

export default ProductCard;
