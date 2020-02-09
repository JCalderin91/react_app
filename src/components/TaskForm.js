import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from "../redux/actions";


class TaskForm extends Component {
  state = {
    title: '',
    description: '',
  }

  onSubmit = e => {
    e.preventDefault()
    const payload = {
      title: this.state.title,
      description: this.state.description,
    }
    this.props.addTask(payload)
    this.setState({
      title: '',
      description: '',
    })
  }

  onChange = e => {
    const { name , value } = e.target;
    this.setState({
      [name]: value
    })  
  }

  render(){
    return (
      <form className="py-3" onSubmit={this.onSubmit}>
        <h5>Create a task</h5>
        <div className="input-group">
          <input name="title" type="text" className="form-control" onChange={this.onChange} value={this.state.title} placeholder="Task title"/>
        </div>
        <div className="input-group">
          <textarea name="description" className="form-control" onChange={this.onChange} value={this.state.description} placeholder="Task description" aria-label="With textarea"></textarea>
        </div>
        <div className="input-group">
          <button type="submit" className="btn btn-success mt-3">Save a task</button>
        </div>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTask(payload){
      dispatch(addTask(payload))
    }
  }
}



export default connect(null, mapDispatchToProps)(TaskForm);