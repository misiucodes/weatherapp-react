import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
    let apiKey = "ef1f6e14d39c4aa8875abd79b5398d89";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  return (
    <div className="daily-forecast-container">
      <h3>Weekly Forecast</h3>
      <div className="row d-flex justify-content-around">

        <div className="col-sm col-md col-md-lg justify-content-evenly">
          <div className="daily-forecast-weekday"><strong>Mon</strong></div>
            <WeatherIcon code="04d" color="white"/>
              <div className="daily-temps">
                <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
              </div>
              <div className="description">Light Rain</div>
          </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Tue</strong></div>
          <WeatherIcon code="04d" color="white" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Wed</strong></div>
          <WeatherIcon code="04d" color="white" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Thu</strong></div>
          <WeatherIcon code="04d" color="white"/>
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Fri</strong></div>
          <WeatherIcon code="04d" color="white"/>
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

      <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Sat</strong></div>
          <WeatherIcon code="04d" color="white"/>
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

      <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Sun</strong></div>
          <WeatherIcon code="04d" color="white"/>
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>
      </div>
    </div>
  );
}
