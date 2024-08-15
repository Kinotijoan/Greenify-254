"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/wasteless_app/posts/_components/Dialog";
import { Button } from "@/components/UI/Button";

import Link from "next/link";
import { useState } from "react";

const UserDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpenDialog(!openDialog)}>Post</Button>
      <Dialog open = {openDialog} modal>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Oops! only recycling companies can post.</DialogTitle>
            <DialogDescription>Do you want to?</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div>
              <Button
                type="button"
                variant="secondary"
                className="bg-green-800 rounded-3xl"
              >
                <Link href="/components/pages/authentication/sign_up_recycling_company.tsx">
                  Sign up as a company
                </Link>
              </Button>
            </div>
            <div>
              <DialogClose>
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-green-800 rounded-3xl"
                >
                  close
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserDialog;
