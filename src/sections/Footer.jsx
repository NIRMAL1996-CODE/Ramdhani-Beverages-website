// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className=" bg-yellow-950 text-[#FFD66B] pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + short pitch */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">Ramdhani Beverages</h3>
          <p className="text-sm mt-2 text-[#ffe9b8]/90">
            Fresh snacks, cold drinks & sweets — trusted in Yavatmal for 4+ years.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2 text-[#ffe9b8]/90">
            <li><a href="#products" className="hover:underline">Products & Offers</a></li>
            <li><a href="#contact" className="hover:underline">Order & Delivery</a></li>
            {/* <li><a href="#" className="hover:underline">Gallery</a></li> */}
          </ul>
        </div>

        {/* Contact + hours + small subscribe */}
        <div>
          <h4 className="font-semibold mb-3">Contact & Hours</h4>
          <p className="text-sm text-[#ffe9b8]/90">Zero Old Bus Stand, Dhanki, Yavatmal</p>
          <p className="text-sm mt-1">Phone: <a href="tel:" className="hover:underline">+91-XXXXXXXXXX</a>
          </p>
          <p className="text-sm mt-2">Hours: <span className="font-medium">9:00 AM — 9:00 PM</span>
          </p>
        </div>
      </div>
       
       {/* Google Map */}
       <div className="max-w-6xl mx-auto px-6 mt-8 h-[180px] md:h-[220px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15037.760175264893!2d77.837398!3d19.5656396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd18b8e86cb1b6d%3A0x69a2822cb1bc2f9f!2sRamdhani%20Agencies!5e0!3m2!1sen!2sin!4v1761591915262!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>



      <div className="border-t border-yellow-900 mt-8 pt-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#ffe9b8]/80">
          <span>© {new Date().getFullYear()} Ramdhani Beverages — All rights reserved.</span>
          <span className="mt-2 md:mt-0">Made with care in Yavatmal • GST:*********</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
