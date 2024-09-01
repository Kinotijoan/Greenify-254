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
        <div className="shadow-lg max-w-[250px] p-4 rounded-lg bg-white dark:bg-gray-800">
            <Image
                src={imageUrl}
                height={100}
                width={250}
                alt="the event"
                className="rounded-t-lg object-cover"
            />
            <div className="p-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-300 mt-2">
                    <MapPin className="text-red-500 opacity-78" />
                    {eventLocation}
                </p>
                <p className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                    <Calendar className="opacity-78" />
                    {eventDate}
                </p>
            </div>
        </div>

    );
};

export default EventCard;
