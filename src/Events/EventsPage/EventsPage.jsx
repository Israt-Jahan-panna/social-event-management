import Events from "../Events";


const EventsPage = ({events}) => {
    console.log(events)
    return (
        <div>
            <h2 className="text-5xl ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-20 ">
          {
            events ?.map(event=> <Events key={event.id} event={event}></Events>)
          } 
        </div>
        </div>
    );
};

export default EventsPage;