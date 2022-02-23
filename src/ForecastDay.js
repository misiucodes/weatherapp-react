import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast-day-container">
        <div className="row">
          <div className="col">
            <div className="daily-forecast-weekday"><strong>{day()}</strong></div>
              <WeatherIcon code={props.data.weather[0].icon} color="white" size={50}/>
                <div className="daily-temps">
                  <span className="daily-forecast-max"><strong>{maxTemp()} </strong></span>
                  <span className="daily-forecast-min">{minTemp()}</span>    
                </div>
              <div className="description">{props.data.weather[0].description}</div>
          </div>
      </div>
    </div>
  );
}