// import {
//     combineReducers,
//      createStore,
//     applyMiddleware,
//     compose,
//   } from "redux";
//   import thunk from "redux-thunk";
//   import { TodoReducer } from "../reducers/TodoReducer";
//   declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }
// //   const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const rootReducer = combineReducers({
//     todos: TodoReducer,
//   });

//   const store = createStore(rootReducer);

//   export default store;
//   import { compose, createStore } from "redux";
// import combineReducer from "../reducers/TodoReducer";
// declare global {
//         interface Window {
//           __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//         }
//       }
// export default createStore(
//   combineReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// );

// store.ts
// store.ts
// store.ts

// store.ts
import {
  createStore,
  applyMiddleware,
  Store,
  Action,
  AnyAction,
  Middleware,
} from "redux";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer from "../reducers/TodoReducer"; // Import your root reducer

const middleware: Middleware<
  {},
  RootState,
  ThunkDispatch<RootState, undefined, Action<string>>
>[] = [thunk as any];

// Define your root state and actions
type RootState = ReturnType<typeof rootReducer>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;

// Define the makeStore function
const makeStore: MakeStore<Store<RootState, AnyAction>> = (context) =>
  createStore(rootReducer, applyMiddleware(...middleware));

// Create the wrapper
const wrapper = createWrapper<Store<RootState, AnyAction>>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

// Export the wrapper and the HYDRATE action
export { wrapper, HYDRATE };
