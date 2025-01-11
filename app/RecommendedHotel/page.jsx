import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Chile from "../Assets/homepagebg.jpeg"

const HotelRecommendations = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-8">Recommended Hotels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">  
          <Card className="relative w-60 overflow-hidden text-white rounded-xl">
            <div className="relative h-60 w-full">
              <Image src={Chile} alt="Hotel" layout="fill" objectFit="cover" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-2 bg-black">
              <h2 className="font-bold mb-3 text-center">
                The Singular Patagonia
              </h2>
              <div className="flex gap-2 justify-center">
                description of the hotel
              </div>
            </CardContent>
          </Card>
          <Card className="relative w-60 overflow-hidden text-white rounded-xl">
            <div className="relative h-60 w-full">
              <Image src={Chile} alt="Hotel" layout="fill" objectFit="cover" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-2 bg-black">
              <h2 className="font-bold mb-3 text-center">
                The Singular Patagonia
              </h2>
              <div className="flex gap-2 justify-center">
                description of the hotel
              </div>
            </CardContent>
          </Card>
          <Card className="relative w-60 overflow-hidden text-white rounded-xl">
            <div className="relative h-60 w-full">
              <Image src={Chile} alt="Hotel" layout="fill" objectFit="cover" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-2 bg-black">
              <h2 className="font-bold mb-3 text-center">
                The Singular Patagonia
              </h2>
              <div className="flex gap-2 justify-center">
                description of the hotel
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HotelRecommendations;