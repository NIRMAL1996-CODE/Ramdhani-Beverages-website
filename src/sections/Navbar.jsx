// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-5 w-full text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo / Shop Name */}
        <div className="text-2xl font-bold bg-linear-to-r from-yellow-900 rounded-3xl p-2">
          RB
        </div>

        {/* Menu Links */}
        <div className="grow flex justify-center">
        <ul className="flex space-x-10">
          <li><a href="#home" className=" bg-linear-to-r from-yellow-900  p-2 rounded  font-medium hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className=" bg-linear-to-r from-yellow-900  p-2 rounded font-medium hover:text-yellow-400">About</a></li>
          <li><a href="#products" className=" bg-linear-to-r from-yellow-900   p-2 rounded font-medium hover:text-yellow-400">Products</a></li>
          <li><a href="#contact" className=" bg-linear-to-r from-yellow-900  p-2 rounded font-medium hover:text-yellow-400">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
