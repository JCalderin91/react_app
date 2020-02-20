import { CREATE_TASK, DELETE_TASK, READ_TASK, LIST_TASKS } from "../types/tasks";



const initialState = {
  tasks: [],
  task: {},
}


const tasks  = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TASK:
      return { 
        ...state,
        tasks: [...state.tasks, {
          id: state.tasks.length,
          title: payload.title,
          description: payload.description,
          done: false
        }]
      }

    case LIST_TASKS:    
  
      return {
        ...state,
        tasks: payload
      }     
    
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task=>task.id !== payload)
      }
    
    case READ_TASK:
      let task = {}
      if(payload)
        task = state.tasks.find(task => task.id === payload)

      return {
        ...state,
        task
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