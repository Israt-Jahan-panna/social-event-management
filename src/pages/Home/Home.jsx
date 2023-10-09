import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import EventsPage from "../../Events/EventsPage/EventsPage";
import Footer from "../Footer/Footer";



const Home = () => {
    const events = useLoaderData();
    // console.log(events);
    
    return (
        <div>
            <Banner></Banner> 
            <div className="bg-amber-300">
               <div className="px-24">
               <EventsPage events={events}></EventsPage>
               </div>
            </div>
           
        </div>
    );
};

export default Home;