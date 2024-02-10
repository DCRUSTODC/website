import React from "react";

function EventCard({ event }) {
  const eventImage = event.images;

  return (
    <div className="flex-shrink-0 w-100 h-100 p-8 mx-2 rounded-lg overflow-hidden shadow-2xl border border-4 rounded-md border-white/50">
      <img
        src={eventImage}
        alt={`Event - ${event.title}`}
        className="w-80 h-40 mx-auto my-auto rounded-sm border-4 border-black/50"
      />
      <div className="p-3 justify-text mt-5 ">
        <h2 className="text-3xl font-semibold mb-2 text-ln text-white text-left underline underline-offset-8 decoration-grey-500/50 decoration-4">
          {event.title}
        </h2>
        {/* Render speaker and designation if they exist */}

        {event.speaker && (
          <p className="underline underline-offset-4 decoration-black/50 decoration-4 bmb-2 text-left text-bold text-2xl">
            Speaker: {event.speaker}
          </p>
        )}
        {event.designation && (
          <p className="mb-2 mt-2 text-left text-bold text-2xl">
            {event.designation}
          </p>
        )}
        <p className="mb-2 text-left text-semibold text-xl">{event.date}</p>
        <p className="mb-2 text-left text-semibold text-xl">{event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
