import Image from 'next/image';
import React from 'react'

const eventItems = [
    // Add your content here
    { id: 1, title: 'Item 1', imgSrc: '/images/item1.png' },
    { id: 2, title: 'Item 2', imgSrc: '/images/item2.png' },
    { id: 3, title: 'Item 3', imgSrc: '/images/item3.png' },
    { id: 4, title: 'Item 4', imgSrc: '/images/item4.png' },
    { id: 5, title: 'Item 5', imgSrc: '/images/item5.png' },
    { id: 6, title: 'Item 6', imgSrc: '/images/item6.png' },
    // Add more items as needed
  ];

const EventsList = () => {

  return (
    <div className="overflow-x-auto">
    <div className="flex space-x-4">
      {eventItems.map(eventItem => (
        <div key={eventItem.id} className="flex-shrink-0 w-60 p-4 bg-white rounded-lg shadow-md">
          <Image
            src={eventItem.imgSrc}
            alt={eventItem.title}
            width={200}  // Adjust width as needed
            height={120} // Adjust height as needed
            className="rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">{eventItem.title}</h3>
        </div>
      ))}
    </div>
  </div>
  )
}

export default EventsList
