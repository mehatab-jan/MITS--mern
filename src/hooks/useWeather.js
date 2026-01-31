import { useState } from "react";
import { API_BASE, API_KEY } from "../api/weatherApi";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


    const fetchWeather = async (city) => {
  console.log("City:", city);   // 👈 ADD THIS

  if (!city) return;

  try {
    const res = await fetch(
      `${API_BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();
    console.log("API DATA:", data); // 👈 ADD THIS

    setWeather(data);
  } catch (err) {
    console.log("ERROR:", err);
  }
};


  return { weather, loading, error, fetchWeather };
};

export default useWeather;
