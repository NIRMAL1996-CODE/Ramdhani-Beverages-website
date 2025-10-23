// Home.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
  useGSAP(() => {
  gsap.to(".cookie-left", {x:500, rotation: 60,y: -50, duration: 10, repeat: -1, yoyo: true, ease: "power1.inOut" });
  gsap.to(".cookie-right", {x:-500,rotation: 60, y: 50, duration: 10, repeat: -1, yoyo: true, ease: "power1.inOut" });

  gsap.to(".drink-left", {scale: 1.1,rotation: 20 , y: -40, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" });
  gsap.to(".drink-right", {scale: 1.1,rotation: -20, y: 40, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" });
});


  return (
    <section>

      <div  className=" min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-white to-yellow-700 text-center px-4  bg-cover bg-center relative ">
      
        <div className="side-images">
        <img src="/images/cookie.png"  className="cookie-left absolute top-20 left-5 w-[200px]  sm:top-10 sm:left-2" alt="" />
        <img src="/images/cookie.png"  className="cookie-right absolute  bottom-20 right-5 w-[200px] sm:bottom-10 sm:right-2"alt="" />

        <img src="/images/drinks.png"  className="drink-left absolute  bottom-20 left-10 w-[200px] sm:bottom-10 sm:left-4" alt="" />
         <img src="/images/drinks.png"  className="drink-right absolute top-20 right-10 w-[200px]  sm:top-10 sm:right-4" alt="" />
        </div>

        {/* Shop Name */}
        <div className="w-150 bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          <h1 className="text-5xl sm:text-3xl lg:text-6xl font-bold text-white mb-4">
            Ramdhani Beverages
          </h1>

          {/* Location */}
          <p className="text-lg sm:text-sm lg:text-xl text-white mb-8">
            Yavatmal, Maharashtra.
          </p>

          {/* Tagline */}
          <p className="text-xl sm:text-base lg:text-2xl font-semibold text-white mb-10">
            “Wholesaler of Drinks, Snacks & Sweet Treats - All Under One Roof!”
          </p>

          {/* Call to Action */}
          <button className=" sm:px-6 sm:py-2 bg-yellow-900 hover:bg-yellow-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300">
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
