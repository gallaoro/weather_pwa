import React from "react";
import style from "./details_wth_style.css"
import DetailsChart from "./details_chart_cmp/details_chart.jsx";
import DetailsHours from "./details_hours_cmp/details_hours.jsx";
import DetailsPreview from "./details_preview_cmp/details_preview.jsx";

class DetailsWeather extends React.Component{
  render(){
    return <div id="details-wth">
      <DetailsChart forecasts={this.props.forecasts}/>
      <DetailsHours/>
      <DetailsPreview forecasts={this.props.forecasts}/>
    </div>
  }
}

export default DetailsWeather;