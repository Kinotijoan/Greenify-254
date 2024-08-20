import EventCard from "@/components/EventCard";
import React from "react";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import axiosInstance from "../axios";

const events = [
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
  {
    src: "/event.jpeg",
    title: "Recycle and restore",
    location: "Juja Gate C",
    date: "13th Aug 2024 10:55 Am - 4:00 Pm",
  },
];

const Page = () => {
  const user = validateRequest();
  if (!user) {
    return redirect("/login");
  }

  axiosInstance
    .get("/events")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
      {events.map(({ src, title, location, date }, index) => (
        <EventCard
          key={index}
          src={src}
          title={title}
          location={location}
          date={date}
        />
      ))}
    </div>
  );
};

export default Page;
