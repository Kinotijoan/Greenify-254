import EventCard from "@/components/EventCard";
import { title } from "process";
import React from "react";

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
