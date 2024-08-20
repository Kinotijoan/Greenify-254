import EventCard from "@/components/EventCard";
import React, { useEffect, useState } from "react";
import { validateRequest } from "@/lib/lucia";
import { redirect, useRouter } from "next/navigation";
import axiosInstance from "../axios";

interface Events {
  src: "string";
  title: "string";
  location: "string";
  date: "string";
}

// const events = [
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
//   {
//     src: "/event.jpeg",
//     title: "Recycle and restore",
//     location: "Juja Gate C",
//     date: "13th Aug 2024 10:55 Am - 4:00 Pm",
//   },
// ];

const Page = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const router = useRouter();

  useEffect(() => {
    const user = validateRequest();
    if (!user) {
      router.push("/login");
      return;
    }

    axiosInstance
      .get("/events")
      .then((response) => {
        if (response.status === 200) {
          setEvents(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
