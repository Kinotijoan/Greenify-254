import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventProps {
  imageUrl: string;
  title: string;
  eventLocation: string;
  eventDate: string;
}

const EventCard = ({ imageUrl, title,eventLocation, eventDate }: EventProps) => {
  return (
    <div className="shadow max-w-[250px] p-3 rounded">
      <Image src={imageUrl} height={100} width={250} alt="the event" />
      <h3 className="text-lg font-bold">
        {title}
      </h3>
      <p className="flex gap-3 text-lg items-center">
        <MapPin className="text-red-500 opacity-78" />
        {eventLocation}
      </p>
      <p className="flex gap-3 text-sm font-medium items-center">
        <Calendar className="opacity-78 font-normal" />
        {eventDate}
      </p>
    </div>
  );
};

export default EventCard;
