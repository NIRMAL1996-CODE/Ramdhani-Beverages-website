// Product.jsx
import React from "react";

const Productsection = () => {
  const products = [
    { name: "Lays Chips", img: "/images/alllays.png" },
    { name: "Soft Drinks", img: "/images/alldrinks.png" },
    { name: "RedBull", img: "/images/redbull.png",},
    { name: "Water Bottles", img: "/images/waterr.png",},
    { name: "Chocolate Bar", img: "/images/chocolates.png", },
    { name: "Candy Pack", img: "/images/choco.png",},
    { name: "Birthday Cake", img: "/images/cake.png", },
      { name: "All Maggi Noodles", img: "/images/maggi.png",},
    { name: "Britannia Biscuits & Toast", img: "/images/biscuits.png" },
    { name: "Ranade Bread & Toast", img: "/images/bread.png",},
    { name: "Birthday Decor Items", img: "/images/decorItems.png", },
    { name: "And Many More Products...", img: "/images/more.png", },
  ];

  return (
    <section className="min-h-screen bg-linear-to-r from-yellow-200 via-red-100 to-yellow-500 py-20 px-5 text-center">
      <h2 className="text-4xl font-bold text-yellow-900 mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-contain mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">
              {item.name}
            </h3>
            <p className="text-yellow-800 font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productsection;
