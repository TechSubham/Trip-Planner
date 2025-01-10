import React from "react";

const page = () => {
  return (
    <div className="hidden lg:block">
      <nav className="bg-black px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-8 text-white">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Book Now</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Popular Places
            </li>
          </ul>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full">
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default page;
