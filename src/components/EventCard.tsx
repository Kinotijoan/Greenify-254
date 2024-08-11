import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventProps {
  src: string;
  title: string;
  location: string;
  date: string;
}

const EventCard = ({ src, title,location, date }: EventProps) => {
  return (
    <div className="shadow max-w-[250px] p-3 rounded">
      <Image src={src} height={100} width={250} alt="the event" />
      <h3 className="text-lg font-bold">
        {title}
      </h3>
      <p className="flex gap-3 text-lg items-center">
        <MapPin className="text-red-500 opacity-78" />
        {location}
      </p>
      <p className="flex gap-3 text-sm font-medium items-center">
        <Calendar className="opacity-78 font-normal" />
        {date}
      </p>
    </div>
  );
};

export default EventCard;
