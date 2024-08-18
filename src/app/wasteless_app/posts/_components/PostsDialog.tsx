"use client";
import { Button } from "@/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

import React, { useState } from "react";
import Event_Form from "./EventForm";
import RecycledProductsForm from "./RecycledProductsForm";
import { Icon, XIcon } from "lucide-react";

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

  const handleCloseDialog = () => {
    setOpenDialog(!setOpenDialog);
    setShowEventForm(false);
    setShowRecycledProductForm(false);
  };

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpenDialog(!openDialog)}>
        Post
      </Button>
      <AlertDialog open={openDialog}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader className="flex items-center justify-between">
            {!showEventForm && !showRecycledProductForm && (
              <AlertDialogTitle>What would you like to post?</AlertDialogTitle>
            )}
            <Button
              size="icon"
              onClick={handleCloseDialog}
              variant="secondary"
              className="absolute top-0 right-2 w-8 h-8"
            >
              <XIcon size={17} />
            </Button>
          </AlertDialogHeader>
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
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PostsDialog;
