

import { ADD_TODO_REQUEST} from "../actionsTypes/TodoActionTypes";
import { Todo } from "../types/type";

const initialState: Todo[] = [
  { id: 1, title: "Todo 1", description: "dsfsdfsdfds", status: "pending",startDate:Date(),
  endDate:Date() },
  { id: 2, title: "Todo 2", description: "dsfsdfsdfds", status: "active",startDate:Date(),
  endDate:Date() },
];

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return state.concat(action.payload);

    default:
      return state;
  }
};
export default TodoReducer;
