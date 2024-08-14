
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/app/wasteless_app/posts/_components/Dialog";
import { Button } from "@/components/UI/Button";

import { validateRequest } from "@/lib/lucia";
import PostsDialog from "./_components/PostsDialog";
import UserDialog from "./_components/UserDialog";

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

