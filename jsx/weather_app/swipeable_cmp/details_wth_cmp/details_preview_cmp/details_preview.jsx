import React from "react";
import style from "./details_preview_style.css"

class DetailsPreview extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }

  componentWillReceiveProps(props){
    this.setState({forecasts: props.forecasts})
  }

  getPreviewDivs(){
    function extractIconCode(elem){
      return elem.weather[0].icon
    }
    function addFilePath(elem){
      return "./images/icons/" + elem + ".svg"
    }
    function toDivWithImage(elem, i){
      return <div key={i}><img src={elem}/></div>
    }
    return this.state.forecasts.map(extractIconCode).map(addFilePath).map(toDivWithImage)
  }

  render(){
    return <div id="details-preview">
      {this.getPreviewDivs()}
    </div>
  }
}

DetailsPreview.defaultProps = {
  forecasts : [
    {
      "dt": 1524733200,
      "main": {
        "temp": 10.67,
        "temp_min": 8.55,
        "temp_max": 10.67,
        "pressure": 881.88,
        "sea_level": 1026.93,
        "grnd_level": 881.88,
        "humidity": 88,
        "temp_kf": 2.13
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.37,
        "deg": 330.001
      },
      "rain": {
        "3h": 0.08709
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-04-26 09:00:00"
    },
    {
      "dt": 1524744000,
      "main": {
        "temp": 9.56,
        "temp_min": 7.97,
        "temp_max": 9.56,
        "pressure": 881.7,
        "sea_level": 1026.23,
        "grnd_level": 881.7,
        "humidity": 88,
        "temp_kf": 1.6
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.66,
        "deg": 312
      },
      "rain": {
        "3h": 0.56584
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-04-26 12:00:00"
    },
    {
      "dt": 1524754800,
      "main": {
        "temp": 9.52,
        "temp_min": 8.46,
        "temp_max": 9.52,
        "pressure": 881.53,
        "sea_level": 1025.95,
        "grnd_level": 881.53,
        "humidity": 86,
        "temp_kf": 1.06
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 0.71,
        "deg": 0.000946045
      },
      "rain": {
        "3h": 0.37096
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-04-26 15:00:00"
    },
    {
      "dt": 1524765600,
      "main": {
        "temp": 6.63,
        "temp_min": 6.1,
        "temp_max": 6.63,
        "pressure": 882.14,
        "sea_level": 1027.31,
        "grnd_level": 882.14,
        "humidity": 78,
        "temp_kf": 0.53
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 0.76,
        "deg": 2.00095
      },
      "rain": {
        "3h": 0.0064599999999999
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-04-26 18:00:00"
    },
    {
      "dt": 1524776400,
      "main": {
        "temp": 4.91,
        "temp_min": 4.91,
        "temp_max": 4.91,
        "pressure": 883.42,
        "sea_level": 1029.58,
        "grnd_level": 883.42,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.86,
        "deg": 8.50052
      },
      "rain": {
        "3h": 0.04702
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-04-26 21:00:00"
    },
    {
      "dt": 1524787200,
      "main": {
        "temp": 3.47,
        "temp_min": 3.47,
        "temp_max": 3.47,
        "pressure": 883.3,
        "sea_level": 1030.2,
        "grnd_level": 883.3,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 0.66,
        "deg": 6.50031
      },
      "rain": {
        "3h": 0.2047
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-04-27 00:00:00"
    },
    {
      "dt": 1524798000,
      "main": {
        "temp": 2.94,
        "temp_min": 2.94,
        "temp_max": 2.94,
        "pressure": 882.89,
        "sea_level": 1030.24,
        "grnd_level": 882.89,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.71,
        "deg": 347.003
      },
      "rain": {
        "3h": 1.04581
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-04-27 03:00:00"
    },
    {
      "dt": 1524808800,
      "main": {
        "temp": 3.35,
        "temp_min": 3.35,
        "temp_max": 3.35,
        "pressure": 882.89,
        "sea_level": 1030.28,
        "grnd_level": 882.89,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "pioggia leggera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.32,
        "deg": 15.5001
      },
      "rain": {
        "3h": 0.62644
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-04-27 06:00:00"
    }]
}

export default DetailsPreview;