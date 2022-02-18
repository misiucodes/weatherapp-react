import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="weather-info">
            <div className="row">
                <div className="col">
                    <h4>Today</h4>
                    <div className="city">{props.data.city}</div>
                    <div className="date"><FormattedDate date={props.data.date}/></div>
                    <div className="clearfix">
                            <WeatherIcon code={props.data.icon} color="white" size="42" />
                            <div className="current-temp">{Math.round(props.data.temperature)}</div><span className="degree">°</span>
                    </div>
                    <div className="description">{props.data.description}</div>
                    <div className="wind-humidity">
                        <span><strong>Humidity:</strong> {props.data.humidity}%</span> |
                        <span> <strong>Windspeed:</strong> {Math.round(props.data.wind)} km/h</span>
                    </div>
                </div>
            </div>
        </div>
    );
}