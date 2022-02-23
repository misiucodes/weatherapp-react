import React from "react";

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
    <div className="daily-forecast-container">
      <h3>Weekly Forecast</h3>
      <div className="row d-flex justify-content-around">

        <div className="col-sm col-md col-md-lg justify-content-evenly">
          <div className="daily-forecast-weekday"><strong>{day()}</strong></div>

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