"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { Button } from "@/components/UI/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/posts/_components/Form";
import { Input } from "@/components/UI/Input";

const isBrowser = typeof window !== "undefined";
const FileListType = isBrowser ? FileList : Array;

const EventFormSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description should be at least 10 or more words" })
    .max(50, { message: "Description should 100 or less words" }),
  date: z
    .string({
      required_error: "date is required",
      invalid_type_error: "Date must be in the fomart YYYY-MM-DD",
    })
    .date(),
  time: z.string({ required_error: "time is required" }).time(),
  venue: z.string({ required_error: "Venue is required" }),
  banner_image: z
    .instanceof(FileListType)
    .optional()
    .refine((file) => file == null || file?.length == 1, "File is required."),
});

// type Event = z.infer<typeof EventFormSchema>;

const Event_Form = () => {
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center h-screen mt-20 mb-20">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-md p-6 mt-20">
      <h1 className="font-semibold text-lg text-center my-5">
				Create a New Innovation
			</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
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
              name="description"
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
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of the Event</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter the date of teh event"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
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
              name="venue"
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

            <FormField
              control={form.control}
              name="banner_image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banner image</FormLabel>
                  <FormControl>
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="bg-blue-600">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Event_Form;
