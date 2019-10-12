class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    // let that = this;
    // setInterval(that._tick.bind(that), 1000);
    const newTick = this._tick.bind(this);
    setInterval(newTick, 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes ++;
    } 
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    } 
    if (this.hours === 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}

let clock = new Clock();