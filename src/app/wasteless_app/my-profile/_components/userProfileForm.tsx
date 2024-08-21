"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/Form";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileInput } from "@/components/UI/FileInput";
import axios from "axios";
import { useState } from "react";
import {
  EventFormContext,
  RecycledProductFormContext,
} from "../../components/sidebar";
import { useContext } from "react";
import React from "react";

const isBrowser = typeof window !== "undefined";
const FileListType = isBrowser ? FileList : Array;

const profileFormSchema = z.object({
  profile_image: z
    .instanceof(FileListType)
    .optional()
    .refine((file) => file == null || file?.length == 1, "File is required."),
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(13, { message: "Phone number cannot exceed 13 digits" }),
  email: z.string().email(),
});

const UserProfileForm = () => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
  });

  return (
    <div className="max-h-[80vh] overflow-auto flex justify-evenly space-y-2 w-full">
      <div>
        <h1 className="font-semibold text-2xl text-center mb-5">
          Post an Event
        </h1>
      </div>
      <div>
        <Form {...form}>
          <form className="space-y-8 flex-1 px-2" encType="multipart/form-data">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title of the Event</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What is the name of the event?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write a short description of what the event is about"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time of the Event</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the time the event will start"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue of the Event</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Where will the event take place?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserProfileForm;
