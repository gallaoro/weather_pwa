import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./weather_app/weather_cmp.jsx"

let savedValue= localStorage.getItem('search')

ReactDOM.render(
  <WeatherApp query={savedValue}/>,
  document.getElementById('app')
)
