import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OurServices from "../pages/OurServices/OurServices";
import ContacUs from "../pages/ContactUs/ContactUs";
import Registrations from "../pages/Registrations/Registrations";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
          // loader:'/social-event-management.json'
        },
        {
          path:"/contactus",
          element:<ContacUs></ContacUs>
        },
        {
          path:"/ourservices",
          element:<OurServices></OurServices>
        },
        {
          path:"/registration",
          element:<Registrations></Registrations>
        },
    ]
    },
  ]);

  export default router;