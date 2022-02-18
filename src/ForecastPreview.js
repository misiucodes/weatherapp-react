import React from "react";

export default function ForecastPreview(props) {

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    return (
        <div className="forecast-preview-container">
            <div>Weekly Forecast</div>
            <div className="forecast-preview">
                {day()}
                    <span className="max-temp">{maxTemperature()}</span>
                    <span className="min-temp">{minTemperature()}</span>
             </div>
        </div>
 );
}