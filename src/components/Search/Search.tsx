// import Image from "next/image" 
"use client";
import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../../api/weatherApi";

export default function Search() {
  const [weatherData, setWeatherData] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedLabel, setSelectedLabel] = useState("")

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

    getWeatherData();
  }, [selectedLocation]);


  return (
    <div className="md:flex flex-col w-full items-center justify-center min-h-screen sm:p-20">
      {/* <p>Welcome to the weather application. It is a tool designed to provide
        users with real-time and forecasted weather information for specific
        locations. It allows to conveniently check the weather conditions
        for any location they are interested in
      </p> */}

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Choose your location</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="kinder-scout" type="radio" data-label="Kinder Scout, Dark Peak of the Derbyshire, England" onChange={handleLocationChange} value="London" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label  htmlFor="kinder-scout" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kinder Scout, Dark Peak of the Derbyshire, England </label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="tryfan" type="radio" data-label="Tryfan, Ogwen Valley, Eryri, Wales" onChange={handleLocationChange} value="Manchester" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="tryfan" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tryfan, Ogwen Valley, Eryri, Wales</label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="mam-tor" type="radio" data-label="Mam Tor, High Peak of Derbyshire, England" onChange={handleLocationChange} value="Leeds" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label htmlFor="mam-tor" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mam Tor, High Peak of Derbyshire, England</label>
            </div>
        </li>
      </ul>
      <div>
        {weatherData && (
        <div>
          <h3>Selected location: {selectedLabel}</h3>
          <p>Temperature: {weatherData.main.temp.toFixed(0)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
        )}
        </div>
    </div>
  )
}
