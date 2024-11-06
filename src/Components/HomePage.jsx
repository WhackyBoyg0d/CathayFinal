import Navbar from './Navbar'
import taipei from '../assets/taipei.png'
import kaohsiung from '../assets/kaohsiung.png'
import { PiAirplaneTiltFill } from "react-icons/pi";
import asiamiles  from "../assets/asiamiles.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen  p-4">
      {/* Header */}
      <header className="bg-primary shadow p-4 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Hello, Aditya</h2>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-xl text-secondary"><PiAirplaneTiltFill /></span>
            <span className="text-xl font-semibold text-white">3,952</span>
            <span className="text-sm text-secondary"><img src={asiamiles} width={17} height={17}/></span>
            <span className="text-xl font-semibold text-white">16</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        <div className="bg-primary text-center bg-cover bg-center p-6 rounded-lg shadow-lg bg-[url('https://example.com/background.jpg')]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Where can we take you next?
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50">
              ✈️ Book a trip
            </button>
            <button className="bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50">
              📄 Manage booking
            </button>
          </div>
        </div>

        {/* Offers Section */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our latest offers</h3>
          <p className="text-gray-600 mb-4">From: Hong Kong</p>
          <div className="grid grid-cols-2 gap-4">
            {/* Offer Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src= {taipei}
                alt="Taipei"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">Taipei</h4>
              <p className="text-gray-500">Economy</p>
              <p className="text-gray-800 font-semibold">from HKD1,659</p>
              <button className="text-blue-600 font-semibold mt-2">Book now</button>
            </div>

            {/* Offer Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src= {kaohsiung}  
                alt="Kaohsiung"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">Kaohsiung</h4>
              <p className="text-gray-500">Economy</p>
              <p className="text-gray-800 font-semibold">from HKD1,559</p>
              <button className="text-blue-600 font-semibold mt-2">Book now</button>
            </div>
          </div>
        </section>
      </main>
      <Navbar/>
    </div>
  );
}

