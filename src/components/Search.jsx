import { useContext, useEffect, useState } from "react";
import WeatherContext from "../store/weather-context.jsx"

export default function Search() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const weatherCtx = useContext(WeatherContext)
  async function handleSubmit(event) {
    event.preventDefault();

    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: (data.main.temp - 273.15).toFixed(1), // Celsius
        humidity: data.main.humidity,
        description: data.weather[0].main,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
      };
      weatherCtx.showWeatherCard(weatherData)
    } catch (err){
        setError(err.message || "Something went wrong")
    } finally {
        setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="city">Enter the name of city:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="e.g. Mumbai"
      />
      <input type="submit" value={loading ? "Loading..." : "Submit"} />
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
