// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-5 w-full text-yellow-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo / Shop Name */}
        <div className="text-2xl font-extrabold bg-yellow-900 rounded-3xl p-2 m-2">
          RB
        </div>

        {/* Menu Links */}
        <div className="grow flex justify-center">
        <ul className="flex space-x-8">
          <li><a href="/home" className=" text-yellow-900  p-2 rounded font-medium hover:text-white">Home</a></li>

          <li><a href="#about" className=" text-yellow-900  p-2 rounded font-medium hover:text-white">About</a></li>

          <li><a href="#products" className=" text-yellow-900   p-2 rounded font-medium hover:text-white">Products</a></li>

          <li><a href="#contact" className=" text-yellow-900  p-2 rounded font-medium hover:text-white">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
