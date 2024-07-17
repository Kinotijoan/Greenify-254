"use server";

import puppeteer, { Browser, Page } from "puppeteer";
import { revalidatePath } from "next/cache";

type Blog = {
  title: string;
  description: string;
  author: string | null;
  date: string;
  image: string | null;
  link: string;
}

export const scrapeRogue = async (url: string): Promise<Blog[] | null> => {
  let browser: Browser | null = null;

  try {
    browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page: Page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    console.log(`Navigating to: ${url}`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

    console.log("Page loaded successfully");

    const blogs: Blog[] = await page.evaluate(() => {
      const blogElements = document.querySelectorAll(".blogPostFeedExcerpt"); // Select all article elements
      const blogData: Blog[] = [];

      blogElements.forEach((blog) => {
        const titleElement = blog.querySelector(".C27-heading a"); 
        const contentElement = blog.querySelector(".C27-excerpt"); 
        const imageElement = blog.querySelector(".post-thumbnail img");
        const linkElement = blog.querySelector(".arrow-link");

        const title = titleElement ? titleElement.textContent : "";
        const description = contentElement
          ? contentElement.textContent?.trim()
          : "";
        const image = imageElement ? imageElement.getAttribute("data-src") : "";
        const link = linkElement ? linkElement.getAttribute("href") : "";
        const authorElement = blog.querySelector(".author a"); 
        const dateElement = blog.querySelector(".postMeta-date"); 

        const author = authorElement ? authorElement.textContent?.trim() ?? null : null;
        const date = dateElement ? dateElement.textContent?.trim() : "";

        if (title && description && date && link ) {
          
          blogData.push({ title, description, date, link, image, author });
        }
      });

      return blogData;
    });

    console.log("Scraped blog data:", blogs);

    await browser.close();
    revalidatePath("/");
    return blogs;
  } catch (error) {
    console.error("Error during scraping:", error);
    if (browser) {
      await browser.close();
    }
    return null;
  }
};

export async function sendBlogs(blogs: Blog[]){
  const response = await fetch(
    "http://localhost:3000/api/add-blog",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogs),
    }
  );
  console.log(blogs)

  if (response.ok) {
    console.log("Blogs sent successfully");
  } else {
    console.error("Error sending blogs");
  }
} 
