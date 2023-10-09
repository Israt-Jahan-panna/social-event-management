import React, { useEffect, useState } from "react";
import Events from "../../Events/Events";
import BookedEvents from "./BookedEvents";

const BookingDetails = () => {
  const [events, setEvents] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const eventItems = JSON.parse(localStorage.getItem("events"));
    if (eventItems) {
      setEvents(eventItems);
    } else {
      setNotFound("Please Booked Your events"); 
    }
  }, []);
  return (
    <div className="px-24 pt-28 bg-purple-400 ">

     {
      notFound? <p>{notFound}</p>:
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{events.map(events => <BookedEvents key={events.id} event={events}></BookedEvents>)}</div> 
     }
    </div>
  );
};

export default BookingDetails;
