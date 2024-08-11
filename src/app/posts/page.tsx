import { Copy } from "lucide-react"

import { Button } from "@/components/UI/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/posts/_components/Dialog"
import { Input } from "@/components/UI/Input"
import { Label } from "@/app/posts/_components/Label"
import Event_Form from "./_components/EventForm"

import React from 'react'

const posts = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogHeader>

      </DialogHeader>
      <DialogContent className="sm:max-w-md">
        <Event_Form/>
      </DialogContent>
      <DialogFooter>
        
      </DialogFooter>
    </Dialog>
  )
}

export default posts
