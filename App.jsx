import React, { useState } from "react";

export default function App() {
  const weatherData = {
    Delhi: { temp: 32, condition: "Sunny ☀️" },
    Mumbai: { temp: 28, condition: "Cloudy ☁️" },
    Kolkata: { temp: 30, condition: "Rainy 🌧️" },
    Chennai: { temp: 34, condition: "Hot 🔥" },
  };

  const [city, setCity] = useState("Delhi");

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "#fff",
    fontFamily: "Arial",
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Weather App</h1>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", marginBottom: "20px" }}
        >
          {Object.keys(weatherData).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <h2>{city}</h2>
        <h3>{weatherData[city].temp}°C</h3>
        <p>{weatherData[city].condition}</p>
      </div>
    </div>
  );
}