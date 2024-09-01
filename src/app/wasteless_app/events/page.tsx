'use client'
import EventCard from "@/components/EventCard";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axiosInstance from "../axios";

interface Events {
  imageUrl: string;
  title: string;
  eventLocation: string;
  eventDate: string;
}

const Page = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const router = useRouter();

  useEffect(() => {
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
    <div>
      <h1 className="text-5xl text-center font-bold pt-10">
        Greenify-254 Events
      </h1>

      <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
        {events.map(({ imageUrl, title, eventLocation, eventDate }, index) => (
          <EventCard
            key={index}
            imageUrl={imageUrl}
            title={title}
            eventLocation={eventLocation}
            eventDate={eventDate.slice(0, 10)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;