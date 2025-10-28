// Home.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {

  useGSAP(() => {
      const isMobile = window.innerWidth < 768;

  gsap.to(".cookie-left", {x: isMobile ? 50 : 550, y: isMobile ? -20 : -50, rotation: 60, duration: 6, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".cookie-right", {  x: isMobile ? -50 : -550,
    y: isMobile ? 20 : 50,rotation: 60, duration: 6, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".drink-left", { x: 0,
    y: isMobile ? -10 : -40 ,scale: 1.1,rotation: 20 , duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".drink-right", { x: 0,y: isMobile ? 10 : 40, scale: 1.1,rotation: -20, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });

     gsap.from(".home-texts h1, .home-texts p, .home-texts button", {
      opacity: 0,
      x: 50,
      stagger: 0.3,
      duration: 0.8,
      delay: 0.5,
      autoAlpha: 0,
      ease: "power3.out",
      immediateRender: false,
    });
});

  return (
    <section id="home">
       <div className="overflow-x-hidden min-h-screen w-full flex flex-col justify-center items-center bg-linear-to-r from-[#fdf6e3] via-[#f7e1a0] to-[#b8860b] text-center relative ">
      
        <div className="side-images">
          <img src="/images/cookie.png" className="cookie-left absolute top-32 md:top-20 left-2 md:left-5 w-24 md:w-[150px]" alt="cookie" />

          <img src="/images/cookie.png" className="cookie-right absolute bottom-32 md:bottom-20 right-2 md:right-5 w-24 md:w-[150px]" alt="cookie" />

          <img src="/images/drinks.png" className="drink-left absolute bottom-32 md:bottom-10 left-2 md:left-10 w-24 md:w-[150px]" alt="drinks" />

          <img src="/images/drinks.png" className="drink-right absolute top-32 md:top-10 right-2 md:right-10 w-24 md:w-[150px]" alt="drinks" />
       </div>

        {/* Shop Name */}
      <div className="home-texts w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_#b8860b]">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold  text-[#4a2c00] mb-4">
            Ramdhani Beverages
          </h1>

          {/* Location */}
          <p className="text-base md:text-lg lg:text-xl text-[#4a2c00] mb-8">
            Yavatmal, Maharashtra.
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#4a2c00] mb-10">
            “Wholesaler of Drinks, Snacks & Sweet Treats - All Under One Roof!”
          </p>

          {/* Call to Action */}
          <button 
           onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
           className=" bg-yellow-900 hover:bg-[#a07c2f] hover:scale-105 shadow-lg text-white  px-4 py-2 md:px-8 md:py-3 text-sm md:text-base  rounded-lg font-medium transition-all duration-300">
            Learn More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
