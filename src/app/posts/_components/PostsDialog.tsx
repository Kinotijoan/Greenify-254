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

const PostsDialog = () => {
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
            <Button type="button" variant="secondary" className="bg-green-800 rounded-3xl">
                <Link href="/posts/_components/EventForm.tsx">An event</Link>             
            </Button>
          </div>
          <div>
            <Button type="button" variant="secondary" className="bg-green-800 rounded-3xl">
                <Link href="/posts/_components/RecycledProductsForm.tsx">Recycled Product</Link>             
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostsDialog;
