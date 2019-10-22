
import {htmlGenerator} from "./warmup";
// import * as warmup from "./warmup"; //importing the whole file, would require an export default
// const htmlGenerator = require ("./warmup");

export class Clock {
  constructor() {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const timeString = [this.hours, this.minutes, this.seconds].join(":");
    const htmlElement = document.getElementById("clock");
    htmlGenerator(timeString, htmlElement);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}

const clock = new Clock();


