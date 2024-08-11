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

import React from "react";
import Link from "next/link";

const UserDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Oops! only recycling companies can post.</DialogTitle>
          <DialogDescription>Do you want to?</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <Button type="button" variant="secondary" className="bg-green-800 rounded-3xl">
                <Link href="/components/pages/authentication/sign_up_recycling_company.tsx">Sign up as a company</Link>
              
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
  );
};

export default UserDialog;
