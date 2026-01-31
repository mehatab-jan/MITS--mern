const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <h1>{Math.round(weather.main.temp)}°C</h1>
      <p>{weather.weather[0].description}</p>

      <div className="weather-details">
        <div>Humidity: {weather.main.humidity}%</div>
        <div>Wind: {weather.wind.speed} m/s</div>
      </div>
    </div>
  );
};

export default WeatherCard;
