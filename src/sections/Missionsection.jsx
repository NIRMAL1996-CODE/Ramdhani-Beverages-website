// Mission.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Mission = () => {
  useGSAP(() => {
    // Animate text from bottom
    gsap.from(".mission-text", { y: 50, opacity: 0, duration: 1.5, ease: "power2.out" });

    // Floating drink image
    gsap.to(".mission-img-right", { y: 20, rotation: -10, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" });
  });

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden  bg-[url('/images/missiontextbg.png')] bg-contain bg-center bg-no-repeat  "
    >
      {/* <div>
       <img src="/images/vision.png"  className=" absolute   w-[250px]" alt="drinks" />
       </div> */}
       <div className="side-images ">

        <img src="/images/light.png"  className=" absolute top-30 left-50 w-[150px]" alt="cookie" />

         <img src="/images/light.png"  className=" absolute top-30 right-50 w-[150px]" alt="drinks" />

        {/* <img src="/images/circlethememission.png"  className=" absolute  bottom-5 right-10 w-[250px]"alt="cookie" /> */}

        </div>

      {/* Mission Text */}
      <div className="mission-text p-10 rounded-xl w-150 h-110 shadow-[0_0_40px_rgba(255,255,255,0.3)] text-shadow 
      ">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-lg lg:text-xl text-white mb-4">
          Deliver fresh, tasty drinks and snacks to brighten every moment.
        </p>
        <p className="text-lg lg:text-xl text-white mb-4">
          Ensure quality, convenience, and happiness in every product.
        </p>
        <p className="text-lg lg:text-xl text-white">
          Build a community that enjoys and trusts Ramdhani Beverages.
        </p>
      </div>
    </section>
  );
};

export default Mission;
