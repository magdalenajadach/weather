"use client";
import React, { useState, useEffect } from "react";

import { fetchWeatherData } from "../../api/weatherApi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = "Marple"; 

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, [city]);

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
