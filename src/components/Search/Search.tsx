"use client";

import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../../api/weatherApi";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export default function Search() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(e.target.value);
    setSelectedLabel(e.target.getAttribute("data-label") || "");
  };

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(selectedLocation);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (selectedLocation) {
      getWeatherData();
    }
  }, [selectedLocation]);

  return (
    <div className="md:flex flex-col w-full items-center justify-center sm:p-10">
      <h2 className="text-4xl text-van-dyke font-semibold flex w-full sm:p-10 items-center justify-center p-4">Choose your location</h2>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="kinder-scout"
              type="radio"
              data-label="Kinder Scout, Dark Peak of the Derbyshire, England"
              onChange={handleLocationChange}
              value="London"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label htmlFor="kinder-scout" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Kinder Scout, Dark Peak of the Derbyshire, England
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="tryfan"
              type="radio"
              data-label="Tryfan, Ogwen Valley, Eryri, Wales"
              onChange={handleLocationChange}
              value="Manchester"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label htmlFor="tryfan" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Tryfan, Ogwen Valley, Eryri, Wales
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="mam-tor"
              type="radio"
              data-label="Mam Tor, High Peak of Derbyshire, England"
              onChange={handleLocationChange}
              value="Leeds"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label htmlFor="mam-tor" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Mam Tor, High Peak of Derbyshire, England
            </label>
          </div>
        </li>
      </ul>
      <div>
        {weatherData && (
          <div className="md:flex w-full items-center justify-center p-4 place-content-center">
          <div className="md:grid grid-cols-2 grid-rows-2 gap-2">
            <div className="col-span-2 bg-white rounded-lg md:border-olivine items-center my-1.5 p-4 text-van-dyke"><h3><strong>Selected location:</strong> {selectedLabel}</h3></div>
            <div className="row-start-2 bg-white rounded-lg md:border-olivine items-center my-1.5 p-4 text-van-dyke"><p><strong>Temperature:</strong> {weatherData.main.temp.toFixed(0)} °C</p></div>
            <div className="row-start-2 bg-white rounded-lg md:border-olivine items-center my-1.5 p-4 text-van-dyke"><p><strong>Weather:</strong> {weatherData.weather[0].description}</p></div>
        </div>
        </div>
        )}
      </div>
    </div>
  );
}
