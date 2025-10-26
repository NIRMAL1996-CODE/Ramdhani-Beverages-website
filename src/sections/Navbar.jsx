// Navbar.jsx


const Navbar = () => {
  return (
    <nav className="fixed top-2 md:top-5 w-full text-yellow-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:flex-row">
        {/* Logo / Shop Name */}
        <div className="text-2xl md:text-3xl  font-extrabold bg-yellow-900 rounded-3xl p-2 m-2">
          RB
        </div>

        {/* Menu Links */}
        <div className=" flex justify-center">
        <ul className="flex space-x-8">

          <li><a href="/home" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">Home</a></li>

          <li><a href="/missionsection.jsx" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">About</a></li>

          <li><a href="#products" className=" text-yellow-900  text-base md:text-lg  p-2 rounded font-medium hover:text-white">Products</a></li>

          <li><a href="#contact" className=" text-yellow-900 text-base md:text-lg  p-2 rounded font-medium hover:text-white">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
