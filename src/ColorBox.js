import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
     const newValue = this.props.opacity - 0.1;
      <div className="color-box" style={{opacity: 2}}>	    if(this.props.opacity >= 0.2){
        {this.props.opacity}	      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
       <ColorBox opacity = {newValue} />
      </div>	      </div>
      </div>
    )
  }
  
}
