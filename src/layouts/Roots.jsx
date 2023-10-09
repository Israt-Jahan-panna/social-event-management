import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../pages/Footer/Footer";



const Roots = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;