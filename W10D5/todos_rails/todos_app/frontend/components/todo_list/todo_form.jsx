import React from 'react';
import { uniqueId }  from './util';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uniqueId(),
      title: "",
      body: ""
    }
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: uniqueId(),
      title: "",
      body: ""
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Title:
        <input onChange={this.updateTitle} type="text" value={this.state.title}/>
      </label>
      
      <label>Body:
        <input onChange={this.updateBody} type="text" value={this.state.body}/>
      </label>

      <input type="Submit" value="Add Todo"/>
    </form>
    )
  }

}