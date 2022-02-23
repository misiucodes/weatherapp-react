import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

    if (loaded) {
      return (
        <div className="container">
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
