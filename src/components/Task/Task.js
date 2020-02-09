import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeTask, toggleTask } from "../../store/actions/tasks";

class Task extends Component {

  render(){
    const {task} = this.props;
    
    const doneStyles = {
      textDecoration: 'line-through',
      color: 'gray',
    }   
    
    return (
      <li className="list-group-item">
        <div>
          <input type="checkbox" checked={task.done} onChange={this.props.toggleTask.bind(this, task.id)} className="mr-2" />
          <span style={task.done ? doneStyles : {}}>{task.title}</span>
          <button onClick={this.props.removeTask.bind(this, task.id)} className="btn btn-sm text-danger float-right">&times;</button>
        </div>    
        <p>{task.description}</p>   
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