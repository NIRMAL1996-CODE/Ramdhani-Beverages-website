// Navbar.jsx

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
    useGSAP(() => {
    gsap.from("nav", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from("nav a", {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.5,
    });
  });

  return (
    <nav className="fixed top-2 md:top-2 w-full text-yellow-100 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:flex-row">
        {/* Logo / Shop Name */}
        <div  className=" bg-yellow-900 rounded-full p-1 m-2  hover:rotate-360 transition-transform duration-500">
          <img className="w-[60px] rounded-full" src="/images/logo1.png" alt="logo" />
        </div>

        {/* Menu Links */}
        <div className=" flex justify-center p-4 w-full">
        <ul className="flex justify-center items-center flex-row md:flex-row space-x-4 md:space-x-8">
      
          <li><a href="#home" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">Home</a></li>

          <li><a href="#mission" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">About</a></li>

          <li><a href="#products" className=" text-yellow-900  text-base md:text-lg  p-2 rounded font-medium hover:text-white">Products</a></li>

          <li><a href="#contact" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
