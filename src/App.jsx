import { useState } from "react";
import "./App.css";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [city, setCity] = useState("");

  const handleFormSubmit = (userCity) => {
    setCity(userCity);
  };

  return (
    <div className="app border-4 border border-primary border-opacity-25 bg-gradient container">
      <h1>Weather App</h1>
      <WeatherForm onFormSubmit={handleFormSubmit} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
