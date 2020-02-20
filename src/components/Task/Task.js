import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTask, readTask } from "../../store/actions/tasks";
import "./Task.css"

import firebase from "../../firebase/firebase";

const formatDate = (date) => {
  let h = date.split(":")[0]
  let tz = "am"
  if(h>12){
    h-= 12
    tz = "pm"
  }
  return `${h}:${date.split(":")[1]} ${tz}`
}

class Task extends Component {
  constructor() {
    super();
    this.db_ref = firebase.database().ref()
  }
  
  removeTask(id){
    const question = window.confirm("Are you sure delete it?")
    if(question===true)    
      this.db_ref.child("users/"+id).remove()
  }
 
  render(){
    const {task, user} = this.props;      
    return (
      <div className={(task.title === user) ? "message-item right" : "message-item left"}>
        <div className="message-content" >
          <h6 className="mb-0"><b>{task.title}: </b></h6>   
          <i>{task.description}</i>  
          <p title="Delete" onClick={this.removeTask.bind(this, task.id)} className="delete-btn">&times;</p>
          <p className="date m-0 text-right">{formatDate(task.created_at)}</p>
        </div>
      </div>
    )
  }
}
Task.propTypes = {
  task: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTask(payload) {
      dispatch(toggleTask(payload))
    },
    readTask(payload) {
      dispatch(readTask(payload))
    },
  }
}

export default connect(null , mapDispatchToProps)(Task);