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
import { FileInput } from "./FileInput";

const isBrowser = typeof window !== "undefined";
const FileListType = isBrowser ? FileList : Array;

const ProductsFormSchema = z.object({
  product: z.string({ required_error: "Product name is required" }).min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description should be at least 10 or more words" })
    .max(50, { message: "Description should 100 or less words" }),
  price: z
    .string({ required_error: "Price is required" })
    .transform((val) => parseInt(val))
    .refine((val) => val > 1, "Price cannot be negative"),
  contact: z
    .string({ required_error: "Contact number is required" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(13, { message: "Phone number cannot exceed 13 digits" }),
  banner_image: z
    .instanceof(FileListType)
    .optional()
    .refine((file) => file == null || file?.length == 1, "File is required."),
});

// type Event = z.infer<typeof ProductsFormSchema>;

const RecycledProductsForm = () => {
  const form = useForm<z.infer<typeof ProductsFormSchema>>({
    resolver: zodResolver(ProductsFormSchema),
    defaultValues: {
      product: "",
    },
  });

  function onSubmit(values: z.infer<typeof ProductsFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleCancel = () => {
    // Handle cancel logic here, e.g., navigate away, clear form, etc.
    console.log('Cancel clicked');
  };

  return (
    <div>
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-md p-6 mt-10">
        <h1 className="font-bold text-lg text-center my-5">
          Recycled Product Form
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the product</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What is the name of the product?"
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price in Ksh</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter the price of the product in Kenyan shillings"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the phone number that the buyer can contact"
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
              <Button type="submit" className="bg-blue-600">
                Submit
              </Button>
              <Button type="reset" className="bg-blue-600">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RecycledProductsForm;
