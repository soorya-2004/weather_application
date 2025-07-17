import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=4f2dc0cec42c4659a5461108250607&q=${city}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Weather App 🌦️</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.location && (
        <div style={{ marginTop: "1rem" }}>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="icon" />
        </div>
      )}
    </div>
  );
}
