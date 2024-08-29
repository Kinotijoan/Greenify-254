"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type CommentFormProps = {
  // text: string;
  // setText: Function;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CommentBox({}: // text,
// setText,
// onSubmit,
CommentFormProps) {
  const [text, setText] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    console.log("Comment added successfully");
    setText("")

  };
  return (
    <div className="w-full flex items-center border rounded-md shadow-xs gap-3 p-2">
      <input
        placeholder="Write comment!"
        className=" w-full text-sm resize outline-none"
        onChange={handleInputChange}
        value={text}
      ></input>
      <Send className="opacity-70" onClick={handleSubmit} />
    </div>
  );
}
