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
    let date = this.state.time.toDateString();
    let time = this.state.time.toLocaleTimeString();
    return(
      <div className="clock">
        <div className = "clock-content">
          <label>Date: 
            <p id="date"> {date} </p>
          </label>
          <label>Time: 
            <p id="time">{time}</p>
          </label> 
        </div>
      </div>
    );
  }
}
export default Clock;