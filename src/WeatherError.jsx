import React from "react";

const WeatherError = ({ message }) => {
  return (
    <div className="weather-error">
      <p>{message}</p>
    </div>
  );
};

export default WeatherError;
