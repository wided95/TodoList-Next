import { ADD_TODO_REQUEST } from "../actionsTypes/TodoActionTypes";
import { UPDATE_TODO_REQUEST } from "../actionsTypes/TodoActionTypes";
import { DELETE_TODO_REQUEST } from "../actionsTypes/TodoActionTypes";
import { Todo } from "../types/type";

export const addTodos = (newTask: Todo) => {
  return {
    type: ADD_TODO_REQUEST,
    payload: newTask,
  };
};


//Update function
export const updateTodo = (taskId: number, updatedTask: Todo) => {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: { id: taskId, updatedTask },
  };
};


//Delete function
export const deleteTodo = (taskId: number) => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: taskId,
  };
};