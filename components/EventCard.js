import React, { useState, useEffect } from "react";

function EventCard({ event }) {
  const eventImages = event.images || [];
  const speakers = event.speakers || [];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === eventImages.length - 1 ? 0 : prevImage + 1
      );
    }, 4000);

    const speakerInterval = setInterval(() => {
      setCurrentSpeaker((prevSpeaker) =>
        prevSpeaker === speakers.length - 1 ? 0 : prevSpeaker + 1
      );
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(speakerInterval);
    };
  }, [currentImage, eventImages.length, currentSpeaker, speakers.length]);

  return (
    <div className="flex-shrink-0 w-100 h-100 p-8 mx-2 rounded-lg overflow-hidden shadow-2xl border border-4 rounded-md border-white/50">
      <div className="slideshow-container relative">
        {Array.isArray(eventImages) &&
          eventImages.map((image, index) => (
            <div
              key={index}
              className={`mySlides fade ${
                index === currentImage ? "block" : "hidden"
              }`}
            >
              <img
                src={image}
                alt={`Event - ${event.title}`}
                className="w-80 h-40 mx-auto my-auto rounded-sm border-4 border-black/50"
              />
            </div>
          ))}
      </div>

      <div className="p-3 justify-text mt-5">
        <h2 className="text-3xl font-semibold mb-2 text-ln text-white text-left">
          {event.title}
        </h2>

        {Array.isArray(speakers) && (
          <div>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`${
                  index === currentSpeaker ? "block" : "hidden"
                } transition-opacity duration-500`}
              >
                <p className="underline underline-offset-4 decoration-black/50 decoration-4 bmb-2 text-left text-bold text-2xl">
                  Speaker : {speaker.name}
                </p>
                <p className="mb-2 mt-2 text-left text-bold text-2xl underline underline-offset-4 decoration-black/50 decoration-4">
                  {speaker.designation}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="mb-2 text-left text-semibold text-xl">{event.date}</p>
        <p className="mb-2 text-left text-semibold text-xl">{event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
