'use client'
import EventCard from "@/components/EventCard";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axiosInstance from "../axios";
import Image from "next/image";



  interface Events {
    imageUrl: "string";
    title: "string";
    eventLocation: "string";
    eventDate: "string";
  }

const EventsList = () => {
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
    <div className="overflow-x-auto">
    <div className="flex space-x-4">
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
  )
}

export default EventsList

