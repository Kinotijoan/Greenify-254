import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

 
type Blog = {
  title: string;
  description: string;
  author: string | null;
  date: string;
  image: string | null;
  link: string;
};

export async function POST(request: NextRequest) {
  const res = await request.json();
  try{
    await prisma.blog.createMany({
      data: res.map((blog: Blog) => ({
        title: blog.title,
        description: blog.description,
        author: blog.author,
        date: blog.date,
        image: blog.image,
        link: blog.link,
      })),
      skipDuplicates: true,
    });
  }catch(error){
    console.log("error")
  }
  console.log(res)
  return NextResponse.json({ data: res });
}

