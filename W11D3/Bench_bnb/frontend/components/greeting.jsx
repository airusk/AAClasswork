import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const greeting = this.props.user ? (
      <div>
        <h4>Welcome, {this.props.user.username}!</h4>
        <button onClick={this.handleClick}>Log Out</button>
      </div>
      ) : (
        <div>
          Sign Up, Sign In
        </div>
      )
    return (
      greeting
    )
  }
}

export default Greeting;