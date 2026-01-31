export const API_KEY = "712b0c9d20a601be669ac7130af42cc6";
export const API_BASE = "https://api.openweathermap.org/data/2.5";

export async function getWeatherByCity(city) {
  const res = await fetch(
    `${API_BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}
