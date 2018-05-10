import React from "react";

import style from "./city_input_style.css"

class CityInput extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }

  render(){
    return <input id="city-input" type="text" defaultValue={this.props.query}/>
  }
}

export default CityInput;