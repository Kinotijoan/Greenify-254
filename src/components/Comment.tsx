"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

type CommentFormProps = {
  postId: string; // Assuming each comment is tied to a specific post or resource
};

export default function CommentBox({ postId }: CommentFormProps) {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  
  const handleSubmit = async () => {
    if (text.trim() === "") {
      return; // Prevent submission of empty comments
    }
    
    setIsSubmitting(true);
    console.log(postId);

    try {
      await axios.post(`/api/products/${postId}/comments`, {        
        content: text,
      });

      console.log("Comment added successfully");
      setText(""); // Clear the input field
    } catch (error) {
      console.error("Failed to add comment", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="w-full flex items-center border rounded-md shadow-xs gap-3 p-2">
      <input
        placeholder="Write a comment!"
        className="w-full text-sm resize-none outline-none"
        onChange={handleInputChange}
        value={text}
        disabled={isSubmitting} // Disable input while submitting
      />
      <Send
        className={`opacity-70 ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleSubmit}
      />
    </div>
  );
}
