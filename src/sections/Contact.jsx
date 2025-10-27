// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-yellow-300 via-red-100 to-yellow-700 px-4 "
    >
      <div className="max-w-xl w-full mt-20 bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 text-lg">
          Have any questions or want to place an order? We had love to hear from you!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-yellow-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-yellow-600 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md border border-yellow-600 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-900 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-sm">
          <p>📍 Zero Old Bus Stand, Dhanki, Yavatmal</p>
          <p>📞 +91-XXXXXXXXXX</p>
          <p>🕒 9:00 AM — 9:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
