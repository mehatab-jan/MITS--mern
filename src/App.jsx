import { useState } from "react";
import "./App.css";

const API_KEY = "f5870162dca61f60605d050f4a69dd02";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      // ✅ THIS IS THE KEY FIX
      if (data.cod !== 200) {
        setError("City not found");
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🌤 Weather App</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="result">
            <h2>{weather.name}</h2>
            <p>🌡 Temperature: {weather.main.temp} °C</p>
            <p>☁ Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
