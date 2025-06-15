import { createContext } from "react";

const WeatherContext = createContext({
    data: null,
    showWeatherCard: () => {}
})

export default WeatherContext