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
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-[url('/images/footerbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="mission-text relative z-10 p-10 rounded-3xl bg-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(255,255,255,0.3)] max-w-4xl">
        <h2 className="text-5xl font-bold text-white mb-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Our Mission
        </h2>

        <div className="space-y-5">
          <p className="mission-line text-xl text-white/90">
            To deliver <span className="text-yellow-300 font-semibold">premium-quality</span> beverages and snacks that bring freshness and joy to every customer.
          </p>
          <p className="mission-line text-xl text-white/90">
            To ensure <span className="text-amber-300 font-semibold">service excellence</span> where every customer feels valued and satisfied.
          </p>
          <p className="mission-line text-xl text-white/90">
            To build <span className="text-pink-300 font-semibold">strong, lasting relationships</span> based on trust and consistency.
          </p>
          <p className="mission-line text-xl text-white/90">
            To be the <span className="text-green-300 font-semibold">solution provider</span> for all beverage and snack needs.
          </p>
          <p className="mission-line text-xl text-white/90">
            To expand our reach with a clear <span className="text-blue-300 font-semibold">vision</span> — serving quality across every corner.
          </p>
          <p className="mission-line text-xl text-white/90">
            To uphold our <span className="text-purple-300 font-semibold">goodwill</span> through honesty, dedication, and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
