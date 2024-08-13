"use client";

import { Button } from "@/components/UI/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/posts/_components/Dialog";

import React, { useState } from "react";
import Link from "next/link";
import Event_Form from "./EventForm";
import RecycledProductsForm from "./RecycledProductsForm";

const PostsDialog = () => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showRecycledProductForm, setShowRecycledProductForm] = useState(false);

  const handleEventButtonClick = () => {
    setShowEventForm(!showEventForm);
    setShowRecycledProductForm(false); // Close the other form
  };

  const handleRecycledProductButtonClick = () => {
    setShowRecycledProductForm(!showRecycledProductForm);
    setShowEventForm(false); // Close the other form
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex items-center">
          <DialogTitle>What would you like to post?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 justify-center items-center mt-5">
          <div>
            <Button
              type="button"
              onClick={handleEventButtonClick}
              className="bg-green-800 rounded-3xl text-black"
            >
              An Event
            </Button>
            {showEventForm && <Event_Form />}
          </div>
          <div>
            <Button
              type="button"
              onClick={handleRecycledProductButtonClick}
              className="bg-green-800 rounded-3xl text-black"
            >
              Recycled Product
            </Button>
            {showRecycledProductForm && <RecycledProductsForm />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostsDialog;
