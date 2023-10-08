import { useEffect, useState } from "react";
import Events from "../../Events/Events";


const BookingDetails = () => {
    const [events, setEvents] = useState([]);
  const [noFound, setNoFound] = useState(false);
    const [isShow , setIsShow] =useState(false)
  useEffect(() => {
    const  eventItems = JSON.parse(localStorage.getItem("events"));

    if ( eventItems) {
      setEvents( eventItems);
    } else {
      setNoFound("No data found no worries please select your donation item  ");
    }
  }, []);
  console.log(events);
    return (
        <div className=" mx-24 mt-28">
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            {
                   isShow ?  events.map(events => <Events key={events.id} event={events}></Events>) :

                   events.slice(0,4).map(events=> <Events key={events.id} event={events}></Events>)
                }
            </div>
            {events.length > 4 && <button onClick={()=>setIsShow(!isShow)} className=" mt-7 py-2 px-3 text-white bg-green-500 rounded-lg mx-auto block ">{isShow ? "See Less" : "See All"}</button>}
        </div>
      )}
    </div>
    );
};

export default BookingDetails;