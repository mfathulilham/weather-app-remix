import React from "react";
import Button from "../components/Button";
import imageIcon from "public/weather.svg";

const HomePage: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="flex items-center flex-col pt-5 pb-16 h-auto mb-2 w-full">
      {/* <img src={imageIcon} alt="icon-default" className="h-96" /> */}
      <div className="w-1/2 rounded-md shadow-md p-5 bg-white">
        <div className="border-b-2 pb-2">
          <span className="text-2xl font-medium text-gray-800 pr-2">
            Cuaca
          </span>
          <span className="text-2xl font-medium text-red-500">
            Saat ini
          </span>
        </div>
        <div className="flex items-center ">
          <div className="w-full">
            <div className="flex items-center">
              <img src={imageIcon} alt="icon-weather" className="h-32" />
              <div className="flex items-center flex-col">
                <span className="block text-5xl text-bold font-extrabold">30°</span>
                <span className="text-xl">RealFeel</span>
              </div>
            </div>
            <span className="block text-xl">Cerah Berawan</span>
          </div>
          <div className="w-full">
            <div className="flex justify-between border-b mt-3">
              <span className="w-1/2 px-0 py-2">RealFeel Shade™</span>
              <span className="w-1/2 text-xl text-end font-semibold px-0 py-2">34°</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="w-1/2 px-0 py-2">Angin</span>
              <span className="w-1/2 text-xl text-end font-semibold px-0 py-2">B 9 km/j</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="w-1/2 px-0 py-2">Angin Kencang</span>
              <span className="w-1/2 text-xl text-end font-semibold px-0 py-2">22 km/j</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="w-1/2 px-0 py-2">Kualitas Udara</span>
              <span className="w-1/2 text-xl text-end font-semibold text-green-400 px-0 py-2">Lumayan</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Button onClick={handleClick}>Lihat Lainnya</Button>
      </div>
    </div>
  );
};

export default HomePage;