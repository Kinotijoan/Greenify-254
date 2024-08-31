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

import React, { useState, useContext } from "react";
import Event_Form from "./EventForm";
import RecycledProductsForm from "./RecycledProductsForm";
import { Icon, XIcon } from "lucide-react";

import {
  EventFormContext,
  RecycledProductFormContext,
} from "../../_components/sidebar";

const PostsDialog = () => {
  const { showEventForm, setShowEventForm } = useContext(EventFormContext);
  const { showRecycledProductForm, setShowRecycledProductForm } = useContext(
    RecycledProductFormContext
  );
  const handleEventButtonClick = () => {
    setShowEventForm(!showEventForm);
  };

  const handleRecycledProductButtonClick = () => {
    setShowRecycledProductForm(!showRecycledProductForm);
  };

  const handleCloseDialog = () => {
    setOpenDialog(!setOpenDialog);
    setShowEventForm(false);
    setShowRecycledProductForm(false);
  };

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button className="hover:bg-greenbglight" variant="outline" onClick={() => setOpenDialog(!openDialog)}>
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
              className="absolute top-2 right-2 w-8 h-8"
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
                  className="bg-greenbg rounded-3xl text-white"
                >
                  An Event
                </Button>
                <Button
                  type="button"
                  onClick={handleRecycledProductButtonClick}
                  className="bg-greenbg rounded-3xl text-white"
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
