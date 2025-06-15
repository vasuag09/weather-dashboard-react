import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import WeatherContext from "./store/weather-context.jsx"
import { useState } from "react"
function App() {
  const [weatherData, setWeatherData] = useState({
    data: null
  })
  
  function showWeatherCard(weatherData){
    setWeatherData(prevWeatherData=>{
      return weatherData
    })
  }

  const ctxValue = {
    data: weatherData,
    showWeatherCard: showWeatherCard
  }
  return (
    <WeatherContext value={ctxValue}>
      <Header />
      <Search />
      {weatherData.data === null ? undefined : <WeatherCard />}
    </WeatherContext>
  );
}

export default App;
