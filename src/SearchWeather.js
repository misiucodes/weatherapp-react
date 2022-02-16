import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastPreview from "./ForecastPreview";
import "./SearchWeather.css";

export default function SearchWeather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        let apiKey = "ef1f6e14d39c4aa8875abd79b5398d89";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    let form = (
        <div className="col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={handleSubmit} className="form-control form-control-lg opacity-50">
               <i className="fas fa-search icon-search"></i>
               <input type="search" placeholder="Enter a city..." onChange={handleCityChange} />
            </form>
        </div>
    );
    
    if (weatherData.ready) { 
        return (
            <div className="container">
              <header>forecast</header>
                <div className="search-container">
                    <h2>The only weather forecast you need</h2>
                    {form}
                    <hr />
                </div>
                <WeatherInfo data={weatherData} />
                <ForecastPreview data={weatherData.coordinate} />
            </div>
        );
     } else {
         search();
         return form;
     }
    }

   