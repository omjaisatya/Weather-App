import React, { useState } from "react";

const WeatherForm = ({ onFormSubmit }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(city);
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <label htmlFor="city">Enter City:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
        required
        className="bg-white border border-primary border-opacity-50 rounded-4"
      />
      <button className="rounded" type="submit">
        Get Weather{" "}
      </button>
    </form>
  );
};

export default WeatherForm;
