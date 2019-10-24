import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subNums = this.subNums.bind(this);
    this.mulNums = this.mulNums.bind(this);
    this.divNums = this.divNums.bind(this);
  }

  setNum1(e){
    this.setState({num1: e.target.value});
  }
  setNum2(e){
    this.setState({num2: e.target.value});
  }
  addNums(e){
    e.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2});
  }
  subNums(e) {
    e.preventDefault();
    this.setState({ result: num1 - num2 });
  }
  mulNums(e) {
    e.preventDefault();
    this.setState({ result: num1 * num2 });
  }
  divNums(e) {
    e.preventDefault();
    this.setState({ result: num1 - num2 });
  }

  handleChange(e) {
    console.log(e.target.value); 
  }

  render() {
    const { num1, num2, result} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        {/* <input type="text" name="num1" value={this.state.num1} onChange={(num) => this.setNum1(num)} /> */}
        <input value={num1} onChange={this.setNum1} />

        <input value={num2} onChange={this.setNum2} />
        <br/>
        <button onClick={this.addNums}>+</button>
        <button onClick={this.subNums}>-</button>
        <button onClick={this.mulNums}>*</button>
        <button onClick={this.divNums}>/</button>
        <button onClick={this.divNums}>/</button>
      </div>
    );
  }
}

export default Calculator;