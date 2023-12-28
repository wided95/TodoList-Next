import {
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
} from "../actionsTypes/TodoActionTypes";
import { Todo } from "../types/type";

const initialState: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    description: "dsfsdfsdfds",
    status: "pending",
    startDate: Date(),
    endDate: Date(),
  },
  {
    id: 2,
    title: "Todo 2",
    description: "dsfsdfsdfds",
    status: "active",
    startDate: Date(),
    endDate: Date(),
  },
  {
    id: 3,
    title: "Todo 3",
    description: "dsfsfgfgfdfsdfds",
    status: "closed",
    startDate: Date(),
    endDate: Date(),
  },
];

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return state.concat(action.payload);
    case UPDATE_TODO_REQUEST:
      return state.map((todo: Todo) =>
        todo.id === action.payload.id ? action.payload.updatedTask : todo
      );

    case DELETE_TODO_REQUEST:
      return state.filter((todo: Todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
export default TodoReducer;
