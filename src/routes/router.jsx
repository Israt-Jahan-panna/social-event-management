import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContacUs from "../pages/ContactUs/ContactUs";
import Registrations from "../pages/Registrations/Registrations";
import BookingDetails from "../pages/BookingDetails/BookingDetails";
import Login from "../pages/Login";
import ServiceDetails from "../Events/EventsPage/ServiceDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
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
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader:() => fetch('/social-event-management.json')
        },
        {
          path:"/contactus",
          element:<PrivateRoute><ContacUs></ContacUs></PrivateRoute>
        },
        {
          path:"/bookingdetails",
          element:<PrivateRoute><BookingDetails></BookingDetails></PrivateRoute>,
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