import { Facebook, Instagram, MessageCircle, Notebook, Phone } from "lucide-react";
import logo from "../assets/images/SofitLogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11 w-9/12 md:w-10/12 m-auto text-white pt-16 pb-24">
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-7">
            <p>
              As Pooler's Premier Fitness Center, So Fit offers top-notch
              Personal Training, Group Fitness Classes, and a full Functional
              Fitness arena.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl uppercase mb-7 font-bold">contact</h2>
          <ul>
            <li className="flex">
              <Phone className="text-secondary mr-3 mb-4" />
              +(912) 348-2014
            </li>
            <li className="flex">
              <MessageCircle className="text-secondary mr-3 mb-4" />
              frontdesk@sofitgymllc.net
            </li>
            <li className="flex">
              <Notebook className="text-secondary mr-3 mb-4" /> 1212 US Highway 80 E,
              Pooler, Georgia 31322
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl uppercase mb-7 font-bold">LEARN MORE</h2>
          <ul>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Class Schedule</Link>
            </li>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Join Our Gym</Link>
            </li>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Culture & Events</Link>
            </li>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Our Services</Link>
            </li>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Meet Our Team</Link>
            </li>
            <li className="hover:text-thirdary transition-colors duration-300 leading-7">
              <Link to="/">Our Story</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-xs md:text-base text-center justify-center text-white w-10/12 m-auto">
        <div className="flex flex-row justify-center gap-3">  
            <Link to="/"><Facebook /></Link>
            <Link to="/"><Instagram /></Link>
        </div>
        <div>
            <p>Copyright 2024, SoFit Gym | Built by FristPage Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
