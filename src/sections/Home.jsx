// Home.jsx
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {

  const cursorRef = useRef(null);

  useEffect(() => {
  const moveCursor = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform =`translate3d(${e.clientX - 4}px, ${e.clientY - 5}px, 0)`; }
  };

  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);


  useGSAP(() => {
      const isMobile = window.innerWidth < 768;

  gsap.to(".cookie-left", {x: isMobile ? 50 : 550, y: isMobile ? -20 : -50, rotation: 60, duration: 6, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".cookie-right", {  x: isMobile ? -50 : -550,
    y: isMobile ? 20 : 50,rotation: 60, duration: 6, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".drink-left", { x: 0,
    y: isMobile ? -10 : -40 ,scale: 1.1,rotation: 20 , duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".drink-right", { x: 0,y: isMobile ? 10 : 40, scale: 1.1,rotation: -20, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });

});

  return (
    <section>
      <div ref={cursorRef} className="custom-cursor fixed top-0 left-0 w-8 h-10 pointer-events-none z-50">
         <img src="/images/cursor.png" className="w-full h-full pointer-events-none:" alt="cursor" />
      </div>

      <div className="overflow-x-hidden min-h-screen w-full flex flex-col justify-center items-center bg-linear-to-r from-yellow-300 via-red-300 to-yellow-700 text-center relative ">
      
        <div className="side-images">
          <img src="/images/cookie.png" className="cookie-left absolute top-32 md:top-20 left-2 md:left-5 w-24 md:w-[150px]" alt="cookie" />

          <img src="/images/cookie.png" className="cookie-right absolute bottom-32 md:bottom-20 right-2 md:right-5 w-24 md:w-[150px]" alt="cookie" />

          <img src="/images/drinks.png" className="drink-left absolute bottom-32 md:bottom-10 left-2 md:left-10 w-24 md:w-[150px]" alt="drinks" />

          <img src="/images/drinks.png" className="drink-right absolute top-32 md:top-10 right-2 md:right-10 w-24 md:w-[150px]" alt="drinks" />
       </div>

        {/* Shop Name */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-white/5 backdrop-blur-sm p-4 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.3)] text-shadow">


          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ramdhani Beverages
          </h1>

          {/* Location */}
          <p className="text-base md:text-lg lg:text-xl text-white mb-8">
            Yavatmal, Maharashtra.
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-10">
            “Wholesaler of Drinks, Snacks & Sweet Treats - All Under One Roof!”
          </p>

          {/* Call to Action */}
          <button className="bg-yellow-900 hover:bg-yellow-800 hover:scale-105 shadow-lg text-white  px-4 py-2 md:px-8 md:py-3 text-sm md:text-base  rounded-lg font-medium transition-all duration-300">
            Learn More...
          </button>
        </div>
      </div>

      {/* Placeholder for 3D Packet
      <div className="h-[700px] bg-black rounded-xl flex items-center justify-center text-gray-600">
        <img className="" src="/images/pngegg.png" alt="" />
      </div> */}
    </section>
  );
};

export default Home;
