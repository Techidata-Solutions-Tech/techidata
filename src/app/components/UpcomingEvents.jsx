'use client';

import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'Low-Level Design of Payment Apps',
    startTime: 'March 20, 2025 7:30 PM (IST)',
    endTime: 'March 20, 2025 10:30 PM (IST)',
    registered: 2537,
    imageUrl:"https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/113/832/original/Banner_%283%29.webp?1741863156"
},
  {
    id: 2,
    title: 'How OTT Platforms Handle Millions of Concurrent Viewers Using HLD',
    startTime: 'March 22, 2025 5:00 PM (IST)',
    endTime: 'March 22, 2025 8:00 PM (IST)',
    registered: 477,
    imageUrl:"https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/113/832/original/Banner_%283%29.webp?1741863156"
          
  },
];

export default function EventsSection() {
  return (
    <div className="px-6 py-10 bg-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <button className="bg-orange-500 text-white  px-4 py-2 rounded-lg font-semibold">Explore all</button>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={1200}
              height={675}
              layout='responsive'
              // className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold flex-1">{event.title}</h3>
              <p className="text-sm text-gray-600"><strong>Start time:</strong> {event.startTime}</p>
              <p className="text-sm text-gray-600"><strong>End time:</strong> {event.endTime}</p>
             <div className="flex justify-between items-center gap-5">
             <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold">{event.registered}</span> people have registered
              </p>
              <button className="mt-4 text-md bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold">
                Register Now
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
