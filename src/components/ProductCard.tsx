import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CommentBox from "./Comment";
import { Heart, MessageCircle } from "lucide-react";
import CommentList from "./CommentList";

interface ProductImageProps {
  websiteLink?: string;
  imageUrl: string;
  title: string;
  productPrice: number;
  content: string;
  contact: string;
  postId:string;
}

const ProductCard = ({
  websiteLink,
  imageUrl,
  title,
  productPrice,
  content,
  contact,
  postId,
}: ProductImageProps) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <div className="shadow w-[200px] p-3">
      {showCommentBox ? (
        <>
        <CommentList postId={postId}/>
        <CommentBox postId={postId}/>
        </>
      ) : (
        <>
          <Link href={websiteLink || ""}>
            <Image
              src={imageUrl}
              width={300}
              height={0}
              alt={title}
              className="h-auto"
            />
            <h3 className="text-lg">{title}</h3>
            <p className="font-bold text-xl">Ksh:{productPrice}</p>
            <p className="text-sm">{content}</p>
            <p className="text-sm">
              <span className="font-bold">Contact:</span> {contact}
            </p>
          </Link>
          <div className="flex gap-2">
            <Heart />
            <MessageCircle className="-rotate-90" onClick={() => setShowCommentBox(true)} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
