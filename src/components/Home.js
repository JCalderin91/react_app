import React, { Component } from 'react';import { connect } from "react-redux";

import Tasks from './Tasks';
import TaskForm from "./TaskForm";

// import tasks from '../tasks.json';

class Home extends Component {
  render(){
    return (
      <section className="container row">
        <div className="col-12 col-md-6">
          <TaskForm />
        </div>
        <div className="col-12 col-md-6">          
          <Tasks/>
        </div>        
      </section>
    )
  }
}



export default Home;