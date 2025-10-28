// Mission.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Mission = () => {
  useGSAP(() => {
    gsap.from(".mission-line", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <section id="mission" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-linear-to-r from-[#fdf6e3] via-[#f7e1a0] to-[#b8860b]">

      <div className="mission-text relative z-10 max-w-4xl bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_#b8860b]
">

        <h2 className="text-5xl font-bold text-[#4a2c00]  mb-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Our Mission
        </h2>

        <div className="space-y-5">
          <p className="mission-line text-xl text-[#4a2c00] ">
           To deliver <span className="text-[#ae7cb9] font-semibold">premium-quality </span> beverages and snacks that bring freshness and joy to every customer.
          </p>
          <p className="mission-line text-xl text-[#4a2c00] ">
            To ensure <span className="text-[#e09216] font-semibold">service excellence</span> where every customer feels valued and satisfied.
          </p>
          <p className="mission-line text-xl text-[#4a2c00] ">
            To build <span className="text-[#a84b64] font-semibold">strong, lasting relationships</span> based on trust and consistency.
          </p>
          <p className="mission-line text-xl text-[#4a2c00] ">
            To be the <span className="text-[#3b7a57] font-semibold">solution provider</span> for all beverage and snack needs.
          </p>
          <p className="mission-line text-xl text-[#4a2c00] ">
            To expand our reach with a clear <span className="text-[#73aeb8] font-semibold">vision</span> — serving quality across every corner.
          </p>
          <p className="mission-line text-xl text-[#4a2c00] ">
            To uphold our <span className="text-[#6a4c93] font-semibold">goodwill</span> through honesty, dedication, and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
