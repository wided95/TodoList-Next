import { ADD_TODO_REQUEST } from "../actionsTypes/TodoActionTypes";
import { Todo } from "../types/type";

export const addTodos = (newTask: Todo) => {
  return {
    type: ADD_TODO_REQUEST,
    payload: newTask,
  };
};
