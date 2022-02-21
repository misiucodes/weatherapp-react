import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celcius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
  return (
    <div className="current-temp">
      <span>{Math.round(props.celcius)}</span><span className="degree">°C | <a href="/" onClick={showFarenheit}>°F</a></span>
    </div>
    );
} else {

  let farenheit = (props.celcius * 9 / 5) + 32;
  return (
    <div className="current-temp">
      <span>{Math.round(farenheit)}</span><span className="degree"><a href="/" onClick={showCelcius}>°C </a>| °F</span>
    </div>
    );
  }
}
