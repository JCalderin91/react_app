import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeTask, toggleTask } from "../redux/actions";

class Task extends Component {

  render(){
    const {task} = this.props;
    console.log(task);
    
    
    return (
      <li className="list-group-item">
        <input type="checkbox" onChange={this.props.toggleTask.bind(this, task.id)} className="mr-2" />
        {task.title}{task.done ? 'a' : 'b'}
        <button onClick={this.props.removeTask.bind(this, task.id)} className="btn btn-sm text-danger float-right">&times;</button>       
      </li>
    )
  }
}
Task.propTypes = {
  task: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    removeTask(payload){
      dispatch(removeTask(payload))
    },
    toggleTask(payload) {
      dispatch(toggleTask(payload))
    },
  }
}

export default connect(null , mapDispatchToProps)(Task);