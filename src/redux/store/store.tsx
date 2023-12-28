import {
  
   createStore,
 
} from "redux";

import combineReducer from "../reducers/TodoReducer";

export default createStore(combineReducer);

