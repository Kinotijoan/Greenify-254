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
} from "../../../../components/UI/Form";
import { Input } from "@/components/UI/Input";
import { FileInput } from "../../../../components/UI/FileInput";
import {
  EventFormContext,
  RecycledProductFormContext,
} from "../../components/sidebar";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

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
  const { showEventForm, setShowEventForm } = useContext(EventFormContext);
  const { showRecycledProductForm, setShowRecycledProductForm } = useContext(
    RecycledProductFormContext
  );
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ProductsFormSchema>>({
    resolver: zodResolver(ProductsFormSchema),
    defaultValues: {
      product: "",
    },
  });

  function onSubmit(values: z.infer<typeof ProductsFormSchema>) {
    setIsLoading(true); // Show loading indicator
    const formData = new FormData();
    formData.append("product", values.product);
    formData.append("description", values.description);
    formData.append("price", String(values.price));
    formData.append("contact", values.contact);
    formData.append("banner_image", (values.banner_image as FileList)[0]);

    axios
      .post("http://localhost:3000/api/productPost", formData, {
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

  const handleCancel = () => {
    // Handle cancel logic here, e.g., navigate away, clear form, etc.
    console.log("Cancel clicked");
  };

  return (
    <div className="max-h-[80vh] overflow-auto flex flex-col space-y-2 w-full">
      <h1 className="font-bold text-xl text-center mb-2">
        Post Recycled Product
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex-1 px-2"
          encType="multipart/form-data"
        >
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of the product</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product's name" {...field} />
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
                  <Input placeholder="Describe the event" {...field} />
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
                    placeholder="Enter the price "
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
                  <Input placeholder="Enter a phone number" {...field} />
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
              className="bg-green-800"
              disabled={isLoading}
              onClick={form.handleSubmit(onSubmit)}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
            <Button
              type="reset"
              className="bg-green-800"
              onClick={() => {
                setShowRecycledProductForm(!showRecycledProductForm);
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

export default RecycledProductsForm;
