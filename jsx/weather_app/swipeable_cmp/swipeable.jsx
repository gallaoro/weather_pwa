import React from "react";
import DetailsWeather from "./details_wth_cmp/details_wth.jsx";
import EssentialWeather from "./essential_wth_cmp/essential_wth.jsx";
import BottomNav from "./bottom_nav_cmp/bottom_nav.jsx";

import SwipeableViews from "react-swipeable-views";

class Swipeable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      index: 0
    }
  }

  handleChange(event, value){
    this.setState({
      index: value,
    });
  };

  handleChangeIndex(index){
    this.setState({
      index,
    });
  };

  render(){
    return <div>
    <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex.bind(this)}>
      <div className="slidable">
        <EssentialWeather/>
        <DetailsWeather forecasts={this.props.next24HForecasts}/>
      </div>
      <div className="slidable">slide n°2</div>
      <div className="slidable">slide n°3</div>
    </SwipeableViews>
    <BottomNav handleClick={this.handleChange.bind(this)}/>
  </div>
  }
}

export default Swipeable;