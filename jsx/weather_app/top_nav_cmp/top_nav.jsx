import React from "react";
import style from "./top_nav_style.css";

class TopNav extends React.Component{
  render(){
    return <div id="top-nav">
      <div id="top-logo">
        <img alt="logo"/>
      </div>
      <div id="top-search">
        Trento it
      </div>
      <div id="top-options">
        <img alt="logo"/>
      </div>
    </div>
  }
}

export default TopNav;