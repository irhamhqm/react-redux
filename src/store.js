import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import counterReducer from "./reducer/counterReducer";
import postReducer from "./reducer/postReducer";
import todoReducer from "./reducer/todoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  post: postReducer
}),
composeEnhancers(applyMiddleware(thunk))
);

export default store;
