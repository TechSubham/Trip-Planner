import React from "react";
import Image from "next/image";
import chile from "../Assets/chile1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faPlane,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const TripPlanner = () => {
  return (
    <div className="max-w-3xl mx-auto bg-black  text-white">
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
      <div className=" border border-gray-700 p-2 ">
        <Image src={chile} />
        <div className="mt-5 flex space-x-2 border border-gray-700 p-3 rounded-2xl">
          <div className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPlane} className="w-4 h-4 text-black" />
          </div>
          <div>Find Flights</div>
        </div>
        <div className="mt-2 font-bold text-xl">Day 1:</div>
        <div className="flex flex-col ">
          <div className="mt-5 border border-gray-700 p-3 flex flex-col rounded-2xl ">
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
            <div className="mt-2 text-gray-300 text-sm">
              this ia a travel app
            </div>
            {/* <div className=" mt-5">this is discription</div> */}
            <div className="flex items-center space-x-2 text-red-700 mt-5">
              <span>
                <FontAwesomeIcon icon={faTicket} className=" w-5" />
              </span>
              <span className="text-red-700 text-sm">Book a Tour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
