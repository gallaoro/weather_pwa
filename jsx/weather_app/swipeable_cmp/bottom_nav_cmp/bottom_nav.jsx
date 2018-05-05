import React from "react";
import style from "./bottom_nav_style.css"
import classNames from "classnames";

class BottomNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstClasses: 'current-nav-tab',
      secondClasses: '',
      thirdClasses: ''
    }
  }

  click(event, index){
    this.props.handleClick(event, index);
    //TODO: cleanup this shit
    switch(index){
      case 0:
        this.setState({
          firstClasses: 'current-nav-tab',
          secondClasses: '',
          thirdClasses: ''
        })  
      break;
      case 1:
        this.setState({
          firstClasses: '',
          secondClasses: 'current-nav-tab',
          thirdClasses: ''
        })
      break;
      case 2:
        this.setState({
          firstClasses: '',
          secondClasses: '',
          thirdClasses: 'current-nav-tab'
        })
      break;
    }
  }

  render(){
    let firstClasses = classNames('bottom-nav-elem',this.state.firstClasses);
    let secondClasses = classNames('bottom-nav-elem',this.state.secondClasses);
    let thirdClasses = classNames('bottom-nav-elem',this.state.thirdClasses);

    return <div id="bottom-nav">
      <div onClick={(e)=> this.click(e, 0)} className={firstClasses}>
        oggi
      </div>
      <div onClick={(e)=> this.click(e, 1)} className={secondClasses}>
        domani
      </div>
      <div onClick={(e)=> this.click(e, 2)} className={thirdClasses}>
        5 giorni
      </div>
    </div>
  }
}

export default BottomNav;