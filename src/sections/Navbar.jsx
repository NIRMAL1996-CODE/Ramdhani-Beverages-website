// Navbar.jsx


const Navbar = () => {
  return (
    <nav className="fixed top-1 md:top-2 w-full text-yellow-100 z-50 p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:flex-row">
        {/* Logo / Shop Name */}
        <div className="text-xl md:text-2xl  font-extrabold bg-yellow-900 rounded-full p-1 m-2">
          RB
        </div>

        {/* Menu Links */}
        <div className=" flex justify-center p-4">
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
