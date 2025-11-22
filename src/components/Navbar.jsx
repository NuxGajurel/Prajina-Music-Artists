import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="lg:space-x-20 mt-2 space-x-6">
      <Link to="/" className="hover:cursor-pointer hover:text-gray-300">Home</Link>
      <Link to="/music" className="hover:cursor-pointer hover:text-gray-300">Music</Link>
      <Link to="/videos" className="hover:cursor-pointer hover:text-gray-300">Videos</Link>
      <Link to="/about" className="hover:cursor-pointer hover:text-gray-300">About</Link>
      <Link to="/faq" className="hover:cursor-pointer hover:text-gray-300">Faq</Link>
    </div>
  );
};

export default Navbar;
