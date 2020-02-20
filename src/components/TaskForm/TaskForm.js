import React, { Component } from 'react';
import firebase from "../../firebase/firebase";

import Tasks from "../Tasks/Tasks";

class TaskForm extends Component {

  constructor() {
    super();
    this.db_tasks = firebase.database().ref().child("users");
  }

  state = {
    title: '',
    description: '',
  }

  onSubmit = e => {
    e.preventDefault()
    const container = document.getElementById("messages-container")
    const created_at = new Date().toTimeString().split(" ")[0]    
    const payload = {
      name: this.state.title,
      email: this.state.description,
      created_at: created_at
    }
    this.db_tasks.push(payload, function() {
      console.log(payload);      
      container.scrollTo(0, container.scrollHeight)
      console.log("Data has been insert")            
    })
    this.setState({
      description: ''
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
      <>
        <form className="py-3" onSubmit={this.onSubmit}>
          <h5 className="custom-color"><b>Chat room</b></h5>
          <div className="form-group">
            <label>Username</label>
            <input name="title" type="text" required className="form-control" onChange={this.onChange} value={this.state.title} placeholder="Your username"/>
          </div>

          <Tasks user={this.state.title}/>

        
          <div className="input-group">
            <input name="description" required className="form-control" onChange={this.onChange} value={this.state.description} placeholder="Message textarea"></input>
            <div className="input-group-append">
              <button type="submit" className="btn custom-bg px-3">➤</button>
            </div>
          </div> 
        </form>      
      </>
    )
  }
}

export default TaskForm;