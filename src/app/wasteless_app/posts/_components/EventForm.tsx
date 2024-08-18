"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileInput } from "./FileInput";

import {
  EventFormContext,
  RecycledProductFormContext,
} from "../../components/sidebar";
import { useContext } from "react";

import axios from "axios";
import { useState } from "react";


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
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Invalid date format. Use YYYY-MM-DD",
    })
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date" }),
  time: z
    .string()
    .regex(
      /^(?:(?:[01]\d|2[0-3]):[0-5]\d)$|^((1[0-2]|0?[1-9]):[0-5]\d\s[AaPp][Mm])$/,
      {
        message: "Invalid time format. Use HH:mm or hh:mm AM/PM",
      }
    ),
  venue: z.string({ required_error: "Venue is required" }),
  banner_image: z
    .instanceof(FileListType)
    .optional()
    .refine((file) => file == null || file?.length == 1, "File is required."),
});

// type Event = z.infer<typeof EventFormSchema>;

const Event_Form = () => {
   const { showEventForm, setShowEventForm } = useContext(EventFormContext);
   const { showRecycledProductForm, setShowRecycledProductForm } = useContext(
     RecycledProductFormContext
   );
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      title: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);


  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    setIsLoading(true); // Show loading indicator
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("date", values.date.toISOString().slice(0, 10));
    formData.append("time", values.time);
    formData.append("venue", values.venue);
    formData.append("banner_image", (values.banner_image as FileList)[0]);


    axios
      .post("http://localhost:3000/api/eventsPost", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // Handle successful submission, e.g., show success message, clear form
        form.reset(); // Reset form fields
        setIsLoading(false); // Hide loading indicator
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle error, e.g., show error message to user
        setIsLoading(false); // Hide loading indicator
      });
  }

  return (

    <div
      className="max-h-[80vh] overconst PostsDialog = () => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showRecycledProductForm, setShowRecycledProductForm] = useState(false);
flow-auto flex flex-col space-y-2 w-full"
    >
    <div className="max-h-[80vh] overflow-auto flex flex-col space-y-2 w-full">
      <h1 className="font-semibold text-2xl text-center mb-5">Post an Event</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex-1 px-2"
          encType="multipart/form-data"
        >
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
                    type="date"
                    {...field}
                    value={
                      field.value
                        ? new Date(field.value).toISOString().slice(0, 10)
                        : ""
                    }
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
                <FormLabel className="required">Cover Image</FormLabel>
                <FileInput {...form.register("banner_image")} />
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-evenly">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600"
              onClick={form.handleSubmit(onSubmit)}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
            <Button
              type="reset"
              className="bg-blue-600"
              onClick={() => {
                setShowEventForm(!showEventForm);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Event_Form;
