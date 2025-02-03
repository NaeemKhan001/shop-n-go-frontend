import React from "react";
import { Categories } from "../assets/sampleDate/categories";
import HeroImage from "../assets/Images/shopping-image-1.jpg";
const Home = () => {
  console.log("🚀 ~ Categories:", Categories);
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white font-bold text-xs px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border-md">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-600 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={HeroImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
