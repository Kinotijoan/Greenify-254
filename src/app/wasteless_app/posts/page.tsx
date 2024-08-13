import { Copy } from "lucide-react";

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
} from "@/app/wasteless_app/posts/_components/Dialog";
import { Input } from "@/components/UI/Input";
import { Label } from "@/app/wasteless_app/posts/_components/Label";
import Event_Form from "./_components/EventForm";

import React from "react";
import { User } from "lucia";
import UserDialog from "./_components/UserDialog";
import PostsDialog from "./_components/PostsDialog";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

// interface postProps{
//   user: User
// }

export default async function post(){

  const user = await validateRequest()
  // if (!user) {
  //   redirect("/log_in")
  // }

  if (!user) {
    return(
      <Dialog>
        <DialogHeader></DialogHeader>
        <DialogContent className="sm:max-w-md">
          <UserDialog/>
        </DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    )
  }else{
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogHeader></DialogHeader>
        <DialogContent className="sm:max-w-md">
          <PostsDialog/>
        </DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    );
  }

};

