import { FaHome, FaSearch, FaPlusSquare, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md md:shadow-none md:relative md:w-auto">
      <nav className="flex justify-between md:justify-center md:space-x-10 px-4 py-3 md:py-0">
        <button className="flex flex-col items-center focus:outline-none md:hover:text-blue-500">
          <FaHome className="text-xl" />
          <span className="text-xs mt-1 hidden md:block">Home</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none md:hover:text-blue-500">
          <FaSearch className="text-xl" />
          <span className="text-xs mt-1 hidden md:block">Search</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none md:hover:text-blue-500">
          <FaPlusSquare className="text-xl" />
          <span className="text-xs mt-1 hidden md:block">Add</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none md:hover:text-blue-500">
          <FaBell className="text-xl" />
          <span className="text-xs mt-1 hidden md:block">Alerts</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none md:hover:text-blue-500">
          <FaUser className="text-xl" />
          <span className="text-xs mt-1 hidden md:block">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
