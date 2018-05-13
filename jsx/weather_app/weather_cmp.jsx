import React from "react";
import TopNav from "./top_nav_cmp/top_nav.jsx";
import Swipeable from "./swipeable_cmp/swipeable.jsx";
import localForage from "localforage";
import moment from "moment";

class WeatherApp extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props;
  }

  componentWillMount(){
    this.downloadWeatherData();
  }

  componentDidMount(){
    this.getNext24HForecasts();
    this.getTomorrowForecast();
  }

  handleChange(event){
    this.setState({query: event.target.value});
  }

  handleKeydown(event){
    if (event.keyCode === 13) {
      window.localStorage.setItem('search', this.state.query);
      this.downloadWeatherData();
    }
  }

  getTomorrowForecast(){
    let tomorrow = moment(new Date()).add(1,'d').startOf('day');
    let plus24 = tomorrow.clone().add(24,'h')
    
    function isTomorrow(value){  
      let toTest = moment.unix(value.dt)
      return toTest.isBetween(tomorrow, plus24, null, '[]');
    }

    localForage.getItem("storedForecasts")
      .then(value => {
        this.setState({tomorrowForecasts: value.list.filter(isTomorrow)});
      })
      .catch(err => {console.log(err)})
  }

  getNext24HForecasts(){
    let actual = moment(new Date());
    let plus24 = moment(new Date()).add(24,'h')
    
    function isInNext24Hours(value){  
      let toTest = moment.unix(value.dt)
      return toTest.isBetween(actual, plus24, null, '[]');
    }

    localForage.getItem("storedForecasts")
      .then(value => {
        this.setState({next24HForecasts: value.list.filter(isInNext24Hours)});
      })
      .catch(err => {console.log(err)})
  }

  downloadWeatherData(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&q='+this.state.query+'&appid=' + config.secret)
      .then(data => data.json())
      .then(json => {
        localForage.setItem('storedForecasts', json)
          .then(console.log("Next weather stored"))
        this.setState({
          act_temp: Math.trunc(json.list[0].main.temp),
          act_clouds: Math.trunc(json.list[0].clouds.all)
        })
      })
      .catch((err)=>{
        console.log("no connection")
        //TODO: extract old data from stored value
      })
  }
  
  render(){
    return <div id="weather-app">
        <TopNav query={this.state.query}/>
        <Swipeable {...this.state}/>
      </div>
  }
}

WeatherApp.defaultProps = {
  query: 'Trento, IT'
}

export default WeatherApp;