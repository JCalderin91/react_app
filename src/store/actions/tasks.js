import { CREATE_TASK, READ_TASK, LIST_TASKS } from '../types/tasks';

export const listTask = payload => ({
  type: LIST_TASKS,
  payload
})

export const addTask = payload => ({
  type: CREATE_TASK,
  payload,
})

export const readTask = payload => ({
  type: READ_TASK,
  payload,
})


export const removeTask = payload => ({
  type: 'REMOVE_TASK',
  payload,
})

export const toggleTask = payload => ({
  type: 'TOGGLE_TASK',
  payload,
})