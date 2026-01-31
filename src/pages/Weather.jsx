import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherUI from "../components/WeatherUI";

const Weather = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="weather-page">
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          navigate("/");
        }}
      >
        Logout
      </button>

      <WeatherUI />
    </div>
  );
};

export default Weather;
