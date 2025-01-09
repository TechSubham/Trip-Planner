import React from "react";
import Image from "next/image";
import Homepagebg from "../Assets/homepage.jpg";
import Combobox, {
  frameworks,
  languages,
  databases,
} from "../../components/ui/origin";

const Page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[75vh] w-full relative">
        <Image
          src={Homepagebg}
          alt="Homepage background"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h1 className="text-5xl font-bold text-white">Tanny Travels</h1>
          <p className="text-lg text-red-300 mt-2">Plan your dream trip.</p>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] transform -translate-x-1/2 -translate-y-1/3">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 h-full flex items-center justify-center flex-col space-y-16">
            <div className="grid grid-cols-3 gap-20">
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
            <div className="grid grid-cols-2 gap-20">
              <div>
                <Combobox items={frameworks} placeholder="Means of transport" />
              </div>
              <div>
                <Combobox items={frameworks} placeholder="Travel style" />
              </div>
            </div>
            <button className="px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition">
              ✨ Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
