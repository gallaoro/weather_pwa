import React from "react";
import style from "./essential_wth_style.css"

class EssentialWeather extends React.Component{
  render(){
    return <div id="essential-wth">
      <div id="essential-wth-text">
        <h1 id="essential-wth-temp">17°C</h1>
        <h4>88% &#x2601;</h4> 
      </div>
    </div>
  }
}

export default EssentialWeather;