import { useState } from "react";
import useWeather from "../hooks/useWeather";
import "../styles/weather.css";

const Home = () => {
  const [city, setCity] = useState("");
  const { weather, fetchWeather, loading, error } = useWeather();

  return (
    <div className="container">
      <div className="card">
        <h1>Weather App</h1>

        <div className="search">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={() => fetchWeather(city)}>→</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div className="weather-result">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <h1>{Math.round(weather.main.temp)}°C</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
