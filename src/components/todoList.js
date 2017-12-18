import React from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  editedTextActionCreator,
  saveUpdateActionCreator
} from "../actions";

function mapStateToProps(state) {
  return {
    todoArr: state.todos,
    updateTodoR: state.updateTodoR
  };
}

const TodoList = props => {
  const deleteItem = e => {
    props.deleteTodo(e.target.id);
  };
  const updateTodoBTN = e => {
    console.log("e.target.id", e.target.id);

    props.updateTodo(e.target.id);
  };
  const editedTextMethod = e => {
    props.editedTextActionCreator(e.target.value);
  };
  const saveUpdate = e => {
    props.saveUpdateActionCreator(props.updateTodoR);
  };

  return (
    <div>
      <ul>
        {props.todoArr.map((element, index) => {
          console.log(props.updateTodoR, "update Todo");

          return (
            <li key={index}>
              {element}
              <button id={index} onClick={deleteItem}>
                Delete
              </button>
              <button id={index} onClick={updateTodoBTN}>
                Update
              </button>
              {index == props.updateTodoR.updateIndex && (
                <div>
                  <input type="text" onChange={editedTextMethod} />{" "}
                  <button onClick={saveUpdate}>save</button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, {
  deleteTodo,
  updateTodo,
  editedTextActionCreator,
  saveUpdateActionCreator
})(TodoList);
