import { useState } from "react";
import "../styles/weather.css";

const WeatherUI = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const result = await res.json();

      if (result.cod !== 200) {
        setError("City not found");
        setData(null);
      } else {
        setData(result);
        setError("");
      }
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <div className="weather-card">
      <h2>🌤 Weather App</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="weather-info">
          <h3>{data.name}</h3>
          <p>{data.weather[0].description}</p>
          <h1>{data.main.temp}°C</h1>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherUI;
