import React from "react";
import TopNav from "./top_nav_cmp/top_nav.jsx"
import Swipeable from "./swipeable_cmp/swipeable.jsx";

class WeatherApp extends React.Component{
  render(){
    return <div id="weather-app">
        <TopNav/>
        <Swipeable/>
      </div>
  }
}

export default WeatherApp;