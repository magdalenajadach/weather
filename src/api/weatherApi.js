import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
        },
      }
    );
    return response.data;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
