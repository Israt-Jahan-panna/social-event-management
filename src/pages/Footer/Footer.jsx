import { Link } from "react-router-dom";
import Logo from "../../Header/NavBar/Logo";


const Footer = () => {
    return (
        <div>
<footer className="w-full bg-black px-24 py-8">
  <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white text-center md:justify-between">
   <Logo></Logo>
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <Link to={'/'}>
        <a
          href="#"
          className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
        >
        Home
        </a>
      </Link>
      <Link to={"/contactus"}>
        <a
          href="#"
          className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
        >
           Conatct Us
        </a>
      </Link>
     
      <Link to={'/login'}>
        <a
          href="#"
          className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
        >
          Login
        </a>
      </Link>
    </ul>
  </div>
  <hr className="my-8 border-blue-gray-50" />
  <p className="block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
    © 2023 Socila Event Managements
  </p>
</footer>
        </div>
    );
};

export default Footer;