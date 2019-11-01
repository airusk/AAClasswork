import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username = "",
      password = ""
    };
  }
  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser()
  }

  render(){
    return(
      <div className = "session-form">
        <h2>Sign Up Here!</h2>
        <form>
          <label> Username:
            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
          </label>
          <br/>
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}