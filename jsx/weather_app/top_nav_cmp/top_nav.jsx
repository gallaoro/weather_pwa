import React from "react";

import CityInput from "./city_input_cmp/city_input.jsx"

import style from "./top_nav_style.css";

class TopNav extends React.Component{
  render(){
    return <div id="top-nav">
      <div id="top-logo">
        <img alt="logo"/>
      </div>
      <div id="top-search">
        <CityInput query={this.props.query}/>
      </div>
      <div id="top-options">
        <img alt="logo"/>
      </div>
    </div>
  }
}

export default TopNav;