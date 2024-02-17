import events from "../assets/events_json/events.json";
import { Container } from ".";
import React, { useEffect } from "react";
import EventCard from "./EventCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const currentDate = new Date();

  // Separate events into upcoming and previous based on the current date
  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return currentDate < eventDate;
  });
  const previousEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return currentDate > eventDate;
  });
  // Sort previous events by date
  const sortedPreviousEvents = previousEvents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  return (
    <Container className={"mb-44"} style={{ marginTop: "100px" }}>
      <center>
        <h2
          className="text-5xl font-extrabold text-center mb-5"
          id="event"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Events
        </h2>
      </center>
      <hr />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1
          className="text-4xl font-bold mb-8 text-white"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Upcoming Events
        </h1>
        <div
          className="flex overflow-x-scroll overflow-y-hidden gap-10 p-5 "
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <h1
          className="text-4xl font-bold mb-8 text-white my-10"
          data-aos="fade-right"
        >
          Previous Events
        </h1>
        <div
          className="flex overflow-x-scroll overflow-y-hidden gap-5 p-5"
          data-aos="fade-left"
        >
          {sortedPreviousEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Events;
