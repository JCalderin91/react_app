import { ADD_TASK } from "../types/tasks";

const initialState = {
  tasks: [{
    "id": 0,
    "title": "Task 1",
    "description": "Laboris culpa qui veniam irure occaecat duis magna eu nisi irure quis eu.\r\n",
    "done": true
  }, {
    "id": 1,
    "title": "Task 2",
    "description": "Laboris culpa qui veniam irure occaecat duis magna eu nisi irure quis eu.\r\n",
    "done": false
  }]
}


const tasks  = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { 
        ...state,
        tasks: [...state.tasks, {
          id: state.tasks.length,
          title: payload.title,
          description: payload.description,
          done: false
        }]
      }
    
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task=>task.id !== payload)
      }

    case 'TOGGLE_TASK':    

      return {
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === payload)
            task = {...task, done: !task.done}
          return task
        })
      }

    default:
      return state
  }
}

export default tasks;