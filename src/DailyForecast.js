import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]);

  function getResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {

  return (
    <div className="daily-forecast">
      {forecast.map(function(dailyForecast, index){
        if(index<5) {
          return(
            <div className="col" key={index}>
              <ForecastPreview data={DailyForecast} />
            </div>
          );
          } else {
            return null;
          }
      })}
    </div>
  );

    } else {
      let apiKey = "ef1f6e14d39c4aa8875abd79b5398d89";
      let latitude = props.coordinates.latitude;
      let longitude = props.coordinates.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(getResponse);

      return null;
      }
}
