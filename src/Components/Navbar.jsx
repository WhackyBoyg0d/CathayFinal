import { FaCompass, FaUser } from 'react-icons/fa';
import { IoMdAirplane } from "react-icons/io";
import { PiTrophyFill } from "react-icons/pi";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdManageSearch } from "react-icons/md";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  // Set the active tab based on the current location
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const clickHandler = (path) => {
    navigate(path);
  };

  const tabs = [
    { path: '/', icon: <IoMdAirplane />, label: 'Flights' },
    { path: '/booking', icon: <MdManageSearch />, label: 'Manage Booking' },
    { path: '/explore', icon: <FaCompass  />, label: 'Explore' },
    { path: '/stats', icon: <PiTrophyFill />, label: 'MilesStones' },
    { path: '/profile', icon: <FaUser />, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <nav className="flex justify-around items-center px-4 py-3">
        {tabs.map(({ path, icon, label }) => (
          <button
            key={path}
            className={`flex flex-col items-center focus:outline-none hover:text-primary ${
              activeTab === path ? 'text-primary' : ''
            }`}
            onClick={() => clickHandler(path)}
          >
            {icon}
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;