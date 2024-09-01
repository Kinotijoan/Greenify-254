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
import SignUpPage from "@/app/(authentication)/signup/page";
import { useRouter } from "next/router";
import Link from "next/link";

const UserPostDialog = () => {
  const handleCloseDialog = () => {
    setOpenDialog(!setOpenDialog);
  };

  const [showSignupForm, setshowSignupForm] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpenDialog(!openDialog)}>
        Post
      </Button>
      <AlertDialog open={openDialog}>
        <AlertDialogContent className="sm:max-w-md space-y-2">
          <AlertDialogHeader className="flex items-center justify-between">
              <><AlertDialogTitle>Oops! Only companies can post at this time.</AlertDialogTitle><AlertDialogDescription>You can register your company to post events and recycled products here.</AlertDialogDescription></>
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
            
              <div className="flex flex-row gap-4">
                <Button
                  type="button"
                  onClick={handleCloseDialog}
                  className="bg-greenbg rounded-3xl text-white hover:bg-greenbglight"
                >
                  cancel
                </Button>
                <Button
                  type="button"
                  // onClick={() => setshowSignupForm(!showSignupForm)}
                  className="bg-greenbg rounded-3xl text-white hover:bg-greenbglight"
                >
                  <Link href="/signup">Sign up as company</Link>
                  
                </Button>
              </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UserPostDialog;
