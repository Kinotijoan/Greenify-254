import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventProps {
  imageUrl: string;
  title: string;
  eventLocation: string;
  eventDate: string;
}

const EventCard = ({ imageUrl, title, eventLocation, eventDate }: EventProps) => {
  return (
    <div className="shadow w-[400px] gap-3 p-3 rounded h-full flex ">
      <Image src={imageUrl} height={25} width={100} alt="the event" />
      <div>
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
    </div>
  );
};

export default EventCard;
