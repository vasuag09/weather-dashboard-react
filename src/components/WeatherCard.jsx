import { useContext } from "react";
import WeatherContext from "../store/weather-context.jsx"

export default function WeatherCard() {
    const { data } = useContext(WeatherContext)
  return (
    <div className="weather-card">
      <h2>
        {data.city}, {data.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />
      <p>{data.description}</p>
      <p>🌡 {data.temperature}°C</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>💨 Wind: {data.wind} m/s</p>
    </div>
  );
}