import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="navbar bg-amber-300 w-full py-5 px-24 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52">
      <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
     
            <li>
              <NavLink
                to="/ourservices"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-10 menu-horizontal px-1">
    <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
     
            <li>
              <NavLink
                to="/ourservices"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#40ecd8fc] underline"
                    : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    </div>
  );
};

export default NavBar;
