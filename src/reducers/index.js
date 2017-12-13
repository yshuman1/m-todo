import { combineReducers } from "redux";
import todoForm from "./todoFormReducer";
import todos from "./todoReducer";

const rootReducer = combineReducers({
  todoForm,
  todos
});

export default rootReducer;
