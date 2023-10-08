import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";



const Roots = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;