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
  }

  setNum1(e){
    console.log(e.value);
    this.setState({num1: e.value});
    console.log(this.state.num1);
  }
  setNum2(e){
    this.setState({num2: e.value});
  }
  addNums(){
    this.setState({result: num1 + num2});
  }
  subNums() {
    this.setState({ result: num1 - num2 });
  }
  mulNums() {
    this.setState({ result: num1 * num2 });
  }
  divNums() {
    this.setState({ result: num1 - num2 });
  }

  handleChange(e) {
    console.log(e.target.value); 
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        {/* <input type="text" name="num1" value={this.state.num1} onChange={(num) => this.setNum1(num)} /> */}
        <input type="text" name="num1" value={this.state.num1} onChange={this.handleChange} />

        <input type="text" name="num2" value={this.state.num2} onChange={(num) => this.setNum2(num)} />
        <br/>
        <button onClick={()=> this.addNums()}>+</button>
        <button onClick={() => this.subNums()}>-</button>
        <button onClick={() => this.mulNums()}>*</button>
        <button onClick={() => this.divNums()}>/</button>
        <button onClick={() => this.divNums()}>/</button>
      </div>
    );
  }
}

export default Calculator;