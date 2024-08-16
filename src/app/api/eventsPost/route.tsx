import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/lucia";

const pipeline = promisify(require("stream").pipeline);

export async function POST(request: NextRequest) {
  try {

   const user = await validateRequest();
   if (!user) {
     redirect("/login");
     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const price = parseInt(formData.get("price") as string);
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;
    const eventDate = formData.get("date") as string;
    const eventTime = formData.get("time") as string;
    const eventLocation = formData.get("venue") as string;

    const filePath = path.join(
      process.cwd(),
      "public",
      "postImages",
      `${Date.now()}_${image.name}`
    );

    await pipeline(image.stream(), fs.createWriteStream(filePath));

    const relativeFilePath = `/postImages/${path.basename(filePath)}`;

    const newItem = await prisma.post.create({
      data: {
        title: title,
        productPrice: price,
        content: description,
        imageUrl: relativeFilePath,
        eventDate: new Date(eventDate),
        eventTime: eventTime,
        eventLocation: eventLocation,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: "event", 
      },
    });

    return NextResponse.json(newItem);
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
