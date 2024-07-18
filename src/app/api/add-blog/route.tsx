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
  console.log("joan")
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
  console.log("joan")
  return NextResponse.json({ data: res });
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     // process a POST request
//    try {
//     const blogs = JSON.parse(req.body);

//     await prisma.blog.createMany({
//       data: blogs.map((blog: Blog) => ({
//          title: blog.title,
//          description: blog.description,
//          author : blog.author,
//          date: blog.date,
//          image: blog.image,
//          link: blog.link,
//       })),
      
//     });
//       // re.json({ message: "Blogs created" });
//       res
//    } catch (error) {
//        res.json({ message: "Error creating blogs" });
//    }finally {
//        await prisma.$disconnect();
//    }
//   } 
//   else {
//     console.error("Method not allowed");
//   }
// }


// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const blogs = JSON.parse(req.body);

//     console.log(req)

//     await prisma.blog.createMany({
//       data: blogs.map((blog: Blog) => ({
//         title: blog.title,
//         description: blog.description,
//         author: blog.author,
//         date: blog.date,
//         image: blog.image,
//         link: blog.link,
//       })),
//     });

//     res.status(201).json({ message: "Blogs created" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating blogs", error: error.message });
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     return POST(req, res);
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
