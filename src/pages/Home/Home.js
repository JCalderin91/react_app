import React, { Component } from 'react';

import Tasks from '../../components/Tasks/Tasks';
import TaskForm from "../../components/TaskForm/TaskForm";

// import tasks from '../tasks.json';

class Home extends Component {
  render(){
    return (
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <TaskForm />
          </div>
          <div className="col-12 col-md-6">          
            <Tasks/>
          </div> 
        </div>       
      </section>
    )
  }
}

export default Home;