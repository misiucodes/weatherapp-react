import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <ForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      );
    } else {
      let apiKey = "ef1f6e14d39c4aa8875abd79b5398d89";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
      axios.get(apiUrl).then(handleResponse);
        
      return null;
  }
}
