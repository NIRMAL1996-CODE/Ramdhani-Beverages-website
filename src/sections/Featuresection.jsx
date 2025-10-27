
const features = [
 
  { icon: "🍫 🎂 🥤", title: "Snacks & Cakes", desc: "Lays, Namkeens, Chocolates & Candy, Cakes for all occasions Cold drinks & water bottles & more" },
  
  { icon: "🚚",  title: "Services & Delivery", desc: "Fast and reliable delivery, right to your doorstep every time" },
  { icon: "💬", title: "Relationship", desc: "Friendly service & strong customer bonds" },
  {
    icon: "🏆",
    title: "Trusted Since 4 Years",
    desc: "Serving quality beverages in Yavatmal since 4 years.",
  },


];

const Featuresection = () => {
  return (
    <section id="features" className="overflow-hidden" >
    <div className="py-34 bg-linear-to-r from-yellow-300 via-red-100 to-yellow-700
 text-center min-h-screen">
   
      <h2 className="text-4xl font-bold text-yellow-900 mb-10 ">Why Choose Ramdhani Beverages</h2>
      <div className="max-w-6xl mt-10 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mt-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition h-[250px]"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl text-yellow-900 font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Featuresection;
