
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
    <section id="products" className="min-h-screen bg-linear-to-r from-[#fdf6e3] via-[#f7e1a0] to-[#b8860b] py-20 px-5 text-center">
      <h2 className="text-4xl font-bold text-[#4a2c00]  mb-10">
        Explore Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="product-card bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_#b8860b]
             hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-contain mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-[#4a2c00] mb-2">
              {item.name}
            </h3>
            <p className="text-[#8b6b1f] font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productsection;
