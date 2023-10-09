import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import EventsPage from "../../Events/EventsPage/EventsPage";
import Footer from "../Footer/Footer";
import CustomerReview from "../../Compunents/CustomerReview/CustomerReview";
import FeatureServices from "../../Compunents/FeatureServices/FeatureServices";



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
           <div className="px-24">
            <CustomerReview></CustomerReview>
           </div>
           <div className="px-24"><FeatureServices></FeatureServices></div>
        </div>
    );
};

export default Home;