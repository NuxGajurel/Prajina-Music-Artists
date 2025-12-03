import React from "react";
import { TfiLightBulb } from "react-icons/tfi";
import { Link } from "react-router-dom";
const footer = () => {
  return <div className="">
    <hr className="w-220 mt-5 text-gray-400"/>
    <div className="grid grid-cols-4 space-y-2 lg:space-x-20 mt-4 space-x-6 mb-5">
 <Link to="/" className="hover:cursor-pointer hover:text-gray-300">
        Home
      </Link>
      <Link to="/music" className="hover:cursor-pointer hover:text-gray-300">
        Music
      </Link>
      <Link to="/videos" className="hover:cursor-pointer hover:text-gray-300">
        Videos
      </Link>
      <Link to="/about" className="hover:cursor-pointer hover:text-gray-300">
        About
      </Link>
      <Link to="/faq" className="hover:cursor-pointer hover:text-gray-300">
        Faq
      </Link>
     <a href="/" className="hover:cursor-pointer hover:text-gray-300">Instagram</a>
     <a href="/" className="hover:cursor-pointer hover:text-gray-300">Youtube</a>
      <a href="/" className="hover:cursor-pointer hover:text-gray-300">Facebook</a>

    </div>
       <div className="flex justify-center items-center text-gray-400 space-x-2 mb-5 mt-6">
        <h2>Made By Nux Gajurel </h2>

       </div>
    
  </div>;
};

export default footer;
