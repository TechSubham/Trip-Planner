import React from "react";
import Image from "next/image";
import chile from "../Assets/chile1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faPlane,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import HotelRecommendations from "../RecommendedHotel/page";
import TourRecommendation from "../RecommendedTour/page";

const TripPlanner = () => {
  return (
    <div className="max-w-3xl mx-auto bg-black text-white">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-light">Trip Planner</h1>
        </div>
        <p className="text-red-500 text-sm mb-2">Plan your dream trip.</p>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <div>6 days</div>
          <div>•</div>
          <div>Chile</div>
          <div>•</div>
          <div>Adventure and Outdoor</div>
        </div>
      </div>

      <div className="border border-gray-700 p-2 relative">

        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          {["Rerun", "Copy", "Save", "Share"].map((action, index) => (
            <button
              key={index}
              className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg flex items-center space-x-2 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>{action}</span>
            </button>
          ))}
        </div>

        <Image src={chile} alt="Chile" />

        <div className="mt-5 flex space-x-2 border border-gray-700 p-3 rounded-2xl">
          <div className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPlane} className="w-4 h-4 text-black" />
          </div>
          <div>Find Flights</div>
        </div>

        <div className="mt-2 font-bold text-xl">Day 1:</div>

        <div className="flex flex-col">
          <div className="mt-5 border border-gray-700 p-3 flex flex-col rounded-2xl">
            <span className="mb-2 text-gray-300 text-sm">7:00 AM</span>
            <div className="flex items-center space-x-2">
              <span className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faKitchenSet}
                  className="w-4 h-4 text-black"
                />
              </span>
              <span className="font-bold text-xl">Breakfast</span>
            </div>
            <div className="mt-2 text-gray-300 text-sm">This is a travel app.</div>

            <div className="flex items-center space-x-2 text-red-700 mt-5">
              <span>
                <FontAwesomeIcon icon={faTicket} className="w-5" />
              </span>
              <span className="text-red-700 text-sm">Book a Tour</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-5 border border-gray-700 p-3 flex flex-col rounded-2xl">
            <span className="mb-2 text-gray-300 text-sm">7:00 AM</span>
            <div className="flex items-center space-x-2">
              <span className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faKitchenSet}
                  className="w-4 h-4 text-black"
                />
              </span>
              <span className="font-bold text-xl">Breakfast</span>
            </div>
            <div className="mt-2 text-gray-300 text-sm">This is a travel app.</div>
            <span className="mt-5 flex items-center ">Add some description</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-5 border border-gray-700 p-3 flex flex-col rounded-2xl">
            <span className="mb-2 text-gray-300 text-sm">7:00 AM</span>
            <div className="flex items-center space-x-2">
              <span className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faKitchenSet}
                  className="w-4 h-4 text-black"
                />
              </span>
              <span className="font-bold text-xl">Breakfast</span>
            </div>
            <div className="mt-2 text-gray-300 text-sm">This is a travel app.</div>
            <div className="mt-5 flex items-center justify-between ">
              <span className="mt-5 flex items-center ">Add some description</span>
              <span className="mt-5 flex items-center ">
                <button className="flex items-center bg-red-500 text-black font-medium p-2 px-6 rounded-full min-w-[150px] hover:bg-red-600 transition duration-300 justify-center">
                  Find hotels
                  {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> */}
                </button>
              </span>
            </div>
          </div>
        </div>

        <div>
          <HotelRecommendations />
        </div>
        <div>
          <TourRecommendation />
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
