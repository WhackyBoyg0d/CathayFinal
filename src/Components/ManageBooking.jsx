import { useState } from "react";
import Navbar from "./Navbar";

export default function Bookings() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Content for Upcoming and Past Tabs
  const upcomingContent = (
    <>
      <div className="flex items-center space-x-3 text-teal-600">
        <i className="fas fa-envelope text-xl"></i>
        <span className="text-base font-medium">
          Get pre-flight reminder emails
        </span>
      </div>
      <p className="text-center text-gray-500 text-sm">
        Reminds you for flight updates and when online check-in is available
      </p>

      <div className="text-4xl text-gray-300">
        <i className="fas fa-plane"></i>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">
        You have no upcoming bookings
      </h2>
      <p className="text-sm text-gray-500">
        Last updated: 07 Nov, 06:27 (GMT +8)
      </p>
      <p className="text-sm text-gray-500">Pull to refresh</p>
    </>
  );

  const pastContent = (
    <>
      <div className="text-4xl text-gray-300">
        <i className="fas fa-history"></i>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">
        You have no past bookings
      </h2>
      <p className="text-sm text-gray-500">
        Once your trips are completed, they’ll show up here.
      </p>
    </>
  );

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center space-y-6 mb-4">
      <header className="flex justify-between items-center w-full max-w-md p-4 mb-6">
        <h1 className="text-xl font-semibold">Manage your Bookings</h1>
        <button className="text-gray-700">
          <i className="fas fa-bars"></i>
        </button>
      </header>

      

      {/* Tabs */}
      <div className="flex w-full max-w-md  mb-8 border-b">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex-1 py-3 text-center ${
            activeTab === "upcoming"
              ? "text-teal-600 font-semibold border-b-2 border-teal-600"
              : "text-gray-500"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`flex-1 py-3 text-center ${
            activeTab === "past"
              ? "text-teal-600 font-semibold border-b-2 border-teal-600"
              : "text-gray-500"
          }`}
        >
          Past
        </button>
      </div>
      </div>

      {/* Content based on active tab */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center space-y-6">
        {activeTab === "upcoming" ? upcomingContent : pastContent}

        {activeTab === "upcoming" && (
          <div className="flex flex-col items-center mt-4 space-y-2">
            <div className="text-3xl text-teal-600">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3 className="text-base font-semibold text-gray-800 mt-1">
              Can't find your booking?
            </h3>
            <button className="mt-2 px-6 py-3 border border-teal-600 text-teal-600 rounded-full text-sm font-medium">
              Add booking
            </button>
          </div>
        )}

        {activeTab === "upcoming" && (
          <div className="w-full bg-yellow-100 p-4 rounded-lg text-sm text-yellow-700 mt-6">
            <i className="fas fa-lightbulb text-yellow-600 mr-1"></i>
            For hotel and holiday packages or bookings that have been exchanged
            for 'Cathay Credits', please visit{" "}
            <a
              href="#"
              className="text-teal-600 underline hover:text-teal-800"
            >
              our website
            </a>{" "}
            for more details.
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
}
