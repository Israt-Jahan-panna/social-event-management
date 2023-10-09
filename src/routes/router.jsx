import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContacUs from "../pages/ContactUs/ContactUs";
import Registrations from "../pages/Registrations/Registrations";
import EventsDetails from "../Events/EventsPage/ServiceDetails";
import BookingDetails from "../pages/BookingDetails/BookingDetails";
import Login from "../pages/Login";
import ServiceDetails from "../Events/EventsPage/ServiceDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
          loader:() => fetch('/social-event-management.json')
        },
        {
          path:"/servicedetails/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader:() => fetch('/social-event-management.json')
        },
        {
          path:"/contactus",
          element:<ContacUs></ContacUs>
        },
        {
          path:"/bookingdetails",
          element:<BookingDetails></BookingDetails>,
          loader:() => fetch('/social-event-management.json')
        },
        {
          path:"/registration",
          element:<Registrations></Registrations>
        },
        {
          path:"login",
          element:<Login></Login>
        }
    ]
    },
  ]);

  export default router;