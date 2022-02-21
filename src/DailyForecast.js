import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

// Build layout w/ fake data

export default function DailyForecast() {
  return (
    <div className="daily-forecast-container">
      <h3>Weekly Forecast</h3>
      <div className="row d-flex justify-content-around">

        <div className="col-sm col-md col-md-lg justify-content-evenly">
          <div className="daily-forecast-weekday"><strong>Mon</strong></div>
            <WeatherIcon code="04d" className="canvas-forecast-icon"/>
              <div className="daily-temps">
                <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
              </div>
              <div className="description">Light Rain</div>
          </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Tue</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Wed</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Thu</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

       <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Fri</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

      <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Sat</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>

      <div className="col-sm col-md col-md-lg justify-content-evenly">
        <div className="daily-forecast-weekday"><strong>Sun</strong></div>
          <WeatherIcon code="04d" />
            <div className="daily-temps">
              <span className="daily-forecast-max"><strong>15° </strong></span> <span className="daily-forecast-min">10°</span>    
            </div>
            <div className="description">Light Rain</div>
      </div>
      </div>
    </div>
  );
}
