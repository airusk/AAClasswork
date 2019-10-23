import React from "react";

class Clock extends React.Component{
  constructor(props){
    super(props);
    // let currentDate = new Date();
    // let hours =  currentDate.getHours();
    // let minutes = currentDate.getMinutes();
    // let seconds = currentDate.getSeconds();
    // let clockInterval = setInterval(this._tick(), 1000);
    this.state = {
      time: new Date()
    };
    this._tick = this._tick.bind(this);
  }

  
  _tick(){
    console.log("in _tick");
    // let newDate = new Date();
 
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    this.clockInterval = setInterval(this._tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(clockInterval);
  }
  
  render(){
    let hours = this.state.time.getHours();
    let minutes =  this.state.time.getMinutes();
    let seconds =  this.state.time.getSeconds();
    let utcTime = this.state.time.toUTCString();
    return(
      <div>
        {/* <h1>{hours}:{minutes}:{seconds}</h1> */}
        <h1>{utcTime}</h1>
        </div>
    );
  }
}
export default Clock;