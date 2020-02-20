import React, { Component } from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";


import "./Home.css"

// import tasks from '../tasks.json';

class Home extends Component {
  render(){
    return (
      <section className="container px-sm-5">
        <TaskForm />            
      </section>
    )
  }
}

export default Home;