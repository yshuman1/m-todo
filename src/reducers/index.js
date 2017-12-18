import { combineReducers } from "redux";
import todoForm from "./todoFormReducer";
import todos from "./todoReducer";
import updateTodoR from "./updateTodoReducer";

const rootReducer = combineReducers({
  todoForm,
  todos,
  updateTodoR
});

export default rootReducer;
