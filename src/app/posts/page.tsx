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
import UserDialog from "./_components/UserDialog"
import PostsDialog from "./_components/PostsDialog"

const posts = () => {
  return (
    <PostsDialog/>
  )
}

export default posts
