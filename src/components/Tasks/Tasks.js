import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import { connect } from 'react-redux';

import { listTask } from "../../store/actions/tasks";

import firebase from "../../firebase/firebase";

import "./Tasks.css"

const created_at = new Date().toTimeString().split(" ")[0]
class Tasks extends Component {
  constructor(){ 
    super(); 
    this.db_tasks = firebase.database().ref().child("users");
  }

  state = {
    tasks: [
      // {title: 'persona uno', description:'hola', created_at},
      // {title: 'persona uno', description:'como estas?', created_at},
      // {title: 'persona dos', description:'hola', created_at},
      // {title: 'persona dos', description:'bien', created_at},
      // {title: 'persona dos', description:'y tu?', created_at},
    ]
  }

  componentDidMount(){
    let tasks = []
    
    this.db_tasks.on("child_added", snap => {
      if(snap.val() !== null){        
        tasks = [ 
          ...tasks,
          {
            id: snap.key,
            title: snap.val().name,
            description: snap.val().email,
            created_at: snap.val().created_at,
          }
        ]
        this.setState({tasks})
        if(tasks.length > 0){
          const container = document.getElementById("messages-container")
          container.scrollTo(0, container.scrollHeight)
        }
          
      }      
    })  
    
    this.db_tasks.on("child_removed", snap => {
      if (snap.val() !== null) {
        tasks = tasks.filter(task => task.id !== snap.key)
        this.setState({tasks})
        if (tasks.length > 0) {
          const container = document.getElementById("messages-container")
          container.scrollTo(0, container.scrollHeight)
        }
      }
    })

  }

  render(){
    
    const tasks = this.state.tasks.map( task =>
      <Task user={this.props.user} key={task.id} task={task} />
    )

    let list = <i>Empty messages list</i> 
    
    if(tasks.length)
      {list = <div id="messages-container" className="messages-container">{tasks}</div> }     

    return (
      <>
        {list}
      </>
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listTask(payload) {
      dispatch(listTask(payload))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
