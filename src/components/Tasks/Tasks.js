import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import { connect } from 'react-redux';


class Tasks extends Component {
  render(){
    
    const tasks = this.props.tasks.map( task =>
      <Task key={task.id} task={task} />
    )

    let list = <i>Empty list</i> 
    
    if(tasks.length)
      {list = <ul className="list-group">{tasks}</ul> }     

    return (
      <>
        <h4 className="mb-3">Tasks: {this.props.tasks.length}</h4>
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


export default connect(mapStateToProps, null)(Tasks);
