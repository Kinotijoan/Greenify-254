"use client";
import { Button } from "@/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/wasteless_app/posts/_components/Dialog";

import React, { useState } from "react";
import Event_Form from "./EventForm";
import RecycledProductsForm from "./RecycledProductsForm";

const PostsDialog = () => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showRecycledProductForm, setShowRecycledProductForm] = useState(false);

  const handleEventButtonClick = () => {
    setShowEventForm(true);
    setShowRecycledProductForm(false); // Close the other form
  };

  const handleRecycledProductButtonClick = () => {
    setShowRecycledProductForm(true);
    setShowEventForm(false); // Close the other form
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex items-center">
          <DialogTitle>What would you like to post?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 justify-center items-center mt-5">
          {!showEventForm && !showRecycledProductForm && (
            <div className="flex flex-col gap-4">
              <Button
                type="button"
                onClick={handleEventButtonClick}
                className="bg-green-800 rounded-3xl text-black"
              >
                An Event
              </Button>
              <Button
                type="button"
                onClick={handleRecycledProductButtonClick}
                className="bg-green-800 rounded-3xl text-black"
              >
                Recycled Product
              </Button>
            </div>
          )}
          {showEventForm && <Event_Form />}
          {showRecycledProductForm && <RecycledProductsForm />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostsDialog;
