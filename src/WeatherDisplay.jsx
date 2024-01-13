import React, { useState, useEffect } from "react";
import WeatherError from "./WeatherError";

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "14ce371048d21b3d714543b4dfd8f04a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          setError(null);
        } else {
          setError(data.message);
          setWeatherData(null);
        }
      } catch (error) {
        setError("An error occurred while fetching weather data.");
        setWeatherData(null);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="weather-display bg-transparent text-black p-3 rounded-4 border border-primary">
      {error && <WeatherError message={error} />}
      {weatherData && (
        <div>
          <h2 className="bi bi-geo-fill">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="bi bi-thermometer-half">
            {" "}
            Temperature: {weatherData.main.temp} °C
          </p>
          <p className="bi bi-droplet-half">
            {" "}
            Humidity: {weatherData.main.humidity}%
          </p>
          <p className="bi bi-wind">
            {" "}
            Wind Speed: {weatherData.wind.speed} m/s
          </p>
          <p className="bi bi-clouds-fill">
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      )}
      <Name />
    </div>
  );
};

const Name = () => {
  return (
    <>
      <h6 className="d-flex justify-content-end"> Created by</h6>
      <p className="d-flex justify-content-end">Satya Prakash</p>
    </>
  );
};

export default WeatherDisplay;
