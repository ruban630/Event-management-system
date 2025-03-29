import React from "react";

const EventSlider = () => {
  const events = [
    { image: "home1.jpg", title: "Conference" },
    { image: "home2.jpg", title: "Outdoor Gathering" },
    { image: "home3.jpg", title: "Wedding" },
    { image: "home4.jpg", title: "Party" },
    { image: "home5.jpg", title: "Award Ceremony" },
    { image: "home6.jpg", title: "Networking" }
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {events.map((event, index) => (
        <div key={index} className="relative w-64 h-96 flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm shadow-md hover:bg-orange-600">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventSlider;
