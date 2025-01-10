import React from "react";
import Image from "next/image";
import Homepagebg from "../Assets/homepagebg.jpeg";
import Combobox, {
  frameworks,
  languages,
  databases,
} from "../../components/ui/Combox";
import Card from "../Assets/travelcard";
import Navbar from "../Navbar/page"

const Page = () => {
  return (
      <>
      <Navbar/>
      <div className="min-h-screen w-full">
        <div className="relative min-h-[75vh] w-full">
          <Image
            src={Homepagebg}
            alt="Homepage background"
            className="absolute h-full w-full object-cover"
            priority
          />
          <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 text-center z-20 w-full px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Tanny Travels
            </h1>
            <p className="text-base md:text-lg text-red-500 mt-2">
              Plan your dream trip.
            </p>
          </div>

          <div className="absolute top-1/2 left-1/2 w-[90%] md:w-[85%] lg:w-[70%] transform -translate-x-1/2 -translate-y-1/3 p-4 md:p-6">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

            <div className="relative z-10 h-full flex items-center justify-center flex-col space-y-6 md:space-y-8 lg:space-y-16 py-6 md:py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  space-x-16">
                <div className="text-black flex flex-col items-center">
                  <Combobox items={frameworks} placeholder="Travel days" />
                </div>
                <div className="text-black flex flex-col items-center">
                  <Combobox items={languages} placeholder="Origin" />
                </div>
                <div className="text-black flex flex-col items-center">
                  <Combobox items={databases} placeholder="Destination" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  space-x-12">
                <div className="text-black flex flex-col items-center">
                  <Combobox
                    items={frameworks}
                    placeholder="Means of transport"
                  />
                </div>
                <div className="text-black flex flex-col items-center">
                  <Combobox items={frameworks} placeholder="Travel style" />
                </div>
              </div>

              <button className="px-4 md:px-6 py-2 md:py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition text-sm md:text-base w-full md:w-auto">
                ✨ Run
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 border border-gray-500 m-4 rounded-3xl">
          <div className="text-white font-bold text-3xl text-center mt-5">
            Recently Created Trip Plans
          </div>

          <div className="grid grid-cols-4 justify-center items-center ml-12 mt-10 mb-10 gap-4">
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-6 items-center bg-black text-white p-6 rounded-lg shadow-lg">
            <div>
              <h3 className="text-lg font-semibold">
                Don’t see the right plan for you?
              </h3>
              <p className="text-sm text-gray-400">We’ve got you covered</p>
            </div>
            <button className="flex items-center px-6 py-2 bg-red-600 text-white font-medium text-sm rounded-full border border-purple-500 hover:bg-red-700 transition duration-300">
              ✨ Tailor your plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
