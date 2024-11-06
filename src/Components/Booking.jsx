import Navbar from "./Navbar";
import {useState} from "react";
import { ChevronDown } from "lucide-react"; // Use an icon library like Lucide or Feather

const Booking = () => {
  const [tab, setTab] = useState("roundTrip");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">Book a trip</h1>
      </header>

      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Tab Navigation */}
        <div className="flex justify-around border-b border-gray-300 mb-4">
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "roundTrip" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"
            }`}
            onClick={() => setTab("roundTrip")}
          >
            Round trip
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "oneWay" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"
            }`}
            onClick={() => setTab("oneWay")}
          >
            One way
          </button>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-4 border rounded-lg">
            <p className="text-xs text-gray-500">FROM</p>
            <p className="text-2xl font-semibold">HKG</p>
            <p className="text-sm text-gray-500">Hong Kong Int'l</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <p className="text-xs text-gray-500">Going to</p>
            <p className="text-2xl font-semibold text-gray-400">---</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 border rounded-lg">
            <p className="text-xs text-gray-500">Departing</p>
            <p className="font-semibold">Thu 07 Nov 2024</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-xs text-gray-500">Returning</p>
            <p className="font-semibold">Thu 14 Nov 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-4 border rounded-lg text-center">
            <p className="text-xs text-gray-500">ADULTS (12+)</p>
            <p className="font-semibold">1</p>
          </div>
          <div className="p-4 border rounded-lg text-center">
            <p className="text-xs text-gray-500">CHILDREN (2-11)</p>
            <p className="font-semibold">0</p>
          </div>
          <div className="p-4 border rounded-lg text-center">
            <p className="text-xs text-gray-500">INFANTS (&lt;2)</p>
            <p className="font-semibold">0</p>
          </div>
        </div>

        <div className="p-4 border rounded-lg flex items-center justify-between mb-4">
          <p className="text-xs text-gray-500">CABIN CLASS</p>
          <p className="font-semibold">Economy Class</p>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>

        <div className="p-4 border rounded-lg flex items-center justify-between mb-4">
          <p className="font-semibold">Redeem flights</p>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>

        <div className="text-teal-600 font-semibold text-sm mb-4">
          Multi-city / stopover
        </div>
        <div className="flex items-center justify-between text-sm text-teal-600 mb-4">
          <p>Need help with your trip?</p>
          <button className="text-lg font-semibold">ℹ️</button>
        </div>

        <button className="w-full bg-gray-300 text-gray-600 font-semibold py-3 rounded-lg">
          Search
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Booking;


