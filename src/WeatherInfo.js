import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";
import WeatherForecast from "./WeatherForecast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="weather-info">
            <div className="row">
                <div className="col">
                    <h4>Today</h4>
                    <div className="city">{props.data.city}</div>
                    <div className="date"><FormattedDate date={props.data.date}/></div>
                     <div className="clearfix">
                        <img
                            src={props.data.icon}
                            className="weather-icon"
                            alt={props.data.description}
                        />
                        <WeatherUnit celcius={props.data.temperature} />
                    </div>
                    <div className="description">{props.data.description}</div>
                    <div className="wind-humidity">
                        <span><strong>Humidity:</strong> {props.data.humidity}%</span> |
                        <span> <strong>Windspeed:</strong> {Math.round(props.data.wind)} km/h</span>
                    </div>
                    <h5>Weekly Forecast</h5>
                    <WeatherForecast coordinates={props.data.coordinates} />
                </div>
            </div>
        </div>
    );
}